import { Button, Textarea } from "@nextui-org/react";
import { baseApi } from "../../../../config";
import CommentDetailsBox from "../CommentDetailsBox";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { useState } from "react";

function CommentsBox({ id, title }) {
  const [count, setCount] = useState(10);

  const fetchArticleComments = () =>
    axios.get(`${baseApi}/News/GetNewsComments?NewsId=${id}`);

  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: () => fetchArticleComments(),
  });

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        <h4 className="text-center text-xl">{title}</h4>
        <Textarea
          aria-label="comment"
          variant="bordered"
          placeholder="نظر خودتو بنویس"
          classNames={{
            inputWrapper: "bg-white text-2xl",
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
        {data.data.slice(0, count).map((comment) => (
          <CommentDetailsBox key={comment.id} {...comment} />
        ))}
      </div>
      <div className="flex justify-center">
        {data.data.length < 5 ? null : (
          <>
            {data.data.length < count ? (
              <span
                className="text-primary p-1 cursor-pointer"
                onClick={() => setCount(10)}
              >
                مشاهده کمتر
              </span>
            ) : (
              <span
                className="text-primary p-1 cursor-pointer"
                onClick={() => setCount((prev) => prev + 10)}
              >
                مشاهده {data.data.length - count} نظر دیگر
              </span>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CommentsBox;
