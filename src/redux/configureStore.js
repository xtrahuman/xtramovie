import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import movieReducer from "./movies/reducer";

const reducer = combineReducers({
  trendMovies: movieReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
