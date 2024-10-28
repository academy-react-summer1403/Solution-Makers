/* eslint-disable react/prop-types */
// import React from "react";

const CategoryCard = ({
  catDescription,
  catTitle,
  img,
}) => {
  return (
    <div>
      <div className=" shadow shadow-[#ccc] dark:border-[#707070] dark:bg-dark-100 ease-in duration-150 text-center flex flex-col flex-nowrap justify-center gap-[8px] items-center rounded-[40px] w-[328px] h-[328px] bg-white hover:scale-[1.05] hover:cursor-pointer ">
        <div className=" w-[80px] h-[80px] ">
          <img src={img} />
        </div>
        <div>
          <h1>{catTitle}</h1>
          <p className=" mt-[8px] ">
            {catDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
