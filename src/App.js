import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage";
import AllMovies from "./components/allmovie";
import AllTvshows from "./components/alltvshow";

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={< AllMovies/>} />
          <Route path="/tvshow" element={< AllTvshows/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
