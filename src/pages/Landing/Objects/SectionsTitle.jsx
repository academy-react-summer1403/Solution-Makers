/* eslint-disable react/prop-types */
// import React from "react";

const SectionsTitle = ({ name }) => {
  return (
    <div className=" min-w-[280px] text-center cursor-default ">
      <h1>{name}</h1>
      <div className=" w-full rounded-full h-[4px] bg-gradient-to-r from-[#e7f0fc] from-0% via-[#2196F366] via-50% to-[#e7f0fc] to-100% ">
        {" "}
      </div>
    </div>
  );
};

export default SectionsTitle;
