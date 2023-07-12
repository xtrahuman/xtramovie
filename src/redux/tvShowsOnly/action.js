import axios from "axios";
import { authorization, url, imageUrl } from "../../utility";
export const GETTVSHOWSTART = "tvshows/getall/start";
export const GETALLTVSHOWSUCCESS = "tvshows/getall/success";
export const GETALLTVSHOWFAILURE = "tvshows/getall/failure";

const getTvshowStart = () => ({
  type: GETTVSHOWSTART,
});

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

export default getTvshows;
