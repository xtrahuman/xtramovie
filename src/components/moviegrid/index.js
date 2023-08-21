import React, { useState, useEffect } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { PiPlayCircleThin } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";
import { nextPage, prevPage } from "../../utility";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesDetails } from "../../redux/moviesonly/action";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utility";
import { submitWatchlist, getWatchlist } from "../../redux/watchlist/action";
import { userprofile, getRating } from "../../utility";

export const getYear = (arr) => {
  let year = arr.split("-");
  return year[0];
};

const MovieGrid = ({ movies, getMovies, mediaType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addWatchlistError, setAddWatchListError] = useState(false);
  const { message, error, watchlist } = useSelector((state) => state.watchlist);
  const { loggedin } = useSelector((state) => state.userDetails);

  const handleOtherPage = (pageFunc, page_no, total_pages) => {
    dispatch(getMovies(pageFunc(page_no, total_pages)));
  };

  console.log(message);

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      dispatch(getWatchlist(userprofile.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMovieDetails = (mediaType, movieId) => {
    dispatch(getMoviesDetails(movieId));
    if (mediaType === "movie") {
      navigate(`/movies/${movieId}/details/${mediaType}`);
    } else if (mediaType === "tv") {
      navigate(`/tvshow/${movieId}/details/${mediaType}`);
    }
    scrollToTop();
  };

  const handleWatchListSubmission = (obj) => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      const token = userprofile.token;

      dispatch(submitWatchlist(token, obj));
    } else {
      setAddWatchListError(true);
      setTimeout(function () {
        setAddWatchListError(false);
      }, 4000);
    }
  };

  const findItem = (items, id) => {
    const itemExist = items?.find((item) => item.movie_id === id);
    // console.log(items,'itemss')
    return itemExist ? true : false;
  };

  return (
    <section>
      <p
        className={`fixed top-[90px] bg-[#0D1B2A] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] text-red-500 ${
          !addWatchlistError ? "hidden right-[-100px]" : ""
        }`}
      >
        {" "}
        kindly sign in to access
      </p>
      <p
        className={`fixed top-[90px] bg-[#0D1B2A] text-[#e4d804] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] ${
          !message ? "hidden right-[-100px]" : ""
        }`}
      >
        {" "}
        successful
      </p>
      <div className="w-full flex flex-wrap gap-x-3.5 gap-y-8 my-5">
        {movies?.movies?.map((movie) => (
          <div key={movie.id} className="card">
            <div className="w-full relative rounded-2xl">
              <img
                className="w-full lg:h-[auto] md:h-[auto] rounded-2xl"
                src={movie.image}
                alt="logo"
              />
              <div
                onClick={() =>
                  handleMovieDetails(movie.media_type || mediaType, movie.id)
                }
                className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-3 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-2xl"
              >
                <div className="h-4 p-4 px-1 w-10 flex items-center justify-center rounded-lg bg-[#0D1B2A]">
                  <BsFillBookmarkHeartFill className="text-[#e4d804] text-base" />
                </div>
                <div
                  onClick={() =>
                    handleMovieDetails(movie.media_type || mediaType, movie.id)
                  }
                  className="place-self-center text-8xl font-thin"
                >
                  <PiPlayCircleThin />
                </div>
                <div className="flex gap-x-1 p-4 rounded-lg bg-[#0D1B2A] justify-self-end items-center h-4 text-base text-[#e4d804]">
                  <AiOutlineStar />
                  <span className="text-[#fff]">
                  {getRating(movie) ? getRating(movie) : ""}
                  </span>
                </div>
               
              </div>

            </div>
            <div className="flex justify-between my-3">
              <h4 className="crop-text mr-4">{movie.name}</h4>
              <span>{getYear(movie.release_date)}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2 relative">
                <button className="bg-[#e4d804] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base">
                  Buy
                </button>
                {!findItem(watchlist, movie.id) || !loggedin ? (
                  <button
                    onClick={() => {
                      console.log(movie.summary, "testing summary");
                      const watchlistObj = {
                        buy_price:
                          (movie.media_type || mediaType) == "movie" ? 10 : 12,
                        rent_price: 5.0,
                        movie_name: movie.name,
                        release_date: movie.release_date,
                        backdrop_path: movie.image,
                        image_url: movie.image,
                        movie_id: movie.id,
                        summary: movie.summary,
                      };
                      handleWatchListSubmission(watchlistObj);
                    }}
                    className="bg-[#0D1B2A] h-[#40px] border-3 border-[#e4d804] text-[#e4d804] px-4 py-1 rounded-md text-base"
                  >
                    Add to watchlist
                  </button>
                ) : (
                  <p className="bg-[#0D1B2A] h-[#40px] border-3 border-[#e4d804] text-[#e4d804] px-4 py-1 rounded-md text-base">
                    In Watchlist
                  </p>
                )}
              </div>
              {(movie.media_type || mediaType) == "movie" ? (
                <p className="text-[18px]">
                  <span>&pound;</span>
                  <span>10</span>
                </p>
              ) : (
                <p className="text-[18px]">
                  <span>&pound;</span>
                  <span>12</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex ${
          movies.page_no === 1 ? "justify-end" : "justify-between"
        }`}
      >
        <button
          className={`p-4 rounded-lg text-[#fff] hover:text-[#e4d804] bg-[#0D1B2A] ${
            movies.page_no === 1 ? "hidden" : "flex"
          }`}
          onClick={() =>
            handleOtherPage(prevPage, movies?.total_pages, movies?.page_no)
          }
        >
          Prev
        </button>
        <button
          className="p-4 rounded-lg text-[#fff] hover:text-[#e4d804] bg-[#0D1B2A]"
          onClick={() =>
            handleOtherPage(nextPage, movies?.total_pages, movies?.page_no)
          }
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MovieGrid;
