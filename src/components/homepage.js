import HeroSection from "./hero";
import { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import Container from "./container";
import MovieGrid from "./moviegrid";
import MovieSlider from "./movieslider";
import { useNavigate } from "react-router-dom";
import getMovies from "../redux/trendingmovies/action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getNowPlayingMovies from "../redux/nowplayingmovies/action";
import getTvshows from "../redux/tvShowsOnly/action";
import { getMoviesDetails } from "../redux/moviesonly/action";
import { scrollToTop } from "../utility";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNowPlayingMovies());
    dispatch(getMovies());
    dispatch(getTvshows());
  }, []);

  const { movies } = useSelector((state) => state.trendMovies);
  const { nowPlayingloading, nowPlayingMovies } = useSelector(
    (state) => state.nowPlaying
  );
  const { tvshows } = useSelector((state) => state.tvshows);

  const filterDropDowns = [
    {
      id: "genres",
      filterName: "all genres",
      items: [
        {
          id: "genres",
          name: "all genres",
        },
        {
          id: "action",
          name: "action",
        },
        {
          id: "Romance",
          name: "Romance",
        },
        {
          id: "Thriller",
          name: "Thriller",
        },
      ],
    },
    {
      id: "years",
      filterName: "all years",
      items: [
        {
          id: "years",
          name: "all years",
        },
        {
          id: "1980",
          name: "1980",
        },
        {
          id: "2021",
          name: "2021",
        },
        {
          id: "2022",
          name: "2022",
        },
      ],
    },
  ];

  const buttonFilter = [
    {
      id: "popular",
      name: "popular",
    },
    {
      id: "latest",
      name: "latest",
    },
  ];

  const filterHandler = (allItem, items, filterIndex, index) => {
    allItem = allItem.slice();
    let item = allItem[filterIndex];
    let updateFilter = {
      ...item,
      id: items[index].id,
      filterName: items[index].name,
    };
    allItem[filterIndex] = updateFilter;
    return allItem;
  };

  const [filter, setFilter] = useState(filterDropDowns);
  const [selectedButton, setSelectButton] = useState("popular");

  if (nowPlayingloading) {
    return <p>loading</p>;
  }
  // if (newPageLoad) {
  //   return <p>loading</p>;
  // }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
  };

  const handleMovieDetails = (movieId) => {
    dispatch(getMoviesDetails(movieId));
    navigate(`/movies/${movieId}/details/movie`);
    scrollToTop();
  };

  return (
    <div className="tes">
      <Slider {...settings} className="overflow-x-hidden">
        {nowPlayingMovies?.movies?.map((movie) => (
          <HeroSection backgroundUrl={movie?.backgroundImg} key={movie.id}>
            <Container className="py-[200px]">
              <div className="z-[8] absolute top-0 w-[50%] bottom-0 pb-[230px] pt-[250px] hero">
                <h1 className="text-[60px] font-bold font-['poppins']">
                  <span className="text-[#e4d804] text-[32px] h-span">
                    Xtramovie
                  </span>{" "}
                  <br />
                  Unlimited <span className="text-[#e4d804]">Movie</span>, TVs
                  Shows, & More.
                </h1>
                <button
                  className="hover:text-[#e4d804] flex gap-x-2 items-center bg-[#0D1B2A] px-4 py-4 border-4 border-[#e4d804] rounded-xl "
                  onClick={() => handleMovieDetails(movie.id)}
                >
                  <span>watch trailer</span>
                  <span className="play-btn"></span>
                </button>
              </div>
            </Container>
          </HeroSection>
        ))}
      </Slider>
      <Container>
        <div className="flex justify-between bg-[#0D1B2A] py-5 px-6 rounded-l-2xl rounded-r-2xl">
          <div className="flex gap-x-5">
            {filter.map(({ id, filterName, items }, filterIndex) => (
              <Menu key={id} as="div" className="flex relative">
                <Menu.Button>{filterName}</Menu.Button>
                <Menu.Items className="flex flex-col w-[150px] z-10 absolute top-9">
                  {items.map(({ id, name }, index) => (
                    <Menu.Item key={id}>
                      {({ active }) => (
                        <button
                          className={`${active && "text-[#e4d804]"} text-left`}
                          onClick={() => {
                            setFilter(
                              filterHandler(filter, items, filterIndex, index)
                            );
                          }}
                        >
                          {name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                  {/* <Menu.Item disabled>
                <span className="opacity-75">Invite a friend (coming soon!)</span>
              </Menu.Item> */}
                </Menu.Items>
              </Menu>
            ))}
          </div>
          <div className="flex bg-black px-2 py-2 gap-x-3 rounded-3xl">
            {buttonFilter.map(({ id, name }) => (
              <button
                key={id}
                className={`${
                  name === selectedButton
                    ? "text-[#e4d804] bg-[#0D1B2A]"
                    : "text-white"
                } px-4 py-1 rounded-xl`}
                onClick={() => setSelectButton(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        <MovieGrid movies={movies} mediaType="tv" getMovies={getMovies} />
      </Container>
      <div className="flex flex-col">
        <h2 className="text-3xl px-8 mt-10 mb-5">Now Playing</h2>
        <MovieSlider movies={nowPlayingMovies} mediaType="movie" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl px-8 mt-5 mb-5">Popular TvShows</h2>
        <MovieSlider movies={tvshows} mediaType="tv" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl px-8 mt-5 mb-5">Other movie suggestions</h2>
        <MovieSlider movies={movies} mediaType="movie" />
      </div>
    </div>
  );
};

export default Home;
