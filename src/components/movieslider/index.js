import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";


function MovieSlider({movies}) {
  const [items, setItems] = useState(movies);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

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
      {items.map(( movie ) => (
        <Card
          itemId={movie.id} // NOTE: itemId is required for track items
          movie = {movie}
          onClick={handleClick(movie.id)}
          selected={isItemSelected(movie.id)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <BsArrowLeftCircle disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="self-center text-3xl absolute z-10"/>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <BsArrowRightCircle disabled={isLastItemVisible} onClick={() => scrollNext()} className="self-center text-3xl absolute z-10 right-0"/>
  );
}

function Card({ onClick, movie}) {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
       <div key={movie.id} className="w-full relative rounded-3xl">
         <img
           className="w-full lg:h-[auto] md:h-[auto] rounded-3xl"
           src={movie.image}
           alt="logo"
         />
         <div className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-3 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-3xl"></div>
       </div>
       <div className="flex justify-between px-4 my-3">
         <h4>{movie.name}</h4>
         <span>2021</span>
       </div>
     </div>
  );
}

export default MovieSlider;