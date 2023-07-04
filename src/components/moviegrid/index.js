import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { PiPlayCircleThin } from 'react-icons/pi';
import { AiOutlineStar } from 'react-icons/ai';
const MovieGrid = ({ movies }) => {
  return (
    <div className="w-full flex flex-wrap gap-x-3.5 gap-y-6 my-5">
      {movies.map((movie) => (
        <div className="card">
        <div key={movie.id} className="w-full relative rounded-3xl">
          <img
            className="w-full lg:h-[auto] md:h-[auto] rounded-3xl"
            src={movie.image}
            alt="logo"
          />
          <div className="movie-overlay cursor-pointer px-4 py-3 grid grid-cols-3 justify-between absolute top-0 bottom-0 left-0 right-0 rounded-3xl">
          <div className='h-4'>
          <BsFillBookmarkHeartFill className='text-[#e4d804] text-base'/>
          </div>
          <div className='place-self-center text-8xl font-thin'><PiPlayCircleThin/></div>
          <div className='flex gap-x-1 justify-self-end items-center h-4 text-base text-[#e4d804]'>
          <AiOutlineStar/>
          <span>7.0</span>
          </div>
          
          </div>
        </div>
        <div className='flex justify-between px-4 my-3'>
        <h4>{movie.name}</h4>
        <span>2021</span>
        </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
