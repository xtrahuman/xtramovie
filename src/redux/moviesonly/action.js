import axios from "axios";
import { authorization, url, imageUrl } from "../../utility";
export const GETONLYMOVIESTART = "onlymovies/getall/start";
export const GETALLONLYMOVIESUCCESS = "onlymovies/getall/success";
export const GETALLONLYMOVIEFAILURE = "onlymovies/getall/failure";
export const GETONLYMOVIEDETAIL = "onlymovies/getdetail";

const getOnlyMoviesStart = () => ({
  type: GETONLYMOVIESTART,
});

const getOnlyMoviesSuccess = (result) => {
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
  }));

  moviesResult.movies = movies
  return {
    type: GETALLONLYMOVIESUCCESS,
    payload: moviesResult,
  };
};

const getOnlyMoviesFailure = (error) => ({
  type: GETALLONLYMOVIEFAILURE,
  payload: error,
});

const getOnlyMovies = (page_no) => (dispatch) => {
  dispatch(getOnlyMoviesStart());
  axios
    .get(`${url}/3/movie/popular?language=en-US&page=${page_no}`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getOnlyMoviesSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getOnlyMoviesFailure(err.response?.data?.error));
    });
};

export default getOnlyMovies;
