import axios from "axios";
import { authorization, url, imageUrl } from "../../utility";
export const GETONLYMOVIESTART = "onlymovies/getall/start";
export const GETMOVIEDETAILSTART = "moviedetail/getall/start";
export const GETALLONLYMOVIESUCCESS = "onlymovies/getall/success";
export const GETMOVIEDETAILSUCCESS = "moviedetail/getall/success";
export const GETALLONLYMOVIEFAILURE = "onlymovies/getall/failure";
export const GETMOVIEDETAILFAILURE = "moviedetail/getall/failure";
export const GETMOVIEDETAILVIDEO = "moviedetailvideo/get";

const getOnlyMoviesStart = () => ({
  type: GETONLYMOVIESTART,
});

const getMovieVideoKey = (data) => {
  const result = data.results?.filter(
    (result) => result.official === true 
    || result.name == "Official Trailer"
  );
  const key = result[1]?.key || result[0]?.key;
  return {
    type: GETMOVIEDETAILVIDEO,
    payload: key,
  };
};

const getOnlyMoviesSuccess = (result) => {
  let moviesResult = {
    page_no: result.page,
    total_pages: result.total_pages,
    movies: [],
  };

  result = result.results;
  let movies = result.map((result) => ({
    id: result.id,
    name: result.name || result.title,
    release_date: result.release_date || result.first_air_date,
    media_type: result.media_type,
    backgroundImg: `${imageUrl}/t/p/original${result.backdrop_path}`,
    image: `${imageUrl}/t/p/original${result.poster_path}`,
    rating: result.vote_average,
  }));

  moviesResult.movies = movies;
  return {
    type: GETALLONLYMOVIESUCCESS,
    payload: moviesResult,
  };
};

const getMovieDetailSuccess = (result) => {
  let movies = {
    id: result.id,
    name: result.name || result.title,
    release_date: result.release_date || result.first_air_date,
    backgroundImg: `${imageUrl}/t/p/original${result.backdrop_path}`,
    image: `${imageUrl}/t/p/original${result.poster_path}`,
    genre: result.genre,
    rating: result.vote_average,
    summary: result.overview,
  };

  return {
    type: GETMOVIEDETAILSUCCESS,
    payload: movies,
  };
};

const getOnlyMoviesFailure = (error) => ({
  type: GETALLONLYMOVIEFAILURE,
  payload: error,
});

const getMovieDetailFailure = (error) => ({
  type: GETMOVIEDETAILFAILURE,
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

export const getVideoKey = (mediaType,movieId) => (dispatch) => {
  axios
    .get(`${url}/3/${mediaType}/${movieId}/videos?language=en-US`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getMovieVideoKey(response.data));
    })
    .catch((err) => {
      dispatch(getMovieDetailFailure(err.response?.data?.error));
    });
};

export const getMoviesDetails = (movieId) => (dispatch) => {
  dispatch(getOnlyMoviesStart());
  axios
    .get(`${url}/3/movie/${movieId}`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getMovieDetailSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getMovieDetailFailure(err.response?.data?.error));
    });
};

export default getOnlyMovies;
