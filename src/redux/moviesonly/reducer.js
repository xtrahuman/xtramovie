import {
  GETONLYMOVIESTART,
  GETALLONLYMOVIEFAILURE,
  GETALLONLYMOVIESUCCESS,
  GETMOVIEDETAILVIDEO,
  GETMOVIEDETAILSUCCESS,
} from "./action";

const INITIAL_STATE = {
  onlyMovies: {},
  error: null,
  key: null,
  onlyMoviesLoading: false,
  message: null,
};

const onlyMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETONLYMOVIESTART:
      return {
        ...state,
        onlyMoviesLoading: true,
      };
    case GETALLONLYMOVIESUCCESS:
    case GETMOVIEDETAILSUCCESS:
      return {
        ...state,
        onlyMoviesLoading: false,
        onlyMovies: action.payload,
      };
    case GETALLONLYMOVIEFAILURE:
      return {
        ...state,
        onlyMoviesLoading: false,
        error: action.payload,
      };
    case GETMOVIEDETAILVIDEO:
      return {
        ...state,
        onlyMoviesLoading: false,
        key: action.payload,
      };
    default:
      return state;
  }
};

export default onlyMovieReducer;
