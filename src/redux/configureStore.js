import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import movieReducer from "./trendingmovies/reducer";
import nowPlayingMovieReducer from "./nowplayingmovies/reducer";

const reducer = combineReducers({
  trendMovies: movieReducer,
  nowPlaying: nowPlayingMovieReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
