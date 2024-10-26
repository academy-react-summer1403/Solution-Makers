import { useQuery } from "@tanstack/react-query";
import { fetchUserArticleComments } from "../../../../core/api/userPanel/Comments";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import UserIndexCommentCard from "../UserIndexCommentCard";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "../../Error";

function UserIndexArticlesComments() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userIndexArticlesComments"],
    queryFn: () => fetchUserArticleComments(),
  });

  const navigate = useNavigate();

  if (error) {
    return <ErrorBox />;
  }

  if (isLoading) {
    return <Spinner size="lg" className="m-8" />;
  }

  if (data.data.myNewsCommetDtos.length == 0) {
    return (
      <div className="flex justify-center items-center min-h-[180px] text-xl rounded-2xl border-2 border-primary dark:bg-dark-200">
        هنوز برای مقاله ای کامنتی ثبت نکردید
      </div>
    );
  }

  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper shadow-xl dark:shadow-none rounded-2xl flex flex-col-reverse"
    >
      <div className="flex items-center justify-center text-lg lg:text-2xl p-4 cursor-pointer dark:bg-dark-100 bg-primary text-white">
        آخرین کامنت های من (مقاله)
      </div>
      {data.data.myNewsCommetDtos.slice(0, 5).map((comment) => (
        <SwiperSlide
          key={comment.commentId}
          className="flex cursor-pointer dark:bg-dark-200"
          onClick={() => navigate("/my-panel/comments")}
        >
          <UserIndexCommentCard
            title={comment.title}
            describe={comment.describe}
            replyCount={comment.replyCount}
            date={comment.insertDate.slice(0, 10)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UserIndexArticlesComments;
