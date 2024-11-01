import React from "react";
import CompCard from "../../common/Comparison/CompCard";
import CompDetail from "../../common/Comparison/CompDetail";
import Loading from "../../common/Loading";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseById } from "../../../core/api/app/CourseDetails";
import { AppContext } from "../../../context/Provider";



const CompBody = () => {

  const { comparisonIds } = useContext(AppContext);

  const {
    data: courseDataOne,
    isLoading: CDOneLoading,
    error: CDOneError,
  } = useQuery({
    queryKey: ["courseDataOne", comparisonIds[0]],
    queryFn: () => fetchCourseById(comparisonIds[0]),
    enabled: !!comparisonIds[0],
  });

  const {
    data: courseDataTwo,
    isLoading: CDTwoLoading,
    error: CDTwoError,
  } = useQuery({
    queryKey: ["courseDataTwo", comparisonIds[1]],
    queryFn: () => fetchCourseById(comparisonIds[1]),
    enabled: !!comparisonIds[1],
  });

  if (CDOneLoading || CDTwoLoading) return <Loading />;

  if (CDOneError) return console.log("Error Loading 1");
  if (CDTwoError) return console.log("Error Loading 2");

  return (
    <>
      <div className="flex flex-row-reverse gap-6">
        <div>
          <CompCard title="عنوان دوره" />
          <CompCard title="استاد" />
          <CompCard title="قیمت دوره" />
          <CompCard title="سطح دوره" />
          <CompCard title="تاریخ شروع" />
          <CompCard title=" تاریخ پایان" />
          <CompCard title="ظرفیت " />
          <CompCard title="تعداد دانشجو" />
        </div>
        <div>
          <CompDetail title={courseDataOne.data.title} />
          <CompDetail title={courseDataOne.data.teacherName} />
          <CompDetail title={courseDataOne.data.cost} />
          <CompDetail title={courseDataOne.data.courseLevelName} />
          <CompDetail title={courseDataOne.data.startTime.slice(0,10)} />
          <CompDetail title={courseDataOne.data.endTime.slice(0,10)} />
          <CompDetail title={courseDataOne.data.capacity} />
          <CompDetail title={courseDataOne.data.currentRegistrants} />
        </div>
        <div>
          <CompDetail title={courseDataTwo.data.title} />
          <CompDetail title={courseDataTwo.data.teacherName} />
          <CompDetail title={courseDataTwo.data.cost} />
          <CompDetail title={courseDataTwo.data.courseLevelName} />
          <CompDetail title={courseDataTwo.data.startTime.slice(0,10)} />
          <CompDetail title={courseDataTwo.data.endTime.slice(0,10)} />
          <CompDetail title={courseDataTwo.data.capacity} />
          <CompDetail title={courseDataTwo.data.currentRegistrants} />
        </div>
      </div>
    </>
  );
};

export default CompBody;
