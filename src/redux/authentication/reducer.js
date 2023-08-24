import {
  GETLOGINSTART,
  GETLOGINSUCCESS,
  GETLOGINFAILURE,
  LOGOUT,
  AUTHENTICATED,
} from "./action";

const INITIAL_STATE = {
  user: {},
  error: null,
  userLoading: false,
  loggedin: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETLOGINSTART:
      return {
        ...state,
        userLoading: true,
        message: null,
        loggedin: false,
        error: null,
      };
    case GETLOGINSUCCESS:
    case AUTHENTICATED:
      return {
        ...state,
        userLoading: false,
        user: action.payload,
        loggedin: true,
      };
    case GETLOGINFAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.payload,
        message: null,
        loggedin: false,
      };
    case LOGOUT:
      return {
        ...state,
        userLoading: false,
        loggedin: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
