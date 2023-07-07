import Container from "./container";
const TvShowsDetails = () => {
  return (
    <div className="">
        <Container className="py-[200px]">
          <h1 className="text-[60px] w-[50%] font-bold font-['poppins'] pt-[250px] pb-[230px] z-[8] absolute top-0 bottom-0">
            <span className="text-[#e4d804] text-[32px]">Xtramovie</span> <br />
            Unlimited <span className="text-[#e4d804]">Movie</span>, TVs Shows,
            & More.
          </h1>
        </Container>
      <Container>movies</Container>
    </div>
  );
};

export default TvShowsDetails;