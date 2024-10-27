/* eslint-disable react/prop-types */
// import React from "react";

const ServicesCard = ({
  serviceDescription,
  serviceTitle,
  img,
}) => {
  return (
    <div>
      <div className=" border-2 border-solid border-[#dee2e4] text-center flex flex-col flex-nowrap justify-center gap-[8px] items-center rounded-[40px] w-[405px] h-[280px] ease-in duration-150 hover:dark:bg-dark-100 hover:bg-white hover:cursor-pointer hover:scale-[1.03]  ">
        <div className=" w-[80px] h-[80px] dark:invert ">
          <img src={img} />
        </div>
        <div>
          <h1>{serviceTitle}</h1>
          <p className=" mt-[8px] ">
            {serviceDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
