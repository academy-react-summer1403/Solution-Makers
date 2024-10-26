import { useQuery } from "@tanstack/react-query";
import { fetchUserFavoriteCourses } from "../../../../core/api/userPanel/Courses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import UserIndexCard from "../UserIndexCard";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "../../Error";

function UserIndexFavCourses() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userIndexFavCourses"],
    queryFn: () => fetchUserFavoriteCourses(),
  });

  const navigate = useNavigate();

  if (error) {
    return <ErrorBox />;
  }

  if (isLoading) {
    return <Spinner size="lg" className="m-8" />;
  }

  if (data.data.favoriteCourseDto.length == 0) {
    return (
      <div className="flex justify-center items-center min-h-[180px] text-xl rounded-2xl border-2 border-primary dark:bg-dark-200">
        هنوز دوره ای به لیست علاقمندی ها اضافه نشد
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
      <span
        className="flex items-center justify-center text-lg lg:text-2xl p-4 cursor-pointer dark:bg-dark-100 bg-primary text-white"
        onClick={() => navigate("/my-panel/favorite-courses")}
      >
        دوره های مورد علاقه من
      </span>
      {data.data.favoriteCourseDto.map((course) => (
        <SwiperSlide
          key={course.courseId}
          className="flex cursor-pointer dark:bg-dark-200"
          onClick={() => navigate(`/courses/${course.courseId}`)}
        >
          <UserIndexCard {...course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UserIndexFavCourses;
