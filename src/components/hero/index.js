import Container from "../container";
const HeroSection = () => {
  const mystyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg")`,
    backgroundColor: "DodgerBlue",
    width: "100%",
    height: "700px",
    padding: "40px 0",
    backgroundPosition: "right center",
    fontFamily: "Arial",
    position: "relative",
  };
  return (
    <div className="">
      <header style={mystyle}>
        <Container className='py-[200px]'>
        <h1 className="text-[42px] w-[30%] font-bold font-['poppins'] py-[300px] z-[9] absolute top-0 bottom-0">
          <span className="text-[#e4d804] text-[24px]">Xtramovies</span> <br />
          Unlimited <span className="text-[#e4d804]">Movie</span>, TVs Shows, &
          More.
        </h1>
        </Container>
        <div className="w-full absolute top-0 bottom-0 bg-[#2E2E38] opacity-70"></div>
      </header>
      movies
    </div>
  );
};

export default HeroSection;
