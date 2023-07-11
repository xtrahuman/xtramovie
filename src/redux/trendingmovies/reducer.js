import { GETALLMOVIEFAILURE,GETALLMOVIESUCCESS,GETMOVIEDETAIL,GETMOVIESTART } from "./action"

const INITIAL_STATE = {
  movies: {},
  error: null,
  loading: false,
  message: null,
}

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETMOVIESTART:
      return {
        ...state,
        loading: true,
      }
    case GETALLMOVIESUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      }
    case GETALLMOVIEFAILURE:
      return {
        ...state,
        // loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default movieReducer;