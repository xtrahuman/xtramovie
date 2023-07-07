import Container from "./container";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const MoviesDetails = () => {
  const { id } = useParams();
  return (
    <div className="">
      <Container className="py-[200px]">
        <div className="z-[8] absolute top-0 w-[50%] bottom-0 pb-[230px] pt-[100px] hero">
          <h1 className="text-[60px] font-bold font-['poppins']">
            The Endless Summer
          </h1>
          <div className="mt-5 w-full">
            <iframe
              // className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]"
              width="100%"
              height="350px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"
            ></iframe>
          </div>
          <div className="flex justify-between mt-3 items-center">
          <div className="flex gap-x-4 text-base items-center">
            <div className="flex gap-x-1 items-center h-4 text-base text-[#e4d804]">
              <AiOutlineStar />
              <span className="text-white">7.0</span>
            </div>
            <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
            <div>action</div>
            <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
            <div>2021</div>
            <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
            <div>90 min</div>
            <div className="h-1 w-1 rounded-[50%] bg-[#e4d804]"></div>
            <div>16+</div>
          </div>
          <div className="h-4">
                <BsFillBookmarkHeartFill className="text-[#e4d804] text-base" />
          </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#e4d804] border-3 border-[#0D1B2A] text-[#0D1B2A] px-4 py-2 rounded-lg text-base">
              Rent
            </button>
          </div>
          <p className="mt-5 text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <span className="text-[#e4d804] text-[32px]">{id}</span>
        </div>
        <span></span>
      </Container>
      {/* <Container>movies</Container> */}
    </div>
  );
};

export default MoviesDetails;
