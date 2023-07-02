const MovieGrid = ({movies}) => {

    return (
      <div className="w-full flex flex-wrap gap-x-4 my-5">
        {movies.map((movie) => (
            <div key={movie.id} className="basis-[23%] rounded-3xl">
            <img className='w-full h-[auto] rounded-3xl' src={movie.image} alt="logo" />
            {movie.name}
            </div>
        ))}

      </div>
    );
  };
  
  export default MovieGrid;