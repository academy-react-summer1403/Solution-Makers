import { Button } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import {
  submitScoreForCourse,
  addCourseToFavorites,
  removeCourseFromFavorites,
  addCourseLike,
  addCourseDislike,
  deleteCourseLike,
} from "../../../core/api/app/CourseDetails";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/Provider";

function RateSection({
  id,
  title,
  currentUserLike,
  currentUserDissLike,
  isUserFavorite,
  userFavoriteId,
  userLikeId,
  currentUserSetRate,
  currentUserRateNumber,
  refetch,
}) {
  const { setReFetch } = useContext(AppContext);
  const [score, setScore] = useState(0);
  const [isLiked, setIsLiked] = useState(undefined);
  const [isDisLiked, setIsDisLiked] = useState(undefined);
  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    setIsLiked(currentUserLike);
    setIsDisLiked(currentUserDissLike);
    setIsFavorite(isUserFavorite);
  }, [currentUserLike, currentUserDissLike, isUserFavorite]);

  return (
    <div className="flex gap-8 flex-col xl:flex-row justify-between mt-12">
      <div className="hidden xs:flex items-center gap-3">
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
        <span>امتیاز بدید</span>
        <div>
          <Button
            className="text-[16px] text-white bg-primary rounded-full"
            onClick={() => {
              if (!currentUserSetRate) {
                submitScoreForCourse(id, score).then(() => refetch());
              } else {
                toast.error(
                  `شما قبلا به این دوره امتیاز ${currentUserRateNumber} را دادید`
                );
              }
            }}
          >
            ثبت امتیاز
          </Button>
        </div>
      </div>
      <div className="hidden xs:flex items-center justify-center sm:justify-start gap-4">
        <h3>{title}</h3>
        {isLiked ? (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              deleteCourseLike(userLikeId).then(() => {
                setReFetch(true);
                setIsLiked(false);
              });
            }}
          >
            <BiSolidLike size={25} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addCourseLike(id).then(() => {
                setReFetch(true);
                if (!isLiked && !isDisLiked) {
                  setIsLiked((prev) => !prev);
                } else {
                  setIsLiked((prev) => !prev);
                  setIsDisLiked((prev) => !prev);
                }
              });
            }}
          >
            <BiLike size={25} />
          </Button>
        )}
        {isDisLiked ? (
          <span className="rounded-full bg-primary text-white px-7 py-2">
            <BiSolidDislike size={25} />
          </span>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addCourseDislike(id).then(() => {
                setReFetch(true);
                if (!isLiked && !isDisLiked) {
                  setIsDisLiked((prev) => !prev);
                } else {
                  setIsDisLiked((prev) => !prev);
                  setIsLiked((prev) => !prev);
                }
              });
            }}
          >
            <BiDislike size={25} />
          </Button>
        )}
        {isFavorite ? (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              removeCourseFromFavorites(userFavoriteId).then(() => {
                setReFetch(true);
                setIsFavorite((prev) => !prev);
              });
            }}
          >
            <FaBookmark size={22} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addCourseToFavorites(id).then(() => {
                setReFetch(true);
                setIsFavorite((prev) => !prev);
              });
            }}
          >
            <FaRegBookmark size={22} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default RateSection;
