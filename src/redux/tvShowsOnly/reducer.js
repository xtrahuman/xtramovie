import { GETTVSHOWSTART, GETALLTVSHOWFAILURE,GETALLTVSHOWSUCCESS,GETTVSHOWDETAIL } from "./action"

const INITIAL_STATE = {
  tvshows: {},
  error: null,
  tvshowLoading: false,
  message: null,
}

const tvshowReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTVSHOWSTART:
      return {
        ...state,
        tvshowLoading: true,
      }
    case GETALLTVSHOWSUCCESS:
      return {
        ...state,
        tvshowLoading: false,
        tvshows: action.payload,
      }
    case GETALLTVSHOWFAILURE:
      return {
        ...state,
        tvshowLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default tvshowReducer;