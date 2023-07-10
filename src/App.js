import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./components/homepage";
import AllMovies from "./components/allmovie";
import AllTvshows from "./components/alltvshow";
import TvShowsDetails from "./components/tvShowsDetails";
import MoviesDetails from "./components/movieDetails";
import FooterSection from "./components/footer";
import getMovies from "./redux/trendingmovies/action";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getMovies());
  },[]);
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
        <hr className="border-1 border-[#0D1B2A] mt-10"/>
        <FooterSection />
    </div>
    </Router>
  );
}

export default App;
