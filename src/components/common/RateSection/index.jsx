import { Button } from "@nextui-org/react";
import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import instance from "../../../core/services/middleware";
import toast from "react-hot-toast";

function RateSection({
  id,
  title,
  addLike,
  addDislike,
  currentUserLike,
  currentUserDissLike,
  isUserFavorite,
  userFavoriteId,
  refetch,
}) {
  const [score, setScore] = useState(0);
  const [isLiked, setIsLiked] = useState(currentUserLike);
  const [isDisLiked, setIsDisLiked] = useState(currentUserDissLike);
  const [isFavorite, setIsFavorite] = useState(isUserFavorite);

  const submitScoreForCourse = () => {
    instance.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${score}`);
  };

  const addCourseToFavorites = () =>
    instance
      .post("/Course/AddCourseFavorite", { courseId: id })
      .then(() => refetch())
      .then(() => toast.success("به علاقمندی ها اضافه شد"));

  const removeCourseFromFavorites = () => {
    const formData = new FormData();
    formData.append("CourseFavoriteId", userFavoriteId);
    instance
      .delete("/Course/DeleteCourseFavorite", { data: formData })
      .then(() => refetch())
      .then(() => toast.success("از علاقمندی ها حذف شد"));
  };

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
        <p>امتیاز بدید</p>
        <div>
          <Button
            className="text-[16px] text-white bg-primary rounded-full"
            onClick={submitScoreForCourse}
          >
            ثبت امتیاز
          </Button>
        </div>
      </div>
      <div className="hidden xs:flex items-center gap-4">
        <p>{title}</p>
        {isLiked ? (
          <span className="rounded-full bg-primary text-white px-7 py-2">
            <BiSolidLike size={25} />
          </span>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addLike();
              if (!isLiked && !isDisLiked) {
                setIsLiked((prev) => !prev);
              } else {
                setIsLiked((prev) => !prev);
                setIsDisLiked((prev) => !prev);
              }
              toast.success("لایک شد");
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
              addDislike();
              if (!isLiked && !isDisLiked) {
                setIsDisLiked((prev) => !prev);
              } else {
                setIsDisLiked((prev) => !prev);
                setIsLiked((prev) => !prev);
              }
              toast.success("دیسلایک شد");
            }}
          >
            <BiDislike size={25} />
          </Button>
        )}
        {isFavorite ? (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              removeCourseFromFavorites();
              setIsFavorite((prev) => !prev);
            }}
          >
            <FaBookmark size={22} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addCourseToFavorites();
              setIsFavorite((prev) => !prev);
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
