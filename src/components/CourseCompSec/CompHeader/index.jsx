import React from "react";

const CompHeader = ({title1,title2}) => {
  return (
    <>
      <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2 md:p-3 sm:w-[520px] md:w-[700px] lg:w-[800px] xl:w-[1000px]">
        مقایسه بین دوره‌های {title1} و {title2}
      </div>
      <div className="w-[200px] md:w-[300px] h-[3px] lg:h-[4px] mb-3 sm:mb-4 md:mb-6 lg:mb-10 xl:mb-10 rounded-full bg-gradient-to-r from-[#FF9C00] to-[#2196F3]"></div>
    </>
  );
};

export default CompHeader;
