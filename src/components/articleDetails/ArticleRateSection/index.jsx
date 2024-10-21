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
  const [isLiked, setIsLiked] = useState(currentUserIsLike);
  const [isDisLiked, setIsDisLiked] = useState(currentUserIsDissLike);
  const [isFavorite, setIsFavorite] = useState(isCurrentUserFavorite);

  const submitScoreForArticle = () => {
    if (!currentUserSetRate) {
      instance
        .post(`/News/NewsRate?NewsId=${id}&RateNumber=${score}`)
        .then(() => toast.success("امتیاز ثبت شد"))
        .then(() => refetch());
    } else {
      toast.error(
        `شما قبلا به این دوره امتیاز ${currentUserRateNumber} را دادید`
      );
    }
  };

  const addArticleToFavorites = () => {
    toast
      .promise(instance.post(`/News/AddFavoriteNews?NewsId=${id}`), {
        loading: "در حال پردازش",
        success: "به علاقمندی ها اضافه شد",
        error: "خطایی رخ داد",
      })
      .then(() => refetch());
  };

  const removeArticleFromFavorites = () => {
    toast
      .promise(
        instance.delete("/News/DeleteFavoriteNews", {
          data: {
            deleteEntityId: currentUserFavoriteId,
          },
        }),
        {
          loading: "در حال پردازش",
          success: "از علاقمندی ها اضافه حذف شد",
          error: "خطایی رخ داد",
        }
      )
      .then(() => refetch());
  };

  const addArticleLike = () =>
    instance
      .post(`/News/NewsLike/${id}`)
      .then(() => refetch())
      .then(() => toast.success("لایک شد"));

  const addArticleDislike = () =>
    instance
      .post(`/News/NewsDissLike/${id}`)
      .then(() => refetch())
      .then(() => toast.success("دیسلایک شد"));

  const deleteArticleLike = () => {
    instance
      .delete("/News/DeleteLikeNews", {
        data: {
          deleteEntityId: likeId,
        },
      })
      .then(() => refetch())
      .then(() => toast.success("لایک برداشته شد"));
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
            onClick={submitScoreForArticle}
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
              deleteArticleLike();
              setIsLiked(false);
            }}
          >
            <BiSolidLike size={25} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addArticleLike();
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
              addArticleDislike();
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
              removeArticleFromFavorites();
              setIsFavorite((prev) => !prev);
            }}
          >
            <FaBookmark size={22} />
          </Button>
        ) : (
          <Button
            className="rounded-full bg-primary text-white"
            onClick={() => {
              addArticleToFavorites();
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
