import Container from "./container";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const MoviesDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [userComment, setUserComment] = useState('add comment') 
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
    <div className="">
      <Container className="py-[80px]">
        <div
          // className="
          // z-[8] absolute
          // top-0 w-[60%] bottom-0 pb-[230px] pt-[80px] hero"
          className="
        w-[60%] pb-[30px] pt-[0px] mobile-details-width"
        >
          <h1 className="text-[60px] font-bold font-['poppins'] mobile-details-h1">
            The Endless Summer
          </h1>
          <div className="mt-5 w-full">
            <iframe
              // className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]"
              title='endless summer'
              width="100%"
              height="350px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"
            ></iframe>
          </div>
          <div className="flex justify-between mt-3 items-center">
            <div className="flex gap-x-4 text-base items-center mobile-flex-moviedetail">
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
              Buy
            </button>
          </div>
          <p className="mt-6 text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
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
        <section className="w-[60%] mobile-details-width">
            <div className="flex items-center gap-x-2">
              <h4 className="text-3xl">comments</h4>
              <span className="py-1 px-2 text-xs rounded-md bg-[#0D1B2A] mb-2">
                {comments.length}
              </span>
            </div>
            <div className="flex-col flex mt-6 gap-y-3">
              {comments.map((comment) => (
                <div className="bg-[#0D1B2A] p-4 rounded-lg">
                  <div className="flex gap-x-4">
                    <CgProfile className="text-[40px]" />
                    <div>
                      <h5 className="text-base">{comment.userName}</h5>
                      <div className="text-[#E0E0E0]">
                        <span>{comment.date_comment},</span>
                        <span>{comment.time_comment}</span>
                      </div>
                    </div>
                  </div>
                  <hr className="my-5 w-full border-[#000]"/>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
            <form className="w-full p-4 mt-6 border-2 border-[#0D1B2A] rounded-lg">
              <textarea className="bg-[#0D1B2A] w-full rounded-lg text-top h-[200px] p-3 custom-textarea" value={userComment} onChange={e => setUserComment(e.target.value)} height='200px' />
              <button className="bg-[#e4d804] border-3 border-[#0D1B2A] text-[#0D1B2A] px-6 py-3 rounded-lg text-base mt-4">
              comment
            </button>
            </form>
        </section>
      </Container>
    </div>
  );
};

export default MoviesDetails;
