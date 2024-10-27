import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { submitScoreForCourse } from "../../../../core/api/app/CourseDetails";
import { FaStar } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";

function ColumnCourseCard({
  courseId,
  title,
  tumbImageAddress,
  cost,
  teacherName,
  statusName,
  levelName,
  currentRegistrants,
  currentUserRateNumber,
  currentUserSetRate,
  refetch,
}) {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Card
      className="p-4 hover:scale-[1.03] dark:border-2 dark:border-[#707070]"
      data-aos="flip-left"
      shadow="sm"
      isPressable
    >
      <CardHeader
        className="overflow-visible p-0 max-w-full"
        onClick={() => navigate(`/courses/${courseId}`)}
      >
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full h-[150px] xs:h-[180px] sm:h-[275px] md:h-[275px] lg:h-[200px] xl:h-[180px]"
          classNames={{ wrapper: "w-full" }}
          src={
            tumbImageAddress ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
        />
      </CardHeader>
      <CardBody
        className="text-right px-0 gap-1 md:gap-0"
        onClick={() => navigate(`/courses/${courseId}`)}
      >
        <h3 className="text-lg px-1">{title}</h3>
        <div className="hidden sm:flex flex-wrap sm:justify-center lg:text-[14px] sm:mt-2 p-4 gap-5 sm:gap-14 md:gap-10 lg:gap-5 xl:gap-4 rounded-[1.5rem] sm:bg-gray dark:bg-dark-100">
          <span className="flex items-center gap-1">
            <SiLevelsdotfyi />
            {levelName}
          </span>
          <span className="flex items-center gap-1">
            <BsPeopleFill /> {currentRegistrants} نفر
          </span>
          <span className="flex items-center gap-1">{statusName}</span>
        </div>
        <div className="sm:mt-4 lg:text-[15px] flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <span className="flex gap-1">
            <b>مدرس:</b> {teacherName}
            <RiGraduationCapLine />
          </span>
          <span className="text-ellipsis whitespace-nowrap overflow-hidden">
            {cost > 0 ? (
              <>
                <b className="text-primary me-1 text-lg">
                  {cost.toLocaleString()}
                </b>{" "}
                تومان
              </>
            ) : (
              "رایگان"
            )}
          </span>
        </div>
      </CardBody>
      <CardFooter className="hidden sm:flex px-0 lg:mt-1">
        <div className="w-full flex justify-between items-center">
          <div className="flex" style={{ direction: "ltr" }}>
            {new Array(score).fill(0).map((item, index) => (
              <FaStar
                key={index}
                className="cursor-pointer"
                size={28}
                color="#FFC107"
                onClick={() => setScore(index)}
              />
            ))}

            {new Array(5 - score).fill(0).map((item, index) => (
              <CiStar
                key={index}
                className="cursor-pointer"
                size={28}
                color="#FFC107"
                onClick={() => setScore(score + index + 1)}
              />
            ))}
          </div>
          <div>
            <span
              className="text-[16px] text-white bg-primary rounded-full px-8 py-2"
              onClick={() => {
                if (!currentUserSetRate) {
                  submitScoreForCourse(courseId, score).then(() => refetch());
                } else {
                  toast.error(
                    `شما قبلا به این دوره امتیاز ${currentUserRateNumber} را دادید`
                  );
                }
              }}
            >
              ثبت امتیاز
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ColumnCourseCard;
