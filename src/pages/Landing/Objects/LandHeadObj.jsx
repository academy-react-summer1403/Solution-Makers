/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LandHeadObj = ({
  img,
  title,
  countNum,
}) => {
  return (
    <div>
      <div className=" flex flex-col items-center gap-[5px] justify-center rounded-[20px] w-[220px] h-[221px]  border-[3px] border-white  dark:border-dark-100 backdrop-blur-[20px] ">
        <img src={img} alt="" />
        <h1 className=" text-[36px] ">
          551651
        </h1>
        <p className=" text[20px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default LandHeadObj;
