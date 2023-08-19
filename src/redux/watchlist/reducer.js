import {
    GETWATCHLISTSTART,
    POSTWATCHLISTSTART,
    DELETEWATCHLISTSTART,
    GETWATCHLISTSUCCESS,
    DELETEWATCHLISTSUCCESS,
    POSTWATCHLISTSUCCESS,
    GETWATCHLISTFAILURE,
    POSTWATCHLISTFAILURE,
    DELETEWATCHLISTFAILURE
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
        return {
          ...state,
          listLoading: true,
          message: null,
          error: null,
        };

      case POSTWATCHLISTSUCCESS:
        return {
          ...state,
          listLoading: true,
          message: action.payload,
        };

      case GETWATCHLISTSUCCESS:
        return {
          ...state,
          listLoading: true,
          watchlist: action.payload,
        };
      case POSTWATCHLISTFAILURE:
      case GETWATCHLISTFAILURE:
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
  