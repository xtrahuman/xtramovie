import { GETONLYMOVIESTART, GETALLONLYMOVIEFAILURE,GETALLONLYMOVIESUCCESS,GETONLYMOVIEDETAIL } from "./action"

const INITIAL_STATE = {
  onlyMovies: {},
  error: null,
  onlyMoviesLoading: false,
  message: null,
}

const onlyMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETONLYMOVIESTART:
      return {
        ...state,
        onlyMoviesLoading: true,
      }
    case GETALLONLYMOVIESUCCESS:
      return {
        ...state,
        onlyMoviesLoading: false,
        onlyMovies: action.payload,
      }
    case GETALLONLYMOVIEFAILURE:
      return {
        ...state,
        onlyMoviesloading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default onlyMovieReducer;