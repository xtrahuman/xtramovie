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
  const page = result.page;
  let movies = result.results;
  console.log(movies);
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
  type: GETALLMOVIESUCCESS,
  payload: movies,
  }
};

const getMoviesFailure = (error) => ({
  type: GETALLMOVIEFAILURE,
  payload: error,
});

const getMovies = () => (dispatch) => {
  dispatch(getMoviesStart());
  axios
    .get(`${url}/3/trending/all/day?language=en-US`, {
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
