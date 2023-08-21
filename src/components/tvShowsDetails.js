import Container from "./container";
import Navbar from "./navbar";
import FooterSection from "./footer";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoKey } from "../redux/moviesonly/action";
import { getTvshowDetails } from "../redux/tvShowsOnly/action";
import Comment from "./comments/comment";
import submitWatchlist from "../redux/watchlist/action";
import { getWatchlist } from "../redux/watchlist/action";
import { getRating } from "../utility";
import { Rating } from "@smastrom/react-rating";
import { getMovieRating, submitRating } from "../redux/ratings/action";

const TvShowsDetails = () => {
  const dispatch = useDispatch();
  const [addWatchlistError, setAddWatchListError] = useState(false);
  const [buyError, setBuyError] = useState(false);
  const { message, watchlist } = useSelector((state) => state.watchlist);
  const { loggedin } = useSelector((state) => state.userDetails);
  const { key, tvshows } = useSelector((state) => state.tvshows);
  const [rating, setRating] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(false);

  const { mediaType, id } = useParams();

  useEffect(() => {
    dispatch(getTvshowDetails(id));
    dispatch(getVideoKey(mediaType, id));

    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      setSubmitStatus(false);
      dispatch(getWatchlist(userprofile.token));
      dispatch(
        getMovieRating(
          userprofile.token,
          tvshows.id,
          setRating,
          findRate,
          userprofile.userId
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitStatus]);

  useEffect(() => {
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      dispatch(getWatchlist(userprofile.token));
      dispatch(
        getMovieRating(
          userprofile.token,
          tvshows.id,
          setRating,
          findRate,
          userprofile.userId
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tvshows]);

  function handleChange(selectedValue, movie_id) {
    const rating_info = {
      movie_id,
      rate: selectedValue,
    };
    const userprofile = JSON.parse(localStorage.getItem("user"));
    if (userprofile) {
      dispatch(
        submitRating(
          userprofile.token,
          rating_info,
          setRating,
          findRate,
          userprofile.userId
        )
      );
    }

    setSubmitStatus(true);
  }

  const comments = [
    {
      userName: "xtrahuman",
      id: "xtrahuman",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      date_comment: "30.8.2023",
      time_comment: "18:35",
    },
    {
      userName: "bosco",
      id: "bosco1",
      comment: "testing comment",
      date_comment: "18.7.2021",
      time_comment: "15:35",
    },
    {
      userName: "abel",
      id: "abel",
      comment:
        "new section of the comment that is different again, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      date_comment: "30.8.2023",
      time_comment: "18:35",
    },
  ];

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

    return itemExist ? true : false;
  };

  const findRate = (items, id) => {
    const itemExist = items?.find((item) => item.user_id === id);
    return itemExist ? itemExist.rate : 0;
  };

  const handleBuy = () => {
    setBuyError(true);
    setTimeout(function () {
      setBuyError(false);
    }, 4000);
  };
  return (
    <>
      <Navbar />
      <div className="">
        <p
          className={`fixed top-[90px] bg-[#0D1B2A] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] text-red-500 ${
            !addWatchlistError ? "hidden right-[-100px]" : ""
          }`}
        >
          {" "}
          kindly sign in to access
        </p>
        <p
          className={`fixed top-[90px] bg-[#0D1B2A] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] text-red-500 ${
            !buyError ? "hidden right-[-100px]" : ""
          }`}
        >
          {" "}
          payment feature not integrated, please add to watchlist
        </p>
        <p
          className={`fixed top-[90px] bg-[#0D1B2A] text-[#e4d804] py-2 px-3 right-[40px] transition ease-in-out delay-150 z-[5] ${
            !message ? "hidden right-[-100px]" : ""
          }`}
        >
          {" "}
          successful
        </p>
        <Container className="py-[80px]">
          <h1 className="text-[60px] md:w-full font-bold font-['poppins'] mobile-details-h1">
            {tvshows.name}
          </h1>
          <div
            className="
        w-[60%] pb-[30px] pt-[0px] mobile-details-width"
          >
            <div className="mt-5 w-full">
              <iframe
                // className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]"
                title="endless summer"
                width="100%"
                height="350px"
                src={`https://www.youtube.com/embed/${key}`}
              ></iframe>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <div className="flex gap-x-4 text-base items-center mobile-flex-moviedetail">
                <div className="flex w-[100px] relative gap-x-1 items-center h-4 text-base text-[#e4d804]">
                  <span className="text-white">
                    {getRating(tvshows) ? getRating(tvshows) : ""}
                  </span>
                  <Rating
                    value={rating}
                    className="hidden top-[0px] text-[10px]"
                    style={{ maxWidth: 80 }}
                    onChange={(e) => handleChange(e, tvshows.id)}
                  />
                </div>
                <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
                <div>action</div>
                <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
                <div>2021</div>
                <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
                <div>90 min</div>
                <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
                <div>16+</div>
              </div>
              <div className="h-4">
                <BsFillBookmarkHeartFill className="text-[#e4d804] text-base" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 relative">
                <button
                  className="bg-[#e4d804] h-[#40px] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base"
                  onClick={handleBuy}
                >
                  Buy
                </button>
                {!findItem(watchlist, tvshows.id) || !loggedin ? (
                  <button
                    onClick={() => {
                      const watchlistObj = {
                        buy_price:
                          (tvshows.media_type || mediaType) === "movie"
                            ? 10
                            : 12,
                        rent_price: 5.0,
                        movie_name: tvshows.name,
                        release_date: tvshows.release_date,
                        backdrop_path: tvshows.image,
                        image_url: tvshows.image,
                        movie_id: tvshows.id,
                        summary: tvshows.summary,
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
            </div>
            <p className="mt-6 text-base">{tvshows.summary}</p>
            <div className="mt-6">
              <h2 className="mb-3 text-xl">Genres</h2>
              <div className="flex gap-x-4">
                {["action", "thriller", "comedy"].map((item) => (
                  <p key={item} className="px-3 py-2 rounded-xl bg-[#0D1B2A]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Comment comments={comments} />
        </Container>
      </div>
      <hr className="border-1 border-[#0D1B2A] mt-10" />
      <FooterSection />
    </>
  );
};

export default TvShowsDetails;
