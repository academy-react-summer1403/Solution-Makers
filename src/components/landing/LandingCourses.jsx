import SectionsTitle from "./Objects/SectionsTitle";
import ColumnCourseCard from "../common/courseCard/ColumnCourseCard";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { getCourseTop } from "../../core/api/app/landing";
import { BeatLoader } from "react-spinners";

const LandingCourses = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["topCourses"],
    queryFn: getCourseTop,
  });

  if (error) {
    return (
      <p className="text-lg mt-8 ps-4">دریافت اطلاعات با خطا مواجه گردید !</p>
    );
  }

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center my-[56px]" size={20} />
    );
  }

  return (
    <div className="w-full mt-[70px] flex flex-col justify-between items-center px-8 lg:px-0">
      <SectionsTitle name="برترین دوره های ما" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-4 mt-[45px]">
        {data.data.map((course) => (
          <ColumnCourseCard {...course} key={course.courseId} />
        ))}
      </div>
      <Button
        onPress={() => {
          navigate("/courses");
        }}
        radius="full"
        size="lg"
        color="primary"
        className="inline-block mt-[40px]"
      >
        مشاهده همه
      </Button>
    </div>
  );
};

export default LandingCourses;
