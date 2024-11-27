import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { submitScoreForCourse } from "../../../../core/api/app/CourseDetails";
import { FaStar } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike } from "react-icons/bi";
import { IoArrowBackCircleSharp, IoGitCompareOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";
import { AppContext } from "../../../../context/Provider";
import {
  addCourseLike,
  deleteCourseLike,
  addCourseDislike,
} from "../../../../core/api/app/CourseDetails";

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
  likeCount,
  dissLikeCount,
  userIsLiked,
  userLikedId,
  currentUserDissLike,
}) {
  const { setReFetch, comparisonIds, setComparisonIds } =
    useContext(AppContext);
  const [score, setScore] = useState(0);
  const [isLiked, setIsLiked] = useState(undefined);
  const [isDisLiked, setIsDisLiked] = useState(undefined);
  const [likeCountState, setLikeCountState] = useState(likeCount);
  const [dissLikeCountState, setDissLikeCountState] = useState(dissLikeCount);
  const [isSelected, setIsSelected] = useState(undefined);
  const navigate = useNavigate();

  const likeHandler = () => {
    if (!isLiked) {
      addCourseLike(courseId)
        .then(() => setReFetch(true))
        .then(() => {
          setIsLiked(true);
          setIsDisLiked(false);
          setLikeCountState((prev) => prev + 1);
          if (isDisLiked) {
            setDissLikeCountState((prev) => prev - 1);
          }
        });
    } else {
      deleteCourseLike(userLikedId)
        .then(() => setReFetch(true))
        .then(() => {
          setIsLiked(false);
          setLikeCountState((prev) => prev - 1);
        });
    }
  };

  const disLikeHandler = () => {
    if (!isDisLiked) {
      addCourseDislike(courseId)
        .then(() => setReFetch(true))
        .then(() => {
          setIsDisLiked(true);
          setIsLiked(false);
          if (isLiked) {
            setLikeCountState((prev) => prev - 1);
          }
          setDissLikeCountState((prev) => prev + 1);
        });
    }
  };

  const selectHandler = () => {
    if (isSelected) {
      if (comparisonIds.some((id) => id == courseId)) {
        setComparisonIds(comparisonIds.filter((id) => id != courseId));
      } else {
        if (comparisonIds.length == 2) {
          comparisonIds.shift();
        }
        setComparisonIds([...comparisonIds, courseId]);
      }
    } else {
      if (comparisonIds.length == 2) {
        comparisonIds.shift();
      }
      setComparisonIds([...comparisonIds, courseId]);
    }
  };

  useEffect(() => {
    setIsLiked(userIsLiked);
    setIsDisLiked(currentUserDissLike);
  }, [userIsLiked, currentUserDissLike]);

  useEffect(() => {
    setIsSelected(comparisonIds.includes(courseId));
  }, [comparisonIds]);

  useEffect(() => {
    setComparisonIds([]);
  }, []);

  return (
    <motion.div
      initial={{ transform: "rotateY(90deg)", opacity: 0 }}
      whileInView={{ transform: "rotateY(0)", opacity: 1 }}
      transition={{
        transform: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.75,
        },
      }}
    >
      <Card
        className="p-4 hover:scale-[1.03]"
        classNames={{
          base: `w-full ${
            isSelected ? "border-2 border-primary" : "border-[#707070]"
          } dark:border-2 dark:${
            isSelected ? "border-primary" : "border-[#707070]"
          }}`,
        }}
        shadow="sm"
        isPressable
      >
        <span
          className="absolute top-5 left-5 z-50"
          onClick={() => navigate(`/courses/${courseId}`)}
        >
          <IoArrowBackCircleSharp color="white" size={40} />
        </span>
        <span
          className="bg-white dark:text-black absolute top-6 right-6 z-50 rounded-full p-1"
          onClick={selectHandler}
        >
          <IoGitCompareOutline size={25} />
        </span>
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
              tumbImageAddress != "null" && tumbImageAddress
                ? tumbImageAddress
                : "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
            }
          />
        </CardHeader>
        <CardBody className="text-right px-0 gap-1 md:gap-0">
          <div className="flex justify-between my-2">
            <h3 className="text-lg px-1">{title}</h3>
            <div className="hidden xs:flex items-start gap-2">
              <span onClick={likeHandler}>
                {isLiked ? <BiSolidLike size={24} /> : <BiLike size={24} />}
                {likeCountState}
              </span>
              <span onClick={disLikeHandler}>
                {isDisLiked ? (
                  <BiSolidDislike size={24} />
                ) : (
                  <BiDislike size={24} />
                )}
                {dissLikeCountState}
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-wrap sm:justify-center lg:text-[14px] sm:mt-2 p-4 gap-5 sm:gap-14 md:gap-10 lg:gap-5 xl:gap-3 rounded-[1.5rem] sm:bg-gray dark:bg-dark-100">
            <span className="flex items-center gap-1">
              <SiLevelsdotfyi />
              {levelName}
            </span>
            <span className="flex items-center gap-1">
              <BsPeopleFill /> {currentRegistrants} نفر
            </span>
            <span className="flex items-center gap-1">{statusName}</span>
          </div>
          <div className="flex flex-col sm:mt-4 text-sm sm:text-xl lg:text-[15px]">
            <span className="flex items-center gap-1 text-ellipsis whitespace-nowrap overflow-hidden">
              <b>مدرس:</b> {teacherName}
              <RiGraduationCapLine
                size={22}
                className="hidden xs:inline-flex"
              />
            </span>
            <span className="text-ellipsis whitespace-nowrap overflow-hidden">
              <b>قیمت : </b>
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
        <CardFooter className="hidden sm:flex px-0">
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
                className="text-[16px] text-white bg-primary rounded-full px-8 py-2 xl:px-4"
                onClick={() => {
                  if (!currentUserSetRate) {
                    submitScoreForCourse(courseId, score).then(() =>
                      setReFetch(true)
                    );
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
    </motion.div>
  );
}

export default ColumnCourseCard;
