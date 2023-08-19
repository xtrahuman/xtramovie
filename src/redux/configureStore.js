import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import movieReducer from "./trendingmovies/reducer";
import nowPlayingMovieReducer from "./nowplayingmovies/reducer";
import onlyMovieReducer from "./moviesonly/reducer";
import tvshowReducer from "./tvShowsOnly/reducer";
import userReducer from "./authentication/reducer";
import watchlistReducer from "./watchlist/reducer";

const reducer = combineReducers({
  trendMovies: movieReducer,
  nowPlaying: nowPlayingMovieReducer,
  onlyMovies: onlyMovieReducer,
  tvshows: tvshowReducer,
  userDetails: userReducer,
  watchlist: watchlistReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
