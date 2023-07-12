import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { PiPlayCircleThin } from "react-icons/pi";
import { AiOutlineStar } from "react-icons/ai";
import { nextPage, prevPage } from "../../utility";
import { useDispatch } from "react-redux";

export const getYear = (arr) => {
  let year = arr.split('-')
  return year[0]
}

const MovieGrid = ({ movies,getMovies }) => {
  const dispatch = useDispatch();

  const handleOtherPage = (pageFunc, page_no, total_pages) => {
    dispatch(getMovies(pageFunc(page_no, total_pages)))
  }
  return (
    <section>
      <div className="w-full flex flex-wrap gap-x-3.5 gap-y-8 my-5">
        {movies?.movies?.map((movie) => (
          <div key={movie.id} className="card">
            <div className="w-full relative rounded-2xl">
              <img
                className="w-full lg:h-[auto] md:h-[auto] rounded-2xl"
                src={movie.image}
                alt="logo"
              />
              <div className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-3 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-2xl">
                <div className="h-4 p-4 px-1 w-10 flex items-center justify-center rounded-lg bg-[#0D1B2A]">
                  <BsFillBookmarkHeartFill className="text-[#e4d804] text-base" />
                </div>
                <div className="place-self-center text-8xl font-thin">
                  <PiPlayCircleThin />
                </div>
                <div className="flex gap-x-1 p-4 rounded-lg bg-[#0D1B2A] justify-self-end items-center h-4 text-base text-[#e4d804]">
                  <AiOutlineStar />
                  <span className="text-[#fff]">{movie.rating > 0 ? movie.rating.toFixed(1) : ''}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between my-3">
              <h4 className="crop-text mr-4">{movie.name}</h4>
              <span>{getYear(movie.release_date)}</span>
            </div>
            <button className="bg-[#e4d804] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-1 rounded-md text-base">
              Buy
            </button>
          </div>
        ))}
      </div>
      <div className={`flex ${movies.page_no === 1 ? 'justify-end' : 'justify-between' }`}>
        <button className={`p-4 rounded-lg text-[#fff] hover:text-[#e4d804] bg-[#0D1B2A] ${movies.page_no === 1 ? 'hidden' : 'flex' }`} onClick={()=> handleOtherPage(prevPage,movies?.total_pages,movies?.page_no )}>Prev</button>
        <button className="p-4 rounded-lg text-[#fff] hover:text-[#e4d804] bg-[#0D1B2A]" onClick={()=> handleOtherPage(nextPage,movies?.total_pages,movies?.page_no)}>Next</button>
      </div>
    </section>
  );
};

export default MovieGrid;