import { GETNOWPLAYINGMOVIESTART, GETALLNOWPLAYINGMOVIEFAILURE,GETALLNOWPLAYINGMOVIESUCCESS,GETNOWPLAYINGMOVIEDETAIL } from "./action"

const INITIAL_STATE = {
  nowPlayingMovies: [],
  error: null,
  nowPlayingloading: false,
  message: null,
}

const nowPlayingMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETNOWPLAYINGMOVIESTART:
      return {
        ...state,
        nowPlayingloading: true,
      }
    case GETALLNOWPLAYINGMOVIESUCCESS:
      return {
        ...state,
        nowPlayingloading: false,
        nowPlayingMovies: action.payload,
      }
    case GETALLNOWPLAYINGMOVIEFAILURE:
      return {
        ...state,
        nowPlayingloading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default nowPlayingMovieReducer;