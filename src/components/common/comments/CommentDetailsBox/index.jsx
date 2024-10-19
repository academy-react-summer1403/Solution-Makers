import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { Avatar, Button } from "@nextui-org/react";
import { AppContext } from "../../../../context/Provider";
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
  title,
  describe,
  likeCount,
  inserDate,
  insertDate,
  onOpen,
  myClassName,
}) {
  const [replies, setReplies] = useState([]);
  const { setCommentId } = useContext(AppContext);

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
    <div className={`text-sm xs:text-medium flex flex-col gap-2 py-4`}>
      <div className={`flex flex-col gap-5 ${myClassName}`}>
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
        <h5 className="text-lg font-bold">{title}</h5>
        <p
          className="text-ellipsis whitespace-nowrap overflow-hidden"
          onClick={() => console.log(id)}
        >
          {describe}
        </p>
        <div className="flex flex-col xs:flex-row gap-1">
          <span className="flex items-center gap-1 text-red-500">
            {likeCount} <FaRegHeart />
          </span>
          <Button
            className="flex items-center gap-1 bg-transparent p-0"
            onPress={() => {
              setCommentId(id);
              onOpen();
            }}
          >
            پاسخ
            <BiMessageRounded />
          </Button>
        </div>
      </div>
      {replies.length > 0 &&
        replies.map((reply) => (
          <CommentDetailsBox
            key={reply.id}
            {...reply}
            myClassName="mt-4 md:ms-12 ps-5 border-[#CFD8DC] border-r-2"
            onOpen={onOpen}
          />
        ))}
    </div>
  );
}

export default CommentDetailsBox;
