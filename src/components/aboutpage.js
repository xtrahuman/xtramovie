import Container from "./container";

const AboutPage = () => (
  <div className="w-full">
    <Container className="py-[150px] text-center">
      <div className="w-[60%] m-auto">
        <h1 className="text-3xl mb-4 md:text-[60px]">Xtra<span className="text-[#e4d804] ">movies</span></h1>
        
        <p className="border-2 p-3 border-[#0D1B2A] rounded-lg md:text-[16px]">
          This is a webapp built using react, Redux was used for state handling
          and styling was made easy with the use of tailwind css. The movie Api
          was consumed from themoviedb which was very useful in displaying all
          movies, this project is built mainly for learning purpose and serves
          as an integral part of project requirement in my web devlopment course
          .In this movie app the users can view latest movies and tvshows, buy
          and rate movies
        </p>
      </div>
    </Container>
  </div>
);

export default AboutPage;
