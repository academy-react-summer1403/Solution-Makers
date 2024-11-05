import React from "react";
import CompCard from "./../CompCard/index";
import CompDetail from "../CompDetail";

const DetailWrapper = ({ detailList }) => {
  return (
    <>
      <div className="flex justify-between w-[90%]">
        <div className="flex flex-col">
          <CompCard
            title="استاد دوره"
            image="/src/assets/images/comparison/teacher.png"
          />
          <CompCard
            title="سطح دوره"
            image="/src/assets/images/comparison/level.png"
          />
          <CompCard
            title="شروع دوره"
            image="/src/assets/images/comparison/date.png"
          />
          <CompCard
            title="پایان دوره"
            image="/src/assets/images/comparison/date.png"
          />
          <CompCard
            title="ظرفیت دوره"
            image="/src/assets/images/comparison/capacity.png"
          />
          <CompCard
            title="تعداد دانشجو"
            image="/src/assets/images/comparison/student.png"
          />
          <CompCard
            title="قیمت دوره"
            image="/src/assets/images/comparison/cost.png"
          />
        </div>
        <div className="flex flex-col">
          <CompDetail detail={detailList.teacherName} />
          <CompDetail detail={detailList.courseLevelName} />
          <CompDetail
            detail={
              detailList?.startTime ? detailList.startTime.slice(0, 10) : "N/A"
            }
          />
          <CompDetail
            detail={
              detailList?.endTime ? detailList.endTime.slice(0, 10) : "N/A"
            }
          />
          <CompDetail detail={detailList.capacity} />
          <CompDetail detail={detailList.currentRegistrants} />
          <CompDetail detail={detailList.cost} />
        </div>
      </div>
    </>
  );
};

export default DetailWrapper;
