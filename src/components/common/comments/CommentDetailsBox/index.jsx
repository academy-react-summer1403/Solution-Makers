import { useContext, useEffect, useState } from "react";
import { BiMessageRounded } from "react-icons/bi";
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi";
import { Avatar, Button, Spinner } from "@nextui-org/react";
import { AppContext } from "../../../../context/Provider";
import {
  addLikeForCourseComment,
  dislikeCourseComment,
  getCourseCommentsReplies,
} from "../../../../core/api/app/CourseDetails";
import {
  deleteLikeArticleComment,
  getArticleCommentsReplies,
  likeArticleComment,
} from "../../../../core/api/app/ArticleDetails";
import toast from "react-hot-toast";

function CommentDetailsBox({
  id,
  courseId,
  newsId,
  pictureAddress,
  currentUserLikeId,
  currentUserEmotion,
  currentUserIsLike,
  currentUserIsDissLike,
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
  hasShowRepliesBtn,
  isShowReplies,
  setIsShowReplies,
}) {
  const [replies, setReplies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(undefined);
  const [isDisLiked, setIsDisLiked] = useState(undefined);
  const { setCommentId, setReFetch } = useContext(AppContext);

  useEffect(() => {
    if (courseId) {
      getCourseCommentsReplies(courseId, id)
        .then((res) => {
          setIsLoading(false);
          setReplies(res.data);
        })
        .catch(() => setError(true));
    } else if (newsId) {
      getArticleCommentsReplies(id)
        .then((res) => {
          setIsLoading(false);
          setReplies(res.data);
        })
        .catch(() => setError(true));
    }
  }, []);

  useEffect(() => {
    toast.remove();
  }, [replies]);

  useEffect(() => {
    setIsLiked(currentUserEmotion == "LIKED" || currentUserIsLike);
    setIsDisLiked(currentUserEmotion == "DISSLIKED");
  }, [currentUserEmotion, currentUserIsLike, currentUserIsDissLike]);

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
          {isLiked ? (
            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                if (courseId) {
                } else {
                  deleteLikeArticleComment(currentUserLikeId).then(() =>
                    setReFetch(true)
                  );
                }
              }}
            >
              <BiSolidLike size={22} />
            </span>
          ) : (
            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                if (courseId) {
                  addLikeForCourseComment(id).then(() => setReFetch(true));
                } else {
                  likeArticleComment(id).then(() => setReFetch(true));
                }
              }}
            >
              <BiLike size={22} />
            </span>
          )}
          {isDisLiked ? (
            <span className="flex items-center gap-1 cursor-pointer">
              <BiSolidDislike size={22} />
            </span>
          ) : (
            <span
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => {
                if (courseId) {
                  dislikeCourseComment(id).then(() => {
                    setReFetch(true);
                    // setIsDisLiked(true)
                  });
                }
              }}
            >
              <BiDislike size={22} />
            </span>
          )}
          <Button
            className="flex items-center gap-1 bg-transparent p-0"
            onPress={() => {
              setCommentId(id);
              onOpen();
            }}
          >
            <b>پاسخ</b>
            <BiMessageRounded />
          </Button>
          {hasShowRepliesBtn && replies.length > 0 && (
            <Button
              className="flex items-center bg-transparent px-1"
              onClick={() => {
                if (!isShowReplies) {
                  setIsShowReplies(true);
                } else {
                  setIsShowReplies(false);
                }
              }}
            >
              {isShowReplies ? (
                <b className="text-red-500">بستن پاسخ ها</b>
              ) : (
                <b>نمایش پاسخ ها ...</b>
              )}
            </Button>
          )}
        </div>
      </div>
      <div>
        {isShowReplies && (
          <>
            {error ? (
              <span className="text-red-500 inline-flex text-lg my-10">
                خطا در دریافت اطلاعات
              </span>
            ) : (
              <>
                {isLoading ? (
                  <div className="text-center my-4">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    {replies.map((reply) => (
                      <CommentDetailsBox
                        key={reply.id}
                        {...reply}
                        myClassName="mt-4 md:ms-12 ps-5 border-[#CFD8DC] border-r-2"
                        onOpen={onOpen}
                        hasLoading={true}
                        hasError={true}
                        isShowReplies={true}
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CommentDetailsBox;
