import React from "react";

const CompCard = ({ title, image }) => {
  return (
    <>
      <div className="flex justify-between items-center text-center border-b-1 border-primary-400 my-2">
        <div className="bg-primary-200 rounded-full w-7 h-7 flex items-center">
          <img
            src={image}
            alt=""
            className="w-5 mx-1"
          />
        </div>

        <p className="">{title} :</p>
      </div>
    </>
  );
};

export default CompCard;
