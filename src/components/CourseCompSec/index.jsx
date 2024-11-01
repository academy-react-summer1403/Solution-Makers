import React from "react";
import { useState, useEffect } from "react";
import CompHeader from "./CompHeader";
import CompBody from "./CompBody";
import { fetchCourseById } from "../../core/api/app/CourseDetails";

const CourseCompSec = ({}) => {
  return (
    <>
      <div className="container mt-20 px-0 sm:px-[2rem] md:px-[3rem] lg:px-[3rem] flex flex-col items-center">
        <div className="rounded-lg flex flex-col items-center">
          <CompHeader />
          <CompBody />
        </div>
      </div>
    </>
  );
};

export default CourseCompSec;
