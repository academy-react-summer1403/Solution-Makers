import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { Avatar } from "@nextui-org/react";
import axios from "axios";
import { baseApi } from "../../../../config";
import { useEffect, useState } from "react";
import ReplyDetailsBox from "../ReplyDetailsBox";

function CommentDetailsBox({
  id,
  courseId,
  articleId,
  pictureAddress,
  author,
  autor,
  describe,
  likeCount,
  inserDate,
  insertDate,
}) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    if (courseId) {
      axios
        .get(`${baseApi}/Course/GetCourseReplyCommnets/${courseId}/${id}`)
        .then((res) => setReplies(res.data));
    }
    if (articleId) {
      axios
        .get(`${baseApi}/News/GetRepliesComments?Id=${id}`)
        .then((res) => setReplies(res.data));
    }
  }, []);

  return (
    <div className="text-sm xs:text-medium flex flex-col gap-3 py-4">
      <div className="flex justify-between items-center">
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
      <p className="text-ellipsis whitespace-nowrap overflow-hidden">
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
      {replies.length > 0 &&
        replies.map((reply) => <ReplyDetailsBox key={reply.id} {...reply} />)}
    </div>
  );
}

export default CommentDetailsBox;
