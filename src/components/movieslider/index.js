import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import { getYear } from "../moviegrid";
// import { useSwipe } from "../swipe";


function MovieSlider({movies}) {
  let moviesOutput = movies?.movies
  const [items, setItems] = useState(moviesOutput);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
//   const { scrollPrev } = useContext(VisibilityContext);
//   const { scrollNext } = useContext(VisibilityContext);

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
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {items?.map(( movie ) => (
        <Card
          itemId={movie.id} // NOTE: itemId is required for track items
          movie = {movie}
          onClick={handleClick(movie.id)}
          selected={isItemSelected(movie.id)}
          key={movie.id}
        />
      ))}
    </ScrollMenu>
  );
}

// function onWheel(){
//     ev = React.WheelEvent
//     const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
//     if (isThouchpad) {
//       ev.stopPropagation();
//       return;
//     }
  
//     if (ev.deltaY < 0) {
//       scrollNext();
//     } else if (ev.deltaY > 0) {
//       scrollPrev();
//     }
//   }

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
       <div className="w-full relative rounded-3xl">
         <img
           className="w-full lg:h-[auto] md:h-[auto] rounded-3xl"
           src={movie.image}
           alt="logo"
         />
         <div className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-3 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-3xl"></div>
       </div>
       <div className="flex flex-col items-center px-4 my-3">
         <h4 className="crop-text w-[120px] text-center">{movie.name}</h4>
         <span>{getYear(movie.release_date)}</span>
       </div>
     </div>
  );
}

export default MovieSlider;
