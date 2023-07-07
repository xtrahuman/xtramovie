import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import AllMovies from "./components/allmovie";
import AllTvshows from "./components/alltvshow";
import TvShowsDetails from "./components/tvShowsDetails";
import MoviesDetails from "./components/movieDetails";

function App() {
  return (
    <Router>
    <div className="App relative w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={< AllMovies/>} />
          <Route path="/tvshow" element={< AllTvshows/>} />
          <Route path="/tvshow/:id/details" element={<TvShowsDetails/>} />
          <Route path="/movies/:id/details" element={<MoviesDetails/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
