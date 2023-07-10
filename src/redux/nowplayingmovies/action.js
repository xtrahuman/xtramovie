import axios from "axios";
import { authorization,url,imageUrl } from "../../utility";
export const GETNOWPLAYINGMOVIESTART = "nowplayingmovies/getall/start";
export const GETALLNOWPLAYINGMOVIESUCCESS = "nowplayingmovies/getall/success";
export const GETALLNOWPLAYINGMOVIEFAILURE = "nowplayingmovies/getall/failure";
export const GETNOWPLAYINGMOVIEDETAIL = "nowplayingmovies/getdetail";

const getNowPlayingMoviesStart = () => ({
  type: GETNOWPLAYINGMOVIESTART,
});

const getNowPlayingMoviesSuccess = (result) => {
  const page = result.page;
  let movies = result.results;
  console.log(movies)
  movies = movies.map((result) => ({
    pageNo: page,
    id: result.id,
    name: result.name || result.title,
    release_date: result.release_date || result.first_air_date,
    media_type: result.media_type,
    backgroundImg: `${imageUrl}/t/p/original${result.backdrop_path}`,
    image: `${imageUrl}/t/p/original${result.poster_path}`,
    rating: result.vote_average,
  }));
  return {
  type: GETALLNOWPLAYINGMOVIESUCCESS,
  payload: movies,
  }
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
