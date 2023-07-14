
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Comment = ({comments}) => {
const [userComment, setUserComment] = useState("add comment");
return (
    <section className="w-[60%] mobile-details-width">
    <div className="flex items-center gap-x-2">
      <h4 className="text-3xl">comments</h4>
      <span className="py-1 px-2 text-xs rounded-md bg-[#0D1B2A] mb-2">
        {comments.length}
      </span>
    </div>
    <div className="flex-col flex mt-6 gap-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-[#0D1B2A] p-4 rounded-lg">
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
          <hr className="my-5 w-full border-[#000]" />
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
    <form className="w-full p-4 mt-6 border-2 border-[#0D1B2A] rounded-lg">
      <textarea
        className="bg-[#0D1B2A] w-full rounded-lg text-top h-[200px] p-3 custom-textarea"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
        height="200px"
      />
      <button className="bg-[#e4d804] border-3 border-[#0D1B2A] text-[#0D1B2A] px-6 py-3 rounded-lg text-base mt-4">
        comment
      </button>
    </form>
  </section>
)
      }

export default Comment;