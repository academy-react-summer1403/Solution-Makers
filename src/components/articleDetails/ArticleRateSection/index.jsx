import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import {
  submitScoreForArticle,
  addArticleToFavorites,
  removeArticleFromFavorites,
  addArticleLike,
  addArticleDislike,
  deleteArticleLike,
} from "../../../core/api/app/ArticleDetails";
import toast from "react-hot-toast";

function RateSection({
  title,
  id,
  likeId,
  currentUserFavoriteId,
  currentUserIsLike,
  currentUserIsDissLike,
  currentUserRateNumber,
  currentUserSetRate,
  isCurrentUserFavorite,
  currentLikeCount,
  currentDissLikeCount,
  refetch,
}) {
  const [score, setScore] = useState(0);
  const [isLiked, setIsLiked] = useState(undefined);
  const [isDisLiked, setIsDisLiked] = useState(undefined);
  const [isFavorite, setIsFavorite] = useState(undefined);

  useEffect(() => {
    setIsLiked(currentUserIsLike);
    setIsDisLiked(currentUserIsDissLike);
    setIsFavorite(isCurrentUserFavorite);
  }, [currentUserIsLike, currentUserIsDissLike, isCurrentUserFavorite]);

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
                submitScoreForArticle(id, score).then(() => refetch());
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
      <div className="hidden xs:flex items-center gap-4">
        <p>{title}</p>
        {isLiked ? (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              deleteArticleLike(likeId).then(() => refetch());
              setIsLiked(false);
            }}
          >
            <BiSolidLike size={25} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addArticleLike(id).then(() => refetch());
              if (!isLiked && !isDisLiked) {
                setIsLiked((prev) => !prev);
              } else {
                setIsLiked((prev) => !prev);
                setIsDisLiked((prev) => !prev);
              }
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
              addArticleDislike(id).then(() => refetch());
              if (!isLiked && !isDisLiked) {
                setIsDisLiked((prev) => !prev);
              } else {
                setIsDisLiked((prev) => !prev);
                setIsLiked((prev) => !prev);
              }
            }}
          >
            <BiDislike size={25} />
          </Button>
        )}
        {isFavorite ? (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              removeArticleFromFavorites(currentUserFavoriteId).then(() =>
                refetch()
              );
              setIsFavorite((prev) => !prev);
            }}
          >
            <FaBookmark size={22} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addArticleToFavorites(id).then(() => refetch());
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
