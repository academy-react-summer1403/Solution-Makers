import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../../../core/api/app/Courses";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ColumnCourseCard from "../../common/courseCard/ColumnCourseCard";
import { BeatLoader } from "react-spinners";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../../context/Provider";
import "swiper/css/navigation";

function RelatedCourses({ id, courseLevelName, techs }) {
  const { reFetch, setReFetch } = useContext(AppContext);
  const location = useLocation();
  const [courseLevelId, setCourseLevelId] = useState(undefined);
  const [listTech, setListTech] = useState([]);

  useEffect(() => {
    switch (courseLevelName) {
      case "مبتدی": {
        setCourseLevelId(1);
        break;
      }
      case "متوسط": {
        setCourseLevelId(2);
        break;
      }
      case "پیشرفته": {
        setCourseLevelId(3);
      }
      default:
        break;
    }
  }, []);

  useEffect(() => {
    techs.forEach((item) => {
      if (item.includes("فرانت")) {
        setListTech((prev) => [...prev, 2]);
      }
      if (item.includes("بک اند")) {
        setListTech((prev) => [...prev, 3]);
      }
      if (item.includes("ّReact")) {
        setListTech((prev) => [...prev, 4]);
      }
      if (item.includes("ّNextJs")) {
        setListTech((prev) => [...prev, 5]);
      }
    });
  }, []);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["relatedCourses"],
    queryFn: () =>
      fetchCourses(
        1,
        10,
        courseLevelId,
        undefined,
        undefined,
        listTech,
        listTech.length
      ),
  });

  useEffect(() => {
    refetch();
  }, [courseLevelId, listTech]);

  useEffect(() => {
    reFetch && refetch();
    setReFetch(false);
  }, [reFetch]);

  useEffect(() => {
    scrollTo({ top: "0", behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="hidden xs:flex flex-col items-center gap-12 mt-28">
      {data?.data.courseFilterDtos.filter((item) => item.courseId != id)
        .length > 0 && <h3 className="text-3xl text-center">دوره های مشابه</h3>}
      {error ? (
        <span className="text-xl">خطا در دریافت اطلاعات</span>
      ) : (
        <>
          {isLoading ? (
            <BeatLoader
              color="#2196F3"
              className="text-center mt-10"
              size={20}
            />
          ) : (
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
              {data.data.courseFilterDtos.filter((item) => item.courseId != id)
                .length > 0 &&
                data.data.courseFilterDtos
                  .filter((item) => item.courseId != id)
                  .slice(0, 5)
                  .map((item, index) => (
                    <SwiperSlide key={index} className="py-2 bg-transparent">
                      <ColumnCourseCard {...item} />
                    </SwiperSlide>
                  ))}
            </Swiper>
          )}
        </>
      )}
    </div>
  );
}

export default RelatedCourses;
