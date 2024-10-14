import { HiOutlineUsers } from "react-icons/hi2";
import CourseSpecificationsDiv from "./CourseSpecificationsDiv";
import { BsCameraVideo } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { LuCalendarCheck2 } from "react-icons/lu";
import { Avatar, Button } from "@nextui-org/react";
import { RiGraduationCapLine } from "react-icons/ri";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdReduceCapacity } from "react-icons/md";

function CourseSpecificationsBox({
  currentRegistrants,
  courseStatusName,
  courseLevelName,
  capacity,
  startTime,
  endTime,
  cost,
  teacherName,
  uniqeUrlString,
}) {
  return (
    <>
      <div className="bg-white dark:bg-dark-200 px-8 py-5 flex flex-col items-center sm:items-stretch divide-y-1 divide-gray rounded-3xl">
        <h3 className="text-center text-2xl pb-5">مشخصات دوره</h3>
        <CourseSpecificationsDiv
          icon={<HiOutlineUsers />}
          textKey="تعداد دانشجو"
          textValue={currentRegistrants}
        />
        <CourseSpecificationsDiv
          icon={<BsCameraVideo />}
          textKey="وضعیت دوره"
          textValue={courseStatusName}
        />
        <CourseSpecificationsDiv
          icon={<SiLevelsdotfyi />}
          textKey="سطح دوره"
          textValue={courseLevelName}
        />
        <CourseSpecificationsDiv
          icon={<MdReduceCapacity />}
          textKey="ظرفیت"
          textValue={capacity}
        />
        <CourseSpecificationsDiv
          icon={<IoCalendarOutline />}
          textKey="تاریخ شروع"
          textValue={startTime.slice(0, 10)}
        />
        <CourseSpecificationsDiv
          icon={<LuCalendarCheck2 />}
          textKey="تاریخ پایان"
          textValue={endTime.slice(0, 10)}
        />
        <div className="py-5 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Button color="primary" size="lg" className="rounded-full ">
            شرکت در دوره
          </Button>
          <span className="flex items-center gap-2">
            <b className="text-primary text-xl">{cost.toLocaleString()}</b>
            تومان
          </span>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 flex flex-col sm:flex-row items-center p-6 gap-5 rounded-3xl">
        <div>
          <Avatar
            size="lg"
            radius="md"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </div>
        <div className="flex flex-col">
          <span className="flex items-center gap-2">
            <RiGraduationCapLine size={20} />
            {teacherName}
          </span>
          <div>{uniqeUrlString}</div>
        </div>
      </div>
    </>
  );
}

export default CourseSpecificationsBox;
