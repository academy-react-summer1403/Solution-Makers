import React from "react";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import CompHeader from "./CompHeader";
import CompBody from "./CompBody";
import Loading from "./../common/Loading/index";
import { fetchCourseById } from "../../core/api/app/CourseDetails";
import { AppContext } from "../../context/Provider";

const CourseCompSec = ({ }) => {
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
      <div className="container mt-20 px-0 sm:px-[2rem] md:px-[3rem] lg:px-[3rem] flex flex-col items-center">
        <div className="rounded-lg flex flex-col items-center">
          <CompHeader title1={courseDataOne.data.title} title2={courseDataTwo.data.title} />
          <CompBody />
        </div>
      </div>
    </>
  );
};

export default CourseCompSec;
