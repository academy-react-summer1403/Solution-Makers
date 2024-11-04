import { Image } from "@nextui-org/react";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { TbProgressCheck } from "react-icons/tb";
import { SiLevelsdotfyi } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function RowCourseCard({
  courseId,
  title,
  describe,
  tumbImageAddress,
  cost,
  levelName,
  lastUpdate,
  statusName,
  teacherName,
  currentRegistrants,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row gap-8 bg-white dark:bg-dark-200 dark:border-2 dark:border-[#707070] p-4 rounded-xl shadow-lg cursor-pointer mt-10"
      onClick={() => navigate(`/courses/${courseId}`)}
    >
      <div className="relative w-full md:w-[30%] lg:w-[40%] xl:w-[30%] flex items-center">
        <Image
          radius="lg"
          width="100%"
          className="w-full h-[200px] sm:h-[280px] md:h-[250px] lg:h-[270px] xl:h-[220px]"
          classNames={{ wrapper: "w-full" }}
          src={
            tumbImageAddress ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
        />
      </div>
      <div className="flex flex-col gap-5 md:justify-between w-[70%] lg:w-[60%] xl:w-[70%]">
        <h3 className="text-xl sm:text-2xl lg:text-lg text-ellipsis whitespace-nowrap overflow-hidden">
          {title}
        </h3>
        <p className="hidden md:block text-justify">
          {describe} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod sed architecto fuga explicabo voluptates error sunt porro maxime
          quaerat, temporibus placeat velit ratione, fugit totam laborum nostrum
          ex minima repellat!
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap xl:flex-nowrap justify-between">
          <div className="flex text-xl lg:text-lg xl:text-[14px] flex-col md:flex-row md:flex-wrap xl:flex-nowrap xl:bg-[#ECEFF1] dark:bg-dark-100 gap-3 md:gap-5 xl:gap-5 xl:p-4 rounded-3xl xl:rounded-full p-4">
            <Details
              text={teacherName}
              icon={<RiGraduationCapLine size={20} />}
            />
            <Details
              text={`${currentRegistrants} دانش‌آموز`}
              icon={<BsPeopleFill size={20} />}
            />
            <Details text={levelName} icon={<SiLevelsdotfyi />} />
            <Details text={statusName} icon={<TbProgressCheck size={20} />} />
            <Details text={lastUpdate.slice(0, 10)} />
          </div>
          <div className="hidden xs:flex items-center pt-4 ps-2 xl:pt-0 xl:ps-0 gap-1">
            <span className="text-[12px] xs:text-xl xl:hidden">قیمت :</span>
            {cost > 0 ? (
              <span>
                <b className="text-primary me-1 xs:text-2xl sm:text-3xl lg:text-xl">
                  {cost.toLocaleString()}
                </b>{" "}
                تومان
              </span>
            ) : (
              "رایگان"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCourseCard;

function Details({ text, icon }) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline-flex">{icon}</span>
      <span className="text-sm xs:text-xl lg:text-[15px] text-ellipsis whitespace-nowrap overflow-hidden">
        {text}
      </span>
    </div>
  );
}
