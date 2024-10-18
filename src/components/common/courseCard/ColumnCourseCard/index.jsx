import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { FiBookOpen } from "react-icons/fi";
import {FaHeart, FaRegHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import instance from "../../../../core/services/middleware";

function ColumnCourseCard({
  courseId,
  title,
  tumbImageAddress,
  cost,
  teacherName,
  currentRegistrants,
  likeCount,
  userIsLiked,
  userLikedId,
  refetch
}) {
  const [likesNumber, setLikesNumber] = useState(likeCount);
  const [isLiked , setIsLiked] = useState(userIsLiked);

  const navigate = useNavigate();

  const addCourseLike = () =>
    instance.post(`/Course/AddCourseLike?CourseId=${courseId}`).then(() => refetch()).then(() => {
      setLikesNumber((prev) => prev + 1);
      setIsLiked(prev => !prev)
      toast.success("لایک شد");
    });

    const deleteCourseLike = () => {
      const formData = new FormData();
      formData.append("CourseLikeId", userLikedId);
      instance
        .delete("/Course/DeleteCourseLike", { data: formData }).then(() => refetch())
        .then(() => {
          toast.success("لایک برداشته شد")
          setIsLiked(prev => !prev)
          setLikesNumber(prev => prev-1)
        });
    };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [likesNumber]);

  return (
    <Card
      className="p-4 hover:scale-[1.03] dark:border-2 dark:border-[#707070]"
      data-aos="flip-left"
      shadow="sm"
      isPressable
      
    >
      <CardHeader className="overflow-visible p-0 max-w-full" onClick={() => navigate(courseId)}>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full h-[330px] md:h-[275px] lg:h-[220px]"
          classNames={{ wrapper: "w-full" }}
          src={
            tumbImageAddress ||
            "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
          }
        />
      </CardHeader>
      <CardBody className="text-right px-0 gap-4 md:gap-0">
        <h3 className="text-lg">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:text-sm sm:mt-4 p-4 gap-5 sm:gap-14 md:gap-10 lg:gap-5 rounded-[1.5rem] sm:bg-gray dark:bg-dark-100">
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
      <CardFooter className="flex items-center px-0 gap-2 justify-between lg:py-0 lg:mt-1">
        {isLiked ? <span className="flex items-center gap-1 text-lg text-[#f44336] bg-[#ffebee] py-2 px-5 rounded-full" onClick={deleteCourseLike}>
          <FaHeart />
          {likesNumber}
        </span> : <span className="flex items-center gap-1 text-lg text-[#f44336] bg-[#ffebee] py-2 px-5 rounded-full" onClick={addCourseLike}>
          <FaRegHeart />
          {likesNumber}
        </span>}
        <p className="text-md">
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
      </CardFooter>
    </Card>
  );
}

export default ColumnCourseCard;
