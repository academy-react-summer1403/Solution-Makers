import { Button, Textarea } from "@nextui-org/react";
import CommentDetailsBox from "../CommentDetailsBox";
import { BeatLoader } from "react-spinners";
import { useState } from "react";

function CommentsBox({
  courseId,
  articleId,
  title,
  comments,
  isLoading,
  error,
}) {
  const [count, setCount] = useState(5);

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {title && <h4 className="text-center text-xl">{title}</h4>}
        <Textarea
          aria-label="comment"
          variant="bordered"
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
        >
          ارسال
        </Button>
      </div>
      <div className="mt-5 flex flex-col">
        {comments.slice(0, count).map((comment) => (
          <CommentDetailsBox
            {...comment}
            key={comment.id}
            courseId={courseId}
            articleId={articleId}
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