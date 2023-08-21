import {
    GETRATINGSTART,
    POSTRATINGSTART,
    GETRATINGSUCCESS,
    POSTRATINGSUCCESS,
    GETRATINGFAILURE,
    POSTRATINGFAILURE,
  } from "./action";
  
  const INITIAL_STATE = {
    ratingInfo: {},
    error: null,
    message: null,
    rateLoading: false,
  };
  
  const ratingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case POSTRATINGSTART:
      case GETRATINGSTART:
        return {
          ...state,
          rateLoading: true,
          message: null,
          error: null,
        };
  
      case POSTRATINGSUCCESS:
        return {
          ...state,
          rateLoading: false,
          message: action.payload,
        };
  
      case GETRATINGSUCCESS:
        return {
          ...state,
          rateLoading: false,
          ratingInfo: action.payload,
        };
      case POSTRATINGFAILURE:
      case GETRATINGFAILURE:
        return {
          ...state,
          rateLoading: false,
          error: action.payload,
          message: null,
        };
      default:
        return state;
    }
  };
  
  export default ratingReducer;
  