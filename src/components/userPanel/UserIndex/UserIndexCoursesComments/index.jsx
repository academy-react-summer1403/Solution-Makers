import { useQuery } from "@tanstack/react-query";
import instance from "../../../../core/services/middleware";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import UserIndexCommentCard from "../UserIndexCommentCard";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function UserIndexCoursesComments() {
  const fetchMyCoursesComments = () =>
    instance.get("/SharePanel/GetMyCoursesComments");

  const { data, isLoading, error } = useQuery({
    queryKey: ["userIndexCoursesComments"],
    queryFn: () => fetchMyCoursesComments(),
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner size="lg" className="m-8" />;
  }

  if (data.data.myCommentsDtos.length == 0) {
    return (
      <div className="flex justify-center items-center min-h-[180px] text-xl rounded-2xl border-2 border-primary dark:bg-dark-200">
        هنوز برای دوره ای کامنتی ثبت نکردید
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
        آخرین کامنت های من (دوره)
      </div>
      {data.data.myCommentsDtos.slice(0, 5).map((comment) => (
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

export default UserIndexCoursesComments;
