import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { Avatar } from "@nextui-org/react";
import axios from "axios";

function CommentDetailsBox({
  id,
  courseId,
  newsId,
  pictureAddress,
  currentUserLikeId,
  userId,
  parentId,
  author,
  autor,
  describe,
  likeCount,
  inserDate,
  insertDate,
  myClassName,
}) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if (courseId) {
      axios
        .get(`/Course/GetCourseReplyCommnets/${courseId}/${id}`)
        .then((res) => setReplies(res.data));
    }
    if (newsId) {
      axios
        .get(`/News/GetRepliesComments?Id=${id}`)
        .then((res) => setReplies(res.data));
    }
  }, []);

  return (
    <div className={`text-sm xs:text-medium flex flex-col gap-3 py-4`}>
      <div className={`py-2 ${myClassName}`}>
        <div className={`flex justify-between items-center`}>
          <div className="flex flex-col xs:flex-row items-center gap-3">
            <span>
              <Avatar
                radius="full"
                size="md"
                src={pictureAddress || "/src/assets/images/notFound/images.png"}
              />
            </span>
            <span>{autor ? autor : author}</span>
          </div>
          <p className="hidden text-sm xs:block text-[#607D8B] dark:text-white">
            {insertDate && insertDate.slice(0, 10)}
            {inserDate && inserDate.slice(0, 10)}
          </p>
        </div>
        <p
          className="text-ellipsis whitespace-nowrap overflow-hidden"
          onClick={() => console.log(id)}
        >
          {describe}
        </p>
        <div className="flex flex-col xs:flex-row gap-5">
          <span className="flex items-center gap-1 text-red-500">
            {likeCount} <FaRegHeart />
          </span>
          <span className="flex items-center gap-1">
            پاسخ
            <BiMessageRounded />
          </span>
        </div>
      </div>
      {replies.length > 0 &&
        replies.map((reply) => (
          <CommentDetailsBox
            key={reply.id}
            {...reply}
            myClassName="mt-4 md:ms-12 ps-5 border-[#CFD8DC] border-r-2"
          />
        ))}
    </div>
  );
}

export default CommentDetailsBox;
