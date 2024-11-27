/* eslint-disable react/prop-types */
// import React from "react";

const ServicesCard = ({ serviceDescription, serviceTitle, img }) => {
  return (
    <div className="border-2 border-solid border-[#dee2e4] text-center flex flex-col flex-nowrap justify-center items-center gap-4 rounded-[40px] h-[280px] ease-in duration-150 hover:dark:bg-dark-100 hover:bg-white hover:cursor-pointer hover:scale-[1.03]">
      <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] dark:invert">
        <img src={img} />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl">{serviceTitle}</h3>
        <p className="mt-[8px] px-3">{serviceDescription}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
