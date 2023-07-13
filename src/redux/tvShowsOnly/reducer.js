import {
  GETTVSHOWSTART,
  GETALLTVSHOWFAILURE,
  GETALLTVSHOWSUCCESS,
  GETTVSHOWDETAILSTART,
  GETTVSHOWDETAILSUCCESS,
  GETTVSHOWDETAILFAILURE,
} from "./action";

const INITIAL_STATE = {
  tvshows: {},
  error: null,
  tvshowLoading: false,
  message: null,
};

const tvshowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTVSHOWSTART:
    case GETTVSHOWDETAILSTART:
      return {
        ...state,
        tvshowLoading: true,
      };
    case GETALLTVSHOWSUCCESS:
    case GETTVSHOWDETAILSUCCESS:
      return {
        ...state,
        tvshowLoading: false,
        tvshows: action.payload,
      };
    case GETALLTVSHOWFAILURE:
    case GETTVSHOWDETAILFAILURE:
      return {
        ...state,
        tvshowLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tvshowReducer;
