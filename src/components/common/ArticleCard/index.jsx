import { useContext, useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoArrowBackCircleSharp, IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import {
  addArticleDislike,
  addArticleLike,
  addArticleToFavorites,
  deleteArticleLike,
  removeArticleFromFavorites,
} from "../../../core/api/app/ArticleDetails";
import { AppContext } from "../../../context/Provider";
import { FaStar, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function ArticleCard({
  id,
  title,
  miniDescribe,
  currentView,
  updateDate,
  isCurrentUserFavorite,
  currentUserFavoriteId,
  currentUserIsLike,
  currentUserIsDissLike,
  currentLikeCount,
  currentDissLikeCount,
  currentImageAddressTumb,
  likeId,
  currentRate,
  addUserProfileImage,
}) {
  const navigate = useNavigate();
  const { setReFetch } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [isLiked, setIsLiked] = useState(undefined);
  const [isDisLiked, setIsDisLiked] = useState(undefined);
  const [likeCountState, setLikeCountState] = useState(currentLikeCount);
  const [dissLikeCountState, setDissLikeCountState] =
    useState(currentDissLikeCount);

  const likeHandler = () => {
    if (!isLiked) {
      addArticleLike(id)
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
      deleteArticleLike(likeId)
        .then(() => setReFetch(true))
        .then(() => {
          setIsLiked(false);
          setLikeCountState((prev) => prev - 1);
        });
    }
  };

  const disLikeHandler = () => {
    if (!isDisLiked) {
      addArticleDislike(id)
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

  const bookMarkHandler = () => {
    if (isFavorite) {
      removeArticleFromFavorites(currentUserFavoriteId)
        .then(() => setReFetch(true))
        .then(() => {
          setIsFavorite(false);
        });
    } else {
      addArticleToFavorites(id)
        .then(() => setReFetch(true))
        .then(() => {
          setIsFavorite(true);
        });
    }
  };

  useEffect(() => {
    setIsLiked(currentUserIsLike);
    setIsDisLiked(currentUserIsDissLike);
    setIsFavorite(isCurrentUserFavorite);
  }, [currentUserIsLike, currentUserIsDissLike, isCurrentUserFavorite]);

  return (
    <Card
      className="p-4 hover:scale-[1.03] dark:border-2 dark:border-[#707070]"
      classNames={{ base: "w-full" }}
      isPressable
    >
      <span
        className="absolute top-5 left-5 z-50"
        onClick={() => navigate(`/articles/${id}`)}
      >
        <IoArrowBackCircleSharp color="#2196F3" size={40} />
      </span>
      <CardHeader className="p-0" onClick={() => navigate(`/articles/${id}`)}>
        <div className="flex justify-center w-full rounded-3xl overflow-hidden">
          <img
            src={
              currentImageAddressTumb ||
              "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
            }
            className="w-full h-[200px] sm:h-[300px] md:h-[275px] lg:h-[280px]"
          />
        </div>
      </CardHeader>
      <CardBody className="text-right px-0 mt-5">
        <div className="flex justify-between my-2 px-2">
          <h3 className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </h3>
          <div className="hidden xs:flex gap-3">
            <span onClick={bookMarkHandler}>
              {isFavorite ? (
                <FaBookmark size={22} />
              ) : (
                <FaRegBookmark size={22} />
              )}
            </span>
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
        <div className="hidden xs:flex flex-col text-justify justify-between sm:flex-row gap-2 sm:mt-4 text-ellipsis overflow-hidden">
          {miniDescribe}
        </div>
      </CardBody>
      <CardFooter className="flex-col items-center gap-4 justify-start sm:flex-row sm:justify-between text-primary">
        <span className="flex items-center gap-1">
          <MdOutlineRemoveRedEye size={20} />
          {currentView}
        </span>
        <GoDotFill size={20} className="hidden sm:inline-block" />
        <span className="flex items-center gap-1">
          <IoCalendarOutline size={20} />
          {updateDate.slice(0, 10)}
        </span>
        <span className="flex" style={{ direction: "ltr" }}>
          {new Array(currentRate).fill(0).map((item, index) => (
            <FaStar
              key={index}
              className="cursor-pointer"
              size={28}
              color="#FFC107"
            />
          ))}
          {new Array(5 - currentRate).fill(0).map((item, index) => (
            <CiStar
              key={index}
              className="cursor-pointer"
              size={28}
              color="#FFC107"
            />
          ))}
        </span>
      </CardFooter>
    </Card>
  );
}

export default ArticleCard;
