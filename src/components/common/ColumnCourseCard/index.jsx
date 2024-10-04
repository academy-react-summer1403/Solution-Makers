import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { GoClock } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function ColumnCourseCard({
  courseId,
  title,
  tumbImageAddress,
  cost,
  teacherName,
  currentRegistrants,
  likeCount,
}) {
  return (
    <Card
      className="p-4"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardHeader className="overflow-visible p-0 max-w-full">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full h-[330px] md:h-[275px] lg:h-[220px]"
          classNames={{ wrapper: "w-full" }}
          src={tumbImageAddress}
        />
      </CardHeader>
      <CardBody className="text-right px-0">
        <h3 className="text-lg">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:text-sm sm:mt-4 py-4 gap-5 sm:gap-14 md:gap-10 lg:gap-5 rounded-[1.5rem] sm:bg-[#ECEFF1]">
          <p className="flex items-center gap-1">
            <FiBookOpen />
            202درس
          </p>
          <p className="flex items-center gap-1">
            <GoClock /> 14ساعت
          </p>
          <p className="flex items-center gap-1">
            <IoCalendarOutline /> 1آذر1402
          </p>
        </div>
        <div className="flex flex-col justify-between sm:flex-row gap-2 sm:mt-4">
          <p>
            <b>مدرس:</b> {teacherName}
          </p>
          <p>{currentRegistrants} دانش‌آموز</p>
        </div>
      </CardBody>
      <CardFooter className="flex-col px-0 items-start gap-2 justify-start sm:flex-row sm:items-center sm:justify-between lg:py-0 lg:mt-1">
        <p className="flex items-center gap-1 text-lg text-[#f44336] bg-[#ffebee] py-2 px-5 rounded-full">
          <FaRegHeart />
          {likeCount}
        </p>
        <p className="text-md">
          {cost > 0 ? (
            <>
              <b className="text-primary me-1 text-lg">{cost.toLocaleString()}</b> تومان
            </>
          ) : (
            "رایگان"
          )}
        </p>
      </CardFooter>
    </Card>
  );
}

export default ColumnCourseCard;