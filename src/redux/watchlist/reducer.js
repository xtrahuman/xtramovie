import {
  GETWATCHLISTSTART,
  POSTWATCHLISTSTART,
  DELETEWATCHLISTSTART,
  GETWATCHLISTSUCCESS,
  DELETEWATCHLISTSUCCESS,
  POSTWATCHLISTSUCCESS,
  GETWATCHLISTFAILURE,
  POSTWATCHLISTFAILURE,
  DELETEWATCHLISTFAILURE,
} from "./action";

const INITIAL_STATE = {
  watchlist: [],
  error: null,
  message: null,
  listLoading: false,
};

const watchlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTWATCHLISTSTART:
    case GETWATCHLISTSTART:
    case DELETEWATCHLISTSTART:
      return {
        ...state,
        listLoading: true,
        message: null,
        error: null,
      };

    case POSTWATCHLISTSUCCESS:
    case DELETEWATCHLISTSUCCESS:
      return {
        ...state,
        listLoading: false,
        message: action.payload,
      };

    case GETWATCHLISTSUCCESS:
      return {
        ...state,
        listLoading: false,
        watchlist: action.payload,
      };
    case POSTWATCHLISTFAILURE:
    case GETWATCHLISTFAILURE:
    case DELETEWATCHLISTFAILURE:
      return {
        ...state,
        listLoading: false,
        error: action.payload,
        message: null,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
