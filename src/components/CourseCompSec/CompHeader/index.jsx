import React from "react";

const CompHeader = ({title1}) => {
  return (
    <>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2">
        مقایسه بین دوره‌های {title1}
      </div>
      <div className="w-[200px] xl:w-[300px] h-[3px] lg:h-[4px] mb-3 md:mb-4 lg:mb-6 xl:mb-8 rounded-full bg-gradient-to-r from-[#FF9C00] to-[#2196F3]"></div>
    </>
  );
};

export default CompHeader;
