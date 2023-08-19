import Container from "./container";
import Navbar from "./navbar";
import FooterSection from "./footer";
const AboutPage = () => (
  <>
    <Navbar />
    <div className="w-full">
      <Container className="py-[150px] text-center">
        <div className="lg:w-[60%] md:w-[100%] m-auto">
          <h1 className="text-3xl pb-8 md:text-[60px]">
            Xtra<span className="text-[#e4d804] ">movies</span>
          </h1>

          <p className="border-2 p-3 border-[#0D1B2A] rounded-lg md:text-[16px]">
            This is a robust web application developed using React, leveraging
            Redux for efficient state management. The user interface was
            enhanced with the implementation of Tailwind CSS, providing
            convenient styling capabilities. To populate the movie data, the
            application seamlessly integrates with the themoviedb API, enabling
            the display of a vast collection of movies. This project serves as a
            fundamental component of my web development course, designed
            primarily for educational purposes. The movie app allows users to
            explore the latest movies and TV shows, as well as purchase and rate
            their favorite films.
          </p>
        </div>
      </Container>
    </div>
    <hr className="border-1 border-[#0D1B2A] mt-10" />
    <FooterSection />
  </>
);

export default AboutPage;
