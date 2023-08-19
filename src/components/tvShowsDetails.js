import Container from "./container";
import Navbar from "./navbar";
import FooterSection from "./footer";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideoKey } from "../redux/moviesonly/action";
import { getTvshowDetails } from "../redux/tvShowsOnly/action";
import Comment from "./comments/comment";

const TvShowsDetails = () => {
  const dispatch = useDispatch();
  const { key } = useSelector((state) => state.tvshows);

  const { tvshows } = useSelector((state) => state.tvshows);

  const { mediaType, id } = useParams();

  useEffect(() => {
    dispatch(getTvshowDetails(id));
    dispatch(getVideoKey(mediaType, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const comments = [
    {
      userName: "xtrahuman",
      id: "xtrahuman",
      comment:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      date_comment: "30.8.2023",
      time_comment: "18:35",
    },
    {
      userName: "bosco",
      id: "bosco1",
      comment: "testing comment",
      date_comment: "18.7.2021",
      time_comment: "15:35",
    },
    {
      userName: "abel",
      id: "abel",
      comment:
        "new section of the comment that is different again, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      date_comment: "30.8.2023",
      time_comment: "18:35",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="">
        <Container className="py-[80px]">
          <h1 className="text-[60px] md:w-full font-bold font-['poppins'] mobile-details-h1">
            {tvshows.name}
          </h1>
          <div
            className="
        w-[60%] pb-[30px] pt-[0px] mobile-details-width"
          >
            <div className="mt-5 w-full">
              <iframe
                // className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]"
                title="endless summer"
                width="100%"
                height="350px"
                src={`https://www.youtube.com/embed/${key}`}
              ></iframe>
            </div>
            <div className="flex justify-between mt-3 items-center">
              <div className="flex gap-x-4 text-base items-center mobile-flex-moviedetail">
                <div className="flex gap-x-1 items-center h-4 text-base text-[#e4d804]">
                  <AiOutlineStar />
                  <span className="text-white">
                    {tvshows.rating > 0 ? tvshows.rating.toFixed(1) : ""}
                  </span>
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
                Buy
              </button>
            </div>
            <p className="mt-6 text-base">{tvshows.summary}</p>
            <div className="mt-6">
              <h2 className="mb-3 text-xl">Genres</h2>
              <div className="flex gap-x-4">
                {["action", "thriller", "comedy"].map((item) => (
                  <p key={item} className="px-3 py-2 rounded-xl bg-[#0D1B2A]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Comment comments={comments} />
        </Container>
      </div>
      <hr className="border-1 border-[#0D1B2A] mt-10" />
      <FooterSection />
    </>
  );
};

export default TvShowsDetails;
