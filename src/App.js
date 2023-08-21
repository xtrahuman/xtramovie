import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useEffect } from "react";
import Home from "./components/homepage";
import AllMovies from "./components/allmovie";
import AllTvshows from "./components/alltvshow";
import TvShowsDetails from "./components/tvShowsDetails";
import MoviesDetails from "./components/movieDetails";
import getMovies from "./redux/trendingmovies/action";
import AboutPage from "./components/aboutpage";
import Login from "./components/login";
import SignUp from "./components/signup";
import Logout from "./components/logout";
import WatchList from "./components/watchlist";
import '@smastrom/react-rating/style.css'
import UserProfile from "./components/userprofile";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // const [user, setUser] = useState(null);
  // const handleLogin = (loggedInUser) => {
  //   setUser(loggedInUser);
  // };
  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <Router>
    <div className="App relative w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={< AllMovies/>} />
          <Route path="/tvshow" element={< AllTvshows/>} />
          <Route path="/about" element={< AboutPage/>} />
          <Route path="/login" element={<Login page='/' />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout"element={<Logout />} />
          <Route path="/userprofile"element={<UserProfile />} />
          <Route path="/watchlists"element={<WatchList />} />
          <Route path="/tvshow/:id/details/:mediaType" element={<TvShowsDetails/>} />
          <Route path="/movies/:id/details/:mediaType" element={<MoviesDetails/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
