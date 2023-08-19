import axios from "axios";
import { authorization, url, imageUrl } from "../../utility";
export const GETTVSHOWSTART = "tvshows/getall/start";
export const GETTVSHOWDETAILSTART = "tvshows/detail/start";
export const GETALLTVSHOWSUCCESS = "tvshows/getall/success";
export const GETTVSHOWDETAILSUCCESS = "tvshows/detail/success";
export const GETALLTVSHOWFAILURE = "tvshows/getall/failure";
export const GETTVSHOWDETAILFAILURE = "tvshows/detail/failure";

const getTvshowStart = () => ({
  type: GETTVSHOWSTART,
});
const getTvshowDetailStart = () => ({
  type: GETTVSHOWDETAILSTART,
});

const getTvshowDetailSuccess = (result) => {
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
    type: GETTVSHOWDETAILSUCCESS,
    payload: movies,
  };
};

const getTvshowSuccess = (result) => {
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
    type: GETALLTVSHOWSUCCESS,
    payload: moviesResult,
  };
};

const getTvshowFailure = (error) => ({
  type: GETALLTVSHOWFAILURE,
  payload: error,
});

const getTvshowDetailFailure = (error) => ({
  type: GETTVSHOWDETAILFAILURE,
  payload: error,
});

const getTvshows = (page_no) => (dispatch) => {
  dispatch(getTvshowStart());
  axios
    .get(`${url}/3/tv/popular?language=en-US&page=${page_no}`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getTvshowSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getTvshowFailure(err.response?.data?.error));
    });
};

export const getTvshowDetails = (showId) => (dispatch) => {
  dispatch(getTvshowDetailStart())
  axios
    .get(`${url}/3/tv/${showId}`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getTvshowDetailSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getTvshowDetailFailure(err.response?.data?.error));
    });
};

export default getTvshows;
