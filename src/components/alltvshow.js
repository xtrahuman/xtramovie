import HeroSection from "./hero";
import Container from "./container";
const AllTvshows = () => {
  
    return (
      <div className="">
      <HeroSection backgroundUrl="https://image.tmdb.org/t/p/original/cXQH2u7wUIX1eoIdEj51kHXoWhX.jpg">
        <Container className="py-[200px]">
        <div className="z-[8] absolute top-0 w-[50%] bottom-0 pb-[230px] pt-[250px] hero">
          <h1 className="text-[60px] font-bold font-['poppins']">
            <span className="text-[#e4d804] text-[32px]">Xtramovie</span> <br />
            Unlimited <span className="text-[#e4d804]">Movie</span>, TVs Shows,
            & More.
          </h1>
        </div>
        </Container>
      </HeroSection>
        <Container>
            
           AllTvshows
        </Container>
      </div>
    );
  };
  
  export default AllTvshows;
  