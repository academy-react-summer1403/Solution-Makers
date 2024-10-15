import { Image } from "@nextui-org/react";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoPeople, GoClock } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function RowCourseCard({
  courseId,
  title,
  tumbImageAddress,
  cost,
  teacherName,
  currentRegistrants,
  likeCount,
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row gap-8 bg-white dark:bg-dark-200 dark:border-2 dark:border-[#707070] p-4 rounded-xl shadow-lg cursor-pointer mt-10"
      data-aos="fade-up"
      onClick={() => navigate(courseId)}
    >
      <div className="relative w-full md:w-[30%] lg:w-[40%] xl:w-[30%] flex items-center">
        <Image
          radius="lg"
          width="100%"
          className="w-full h-[450px] md:h-[250px] lg:h-[270px] xl:h-[220px]"
          classNames={{ wrapper: "w-full" }}
          src={
            tumbImageAddress ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
        />
        <p className="absolute top-5 lg:top-14 xl:top-6 right-3 z-10 flex items-center gap-1 text-sm text-[#f44336] bg-[#ffebee] py-2 px-5 rounded-full">
          <FaRegHeart />
          {likeCount}
        </p>
      </div>

      <div className="flex flex-col gap-5 md:justify-between w-[70%] lg:w-[60%] xl:w-[70%]">
        <b className="text-lg">{title}</b>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo
          error facere, ipsa laudantium id fugiat perferendis autem magnam
          dolorum dolore porro excepturi voluptate dolores? Iste quod dolore
          commodi minus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Commodi incidunt vel iure nisi laboriosam suscipit ex aut
          inventore tempora perferendis explicabo deleniti quasi odit culpa, at
          ab sequi! Tenetur, praesentium!
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap xl:flex-nowrap justify-between">
          <div className="flex text-xl lg:text-sm flex-col md:flex-row md:flex-wrap xl:flex-nowrap xl:bg-[#ECEFF1] dark:bg-dark-100 gap-3 md:gap-5 xl:gap-5 xl:p-4 rounded-3xl xl:rounded-full p-4">
            <Details text={teacherName} icon={<RiGraduationCapLine />} />
            <Details
              text={`${currentRegistrants} دانش‌آموز`}
              icon={<GoPeople />}
            />
            <Details text="202 درس" icon={<FiBookOpen />} />
            <Details text="14 ساعت" icon={<GoClock />} />
            <Details text="ا آذر 1402" />
          </div>
          <p className="flex items-center pt-4 ps-2 xl:pt-0 xl:ps-0">
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
          </p>
        </div>
      </div>
    </div>
  );
}

export default RowCourseCard;

function Details({ text, icon }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p>{text}</p>
    </div>
  );
}