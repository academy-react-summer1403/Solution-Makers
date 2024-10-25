import toast from "react-hot-toast";
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaReply } from "react-icons/fa";
import instance from "../../../../core/services/middleware";
import { getItem } from "../../../../core/services/common/storage";
import { useState } from "react";

function CommentBox({
  setIsReplyModalOpen,
  replyOfComment,
  setReplyOfComment,
  author,
  autor,
  courseTitle,
  id,
  courseId,
  newsId,
  commentId,
  parentId,
  title,
  describe,
  insertDate,
  inserDate,
  currentUserEmotion,
  currentUserIsLike,
  currentUserLikeId,
}) {
  const [isCourseReplyCommentLiked, setIsCourseReplyCommentLiked] = useState(
    currentUserEmotion == "LIKED" ? true : false
  );

  const [isCourseReplyCommentDisliked, setIsCourseReplyCommentDisliked] = useState(
    currentUserEmotion == "DISSLIKED" ? true : false
  );


  const [isArticleReplyCommentLiked, setIsArticleReplyCommentLiked] = useState(
    currentUserIsLike ? true : false
  );

  const [isArticleReplyCommentDisliked, setIsArticleReplyCommentDisliked] = useState(
    currentUserIsLike ? true : false
  );

  const likeCourseCommentReply = () => {
    return toast.promise(
      instance.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}`),
      {
        loading: "در حال پردازش",
        success: "لایک شد",
        error: "خطایی رخ داد",
      }
    );
  };

  const dislikeCourseCommentReply = () => {
    return toast.promise(instance.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`) , {
      loading: "در حال پردازش",
        success: "دیسلایک شد",
        error: "خطایی رخ داد",
    })
  }




  const likeArticleCommentReply = () => {
    return toast.promise(instance.post(`/News/CommentLike/${id}?LikeType=true`), {
      loading: "در حال پردازش",
      success: "لایک شد",
      error: "خطایی رخ داد",
    });
  };

  // const deleteCourseReplyCommentLike = () => {
  //   toast.promise(instance.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=${id}`) , {
  //     loading : "در حال پردازش",
  //     success : "لایک برداشته شد",
  //     error : "خطایی رخ داد"
  //   })
  //   setIsCourseReplyCommentLiked(false);
  // }

  return (
    <div className="flex flex-col gap-5 p-5 shadow-xl rounded-xl dark:border dark:shadow-none">
      <div className="flex justify-between">
        {courseTitle && <span className="text-lg">عنوان : {courseTitle}</span>}
        {author ? author : autor}
      </div>

      <div className="flex flex-col gap-3 text-lg">
        <span>عنوان کامنت : {title}</span>
        <span>متن کامنت : {describe}</span>
      </div>

      <div className="flex justify-between">
        {insertDate ? (
          <span className="text-medium">
            تاریخ ثبت : {insertDate.slice(0, 10)}
          </span>
        ) : (
          <span className="text-medium">
            تاریخ ثبت : {inserDate.slice(0, 10)}
          </span>
        )}
        {(author || autor) && (
          <div className="flex items-center gap-2">

            {courseId && (
              <>
              <span className="cursor-pointer"
                onClick={() => {
                  if (!isCourseReplyCommentLiked) {
                    likeCourseCommentReply().then(() => {
                      setIsCourseReplyCommentLiked(true)})
                      setIsCourseReplyCommentDisliked(false)
                  }
                }}
              >
                {isCourseReplyCommentLiked ? <BiSolidLike size={22}/> : <BiLike size={22}/>}
              </span>


              <span className="cursor-pointer" onClick={() => {
                if (!isCourseReplyCommentDisliked) {
                  dislikeCourseCommentReply().then(() => {
                    setIsCourseReplyCommentDisliked(true)
                    setIsCourseReplyCommentLiked(false)
                  })
                  
                }
              }}>{isCourseReplyCommentDisliked ? <BiSolidDislike size={22}/> : <BiDislike size={22}/>}</span>
              </>
            )}


            

            {newsId && (
              <>
                <span className="cursor-pointer" onClick={() => {
                if (!isArticleReplyCommentLiked) {
                  likeArticleCommentReply().then(() => {
                    setIsArticleReplyCommentLiked(true);
                    setIsArticleReplyCommentDisliked(false)
                  })
                }
              }}>
                {isArticleReplyCommentLiked ? <BiSolidLike /> : <BiLike />}
              </span>
              </>
            )}


            

            {/* <span className="cursor-pointer">
              <BiLike
                size={24}
                onClick={() => {
                  if (courseId) {
                    likeCourseCommentReply();
                  } else {
                    likeArticleCommentReply();
                  }
                }}
              />
            </span>
            <span className="cursor-pointer">
              <BiDislike size={24} />
            </span> */}










            <span
              className="cursor-pointer"
              onClick={() => {
                if (courseId) {
                  setReplyOfComment({ id, courseId });
                } else {
                  setReplyOfComment({
                    newsId,
                    id,
                    userId: getItem("userId"),
                  });
                }
                setIsReplyModalOpen(true);
              }}
            >
              <FaReply size={24} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentBox;
