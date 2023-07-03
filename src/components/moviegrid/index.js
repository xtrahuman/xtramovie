import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
const MovieGrid = ({ movies }) => {
  return (
    <div className="w-full flex flex-wrap gap-x-3.5 my-5">
      {movies.map((movie) => (
        <div className="card">
        <div key={movie.id} className=" w-full  relative rounded-3xl">
          <img
            className="w-full lg:h-[auto] md:h-[auto] rounded-3xl"
            src={movie.image}
            alt="logo"
          />
          <div className="bg-[#0F3795] hover:visible invisible flex justify-between opacity-40 absolute top-0 bottom-0 left-0 right-0 rounded-3xl">
          <div>
          <BsFillBookmarkHeartFill/>
          </div>
          <div>
          <AiOutlineStar/>
          <span>7.0</span>
          </div>
          
          </div>
        </div>
        <h4>{movie.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
