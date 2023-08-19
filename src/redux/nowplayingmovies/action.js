import axios from "axios";
import { authorization, url, imageUrl } from "../../utility";
export const GETNOWPLAYINGMOVIESTART = "nowplayingmovies/getall/start";
export const GETALLNOWPLAYINGMOVIESUCCESS = "nowplayingmovies/getall/success";
export const GETALLNOWPLAYINGMOVIEFAILURE = "nowplayingmovies/getall/failure";
export const GETNOWPLAYINGMOVIEDETAIL = "nowplayingmovies/getdetail";

const getNowPlayingMoviesStart = () => ({
  type: GETNOWPLAYINGMOVIESTART,
});

const getNowPlayingMoviesSuccess = (result) => {
  let moviesResult = {
    page_no: result.page,
    total_pages: result.total_pages,
    movies: [],
  };

    result = result.results
  let movies = result.map((result) => ({
    id: result.id,
    name: result.name || result.title,
    release_date: result.release_date || result.first_air_date,
    media_type: result.media_type,
    backgroundImg: `${imageUrl}/t/p/original${result.backdrop_path}`,
    image: `${imageUrl}/t/p/original${result.poster_path}`,
    rating: result.vote_average,
    summary: result.overview,
  }));

  moviesResult.movies = movies
  return {
    type: GETALLNOWPLAYINGMOVIESUCCESS,
    payload: moviesResult,
  };
};

const getNowPlayingMoviesFailure = (error) => ({
  type: GETALLNOWPLAYINGMOVIEFAILURE,
  payload: error,
});

const getNowPlayingMovies = () => (dispatch) => {
  dispatch(getNowPlayingMoviesStart());
  axios
    .get(`${url}/3/movie/now_playing?language=en-US&page=1`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getNowPlayingMoviesSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getNowPlayingMoviesFailure(err.response?.data?.error));
    });
};

export default getNowPlayingMovies;
