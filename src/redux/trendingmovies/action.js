import axios from "axios";
import { authorization,url,imageUrl } from "../../utility";
export const GETMOVIESTART = "movies/getall/start";
export const GETALLMOVIESUCCESS = "movies/getall/success";
export const GETALLMOVIEFAILURE = "movies/getall/failure";
export const GETMOVIEDETAIL = "movies/getdetail";


const getMoviesStart = () => ({
  type: GETMOVIESTART,
});

const getMoviesSuccess = (result) => {
  let moviesResult = {
    page_no: result.page,
    total_pages: result.total_pages,
    movies: []
  }

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
  type: GETALLMOVIESUCCESS,
  payload: moviesResult,
  }
};

const getMoviesFailure = (error) => ({
  type: GETALLMOVIEFAILURE,
  payload: error,
});

const getMovies = (page_no=1) => (dispatch) => {
  dispatch(getMoviesStart());
  axios
    .get(`${url}/3/trending/all/day?language=en-US&page=${page_no}`, {
      headers: {
        Authorization: `${authorization}`,
      },
    })
    .then((response) => {
      dispatch(getMoviesSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getMoviesFailure(err.response?.data?.error));
    });
};

export default getMovies;
