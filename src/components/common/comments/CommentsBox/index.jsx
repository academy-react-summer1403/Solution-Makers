import { Button, Input, Textarea } from "@nextui-org/react";
import CommentDetailsBox from "../CommentDetailsBox";
import { BeatLoader } from "react-spinners";
import { useContext, useState } from "react";
import { AppContext } from "../../../../context/Provider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import instance from "../../../../core/services/middleware";
import toast from "react-hot-toast";
import { getItem } from "../../../../core/services/common/storage";

function CommentsBox({
  courseId,
  newsId,
  title,
  comments,
  isLoading,
  error,
  commentBody,
  setCommentBody,
  commentTitle,
  setCommentTitle,
  addComment,
}) {
  const { commentId } = useContext(AppContext);
  const [count, setCount] = useState(5);
  const [replyBody, setReplyBody] = useState("");
  const [replyTitle, setReplyTitle] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const addReplyCourseComment = () => {
    const formData = new FormData();
    formData.append("CommentId", commentId);
    formData.append("CourseId", courseId);
    formData.append("Title", replyTitle);
    formData.append("Describe", replyBody);
    instance.post("/Course/AddReplyCourseComment", formData).then(() => {
      toast.success("عملیات با موفقیت انجام شد");
      setReplyBody("");
      setReplyTitle("");
    });
  };

  const addReplyArticleComment = () => {
    instance
      .post("/News/CreateNewsReplyComment", {
        newsId,
        userIpAddress: "tesssst",
        title: replyTitle,
        describe: replyBody,
        userId: String(getItem("userId")),
        parentId: commentId,
      })
      .then(() => {
        toast.success("عملیات با موفقیت انجام شد");
        setReplyBody("");
        setReplyTitle("");
      });
  };

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {title && <h4 className="text-center text-xl">{title}</h4>}
        <div className="max-w-[300px]">
          <Input
            placeholder="عنوان"
            classNames={{
              inputWrapper:
                "dark:bg-dark-100 dark:focus-within:border dark:focus-within:bg-dark-100",
            }}
            value={commentTitle}
            onValueChange={(e) => setCommentTitle(e)}
          />
        </div>
        <Textarea
          aria-label="comment"
          variant="bordered"
          value={commentBody}
          onValueChange={(e) => setCommentBody(e)}
          placeholder="نظر خودتو بنویس"
          classNames={{
            inputWrapper: "bg-white text-2xl dark:bg-dark-100",
            input: "text-[18px]",
          }}
        />
        <Button
          color="primary"
          className="block mx-auto rounded-full text-lg"
          size="md"
          onClick={() => addComment()}
        >
          ارسال
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  ثبت پاسخ
                </ModalHeader>
                <ModalBody>
                  <div className="max-w-[300px]">
                    <Input
                      placeholder="عنوان"
                      classNames={{
                        inputWrapper:
                          "dark:bg-dark-100 dark:focus-within:border dark:focus-within:bg-dark-100",
                      }}
                      value={replyTitle}
                      onValueChange={(e) => setReplyTitle(e)}
                    />
                  </div>
                  <Textarea
                    aria-label="comment"
                    variant="bordered"
                    value={replyBody}
                    onValueChange={(e) => setReplyBody(e)}
                    placeholder="پاسخ خودتو بنویس"
                    classNames={{
                      inputWrapper: "bg-white text-2xl dark:bg-dark-100",
                      input: "text-[18px]",
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => {
                      setReplyBody("");
                      setReplyTitle("");
                      onClose();
                    }}
                  >
                    بستن
                  </Button>
                  <Button
                    color="primary"
                    onPress={() => {
                      if (courseId) {
                        addReplyCourseComment();
                      } else {
                        addReplyArticleComment();
                      }
                      onClose();
                    }}
                  >
                    ارسال
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="mt-5 flex flex-col">
        {comments.slice(0, count).map((comment) => (
          <CommentDetailsBox
            {...comment}
            key={comment.id}
            onOpen={onOpen}
            courseId={courseId}
            newsId={newsId}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {comments.length < 5 ? null : (
          <>
            {comments.length <= count ? (
              <span
                className="text-primary p-1 cursor-pointer"
                onClick={() => setCount(5)}
              >
                مشاهده کمتر
              </span>
            ) : (
              <span
                className="text-primary p-1 cursor-pointer"
                onClick={() => setCount((prev) => prev + 5)}
              >
                مشاهده {comments.length - count} نظر دیگر
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CommentsBox;
