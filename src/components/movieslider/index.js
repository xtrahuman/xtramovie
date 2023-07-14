import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { PiPlayCircleThin } from "react-icons/pi";
import { getYear } from "../moviegrid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utility";
import { getMoviesDetails } from "../../redux/moviesonly/action";

function MovieSlider({ movies,mediaType }) {
  let moviesOutput = movies?.movies;
  const [selected, setSelected] = useState([]);
  // const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };


  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {moviesOutput?.map((movie) => (
        <Card
          itemId={movie.id} // NOTE: itemId is required for track items
          movie={movie}
          onClick={handleClick(movie.id)}
          selected={isItemSelected(movie.id)}
          key={movie.id}
          mediaType={mediaType}
        />
      ))}
    </ScrollMenu>
  );
}


function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <BsArrowLeftCircle
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className="self-center text-3xl cursor-pointer absolute z-10"
    />
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <BsArrowRightCircle
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className="self-center text-3xl cursor-pointer absolute z-10 right-0"
    />
  );
}

function Card({ onClick, movie,mediaType}) {
  const visibility = useContext(VisibilityContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMovieDetails = (mediaType, movieId) => {
    dispatch(getMoviesDetails(movieId));
    if (mediaType === "movie") {
      navigate(`/movies/${movieId}/details/${mediaType}`);
    } else if (mediaType === "tv") {
      navigate(`/tvshow/${movieId}/details/${mediaType}`);
    }
    scrollToTop();
  };

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="w-full relative rounded-3xl">
        <img
          className="w-full lg:h-[auto] md:h-[auto] rounded-3xl"
          src={movie.image}
          alt="logo"
        />
        <div className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-1 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-3xl">
          <div
            onClick={() =>
              handleMovieDetails(movie.media_type || mediaType, movie.id)
            }
            className="place-self-center text-8xl font-thin"
          >
            <PiPlayCircleThin />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 my-3">
        <h4 className="crop-text w-[120px] text-center">{movie.name}</h4>
        <span>{getYear(movie.release_date)}</span>
      </div>
    </div>
  );
}

export default MovieSlider;
