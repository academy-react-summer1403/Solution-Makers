import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SectionsTitle from "./Objects/SectionsTitle";
import { useQuery } from "@tanstack/react-query";
import { getAllTeachers } from "../../core/api/app/landing";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { BeatLoader } from "react-spinners";
import "swiper/css/navigation";

const Slider = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allTeachers"],
    queryFn: getAllTeachers,
  });

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center my-[56px]" size={20} />
    );
  }

  if (error) {
    return <span>خطا در دریافت اطلاعات</span>;
  }

  return (
    <div className="flex flex-col justify-center gap-10 py-10 mt-24 items-center bg-[#E3F2FD] dark:bg-dark-100">
      <div className="w-full">
        <SectionsTitle name="اساتید برتر" />
      </div>

      <Swiper
        spaceBetween={20}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        breakpoints={{
          992: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="px-4 lg:px-12"
      >
        {data.data
          .filter(
            (teacher) =>
              teacher.courseCounts >= 4 &&
              teacher.pictureAddress &&
              teacher.pictureAddress != "Not-set"
          )
          .map((teacher, index) => (
            <SwiperSlide
              key={index}
              className="py-2 bg-transparent even:mt-[55px]"
            >
              <div className="w-[300px] flex flex-col justify-center items-center gap-3">
                <Link
                  className="w-full rounded-xl overflow-hidden"
                  to={teacher.linkdinProfileLink}
                  target="_blank"
                >
                  <img src={teacher.pictureAddress} className="w-full" />
                </Link>
                <h1 className="text-[24px]">{teacher.fullName}</h1>
                <div className="text-[16px] flex gap-4">
                  <span className="flex items-center gap-1 text-xl">
                    <MdMenuBook />
                    {teacher.courseCounts}
                  </span>
                  <span className="flex items-center gap-1 text-xl">
                    <GrArticle />
                    {teacher.newsCount}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default Slider;
