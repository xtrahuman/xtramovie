import axios from "axios";
export const GETMOVIESTART = "movies/getall/start";
export const GETALLMOVIESUCCESS = "movies/getall/success";
export const GETALLMOVIEFAILURE = "movies/getall/failure";
export const GETMOVIEDETAIL = "movies/getdetail";
const url = "https://api.themoviedb.org";

const authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjk4ZjU5NTJkOTVkNWY0NjIwODEyNTI5OTVhOGU4OSIsInN1YiI6IjY0OWEzNjM4ZDM1ZGVhMDEyYzE2YTQxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VWiYH-cTeC1Iq7A-iEzg0p29ZacQqx2Bk2zlzoa0whs";

const getMoviesStart = () => ({
  type: GETMOVIESTART,
});

const getMoviesSuccess = (result) => {
  const page = result.page;
  let movies = result.results;
  movies = movies.map((result) => ({
    pageNo: page,
    id: result.id,
    name: result.name || result.title,
    release_date: result.release_date,
    image: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
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
  console.log("starting request");
  dispatch(getMoviesStart());
  axios
    .get(`${"https://api.themoviedb.org/3/trending/all/day?language=en-US"}`, {
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
