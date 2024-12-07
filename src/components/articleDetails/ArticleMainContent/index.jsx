import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { Avatar, Button } from "@nextui-org/react";
import CommentsBox from "../../common/comments/CommentsBox";
import ArticleRateSection from "../ArticleRateSection";
import {
  addArticleComment,
  fetchArticleById,
  fetchArticleComments,
} from "../../../core/api/app/ArticleDetails";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/Provider";

function ArticleMainContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { reFetch, setReFetch } = useContext(AppContext);
  const [commentBody, setCommentBody] = useState("");
  const [commentTitle, setCommentTitle] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(id),
  });

  const comments = useQuery({
    queryKey: ["articleComments"],
    queryFn: () => fetchArticleComments(id),
  });

  useEffect(() => {
    toast.remove();
  }, []);

  useEffect(() => {
    reFetch && comments?.refetch();
    setReFetch(false);
  }, [reFetch]);

  if (error) {
    return (
      <div className="flex flex-col justify-center gap-8 mt-14">
        <span className=" text-center text-2xl">
          دریافت اطلاعات با خطا مواجه گردید
        </span>
        <span className="text-center">
          <Button
            color="primary"
            className="text-lg py-6 dark:bg-dark-100"
            onClick={() => navigate("/articles")}
          >
            بازگشت به صفحه مقاله ها
          </Button>
        </span>
      </div>
    );
  }

  useEffect(() => {
    scrollTo({ top: "0", behavior: "instant" });
  }, []);

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center my-[56px]" size={20} />
    );
  }

  return (
    <>
      <div className="container flex flex-col mt-10">
        <div className="flex flex-col gap-10 md:flex-row p-5">
          <div className="imgContainer w-full md:w-[40%] rounded-2xl overflow-hidden lg:h-[340px]">
            <img
              src={
                data.data.detailsNewsDto.currentImageAddress ||
                "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
              }
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between w-full md:w-[60%]">
            <div className="flex items-center gap-2">
              <h1 className="text-ellipsis whitespace-nowrap overflow-hidden">
                {data.data.detailsNewsDto.title}
              </h1>
              <span>{`( ${data.data.detailsNewsDto.newsCatregoryName} )`}</span>
            </div>
            <p
              className="text-justify mt-5 md:mt-0 overflow-hidden text-[#455A64] dark:text-white"
              dangerouslySetInnerHTML={{
                __html: data.data.detailsNewsDto.describe,
              }}
            ></p>
            <div className="flex flex-col sm:flex-row justify-between sm:text-[16px]">
              <div className="text-primary mt-5 md:mt-0 flex flex-col items-start sm:flex-row sm:items-center gap-4">
                <span className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye size={20} />
                  {data.data.detailsNewsDto.currentView} بازدید
                </span>
                <GoDotFill size={20} className="hidden sm:inline-block" />
                <span className="flex items-center gap-1">
                  <IoCalendarOutline size={20} />
                  {data.data.detailsNewsDto.insertDate.slice(0, 10)}
                </span>
              </div>
              <div className="xs:flex mt-5 md:mt-0 justify-start items-center gap-3 sm:bg-white dark:bg-dark-100 sm:pe-12 sm:ps-4 sm:py-3 rounded-2xl">
                <Avatar
                  radius="lg"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <p>{data.data.detailsNewsDto.addUserFullName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-64">
          <div className="flex flex-col items-start justify-center mt-12 gap-5 truncate">
            <h3 className="text-lg font-bold">
              {data.data.detailsNewsDto.googleTitle}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: data.data.detailsNewsDto.googleDescribe,
              }}
            ></p>
          </div>
          <ArticleRateSection
            title="آیا از این مقاله راضی بودید؟"
            id={id}
            likeId={data.data.detailsNewsDto.likeId}
            currentUserFavoriteId={
              data.data.detailsNewsDto.currentUserFavoriteId
            }
            currentUserIsLike={data.data.detailsNewsDto.currentUserIsLike}
            currentUserIsDissLike={
              data.data.detailsNewsDto.currentUserIsDissLike
            }
            currentUserRateNumber={
              data.data.detailsNewsDto.currentUserRateNumber
            }
            currentUserSetRate={data.data.detailsNewsDto.currentUserSetRate}
            isCurrentUserFavorite={
              data.data.detailsNewsDto.isCurrentUserFavorite
            }
            currentLikeCount={data.data.detailsNewsDto.currentLikeCount}
            currentDissLikeCount={data.data.detailsNewsDto.currentDissLikeCount}
            refetch={refetch}
          />
          <div className="bg-white dark:bg-dark-200 p-7 mt-12 rounded-3xl shadow-xl">
            <CommentsBox
              newsId={id}
              title="نظرات کاربران درباره این مقاله"
              comments={comments.data?.data}
              isLoading={comments.isLoading}
              error={comments.error}
              commentBody={commentBody}
              commentTitle={commentTitle}
              setCommentBody={setCommentBody}
              setCommentTitle={setCommentTitle}
              addComment={() =>
                addArticleComment(id, commentTitle, commentBody).then(() => {
                  setCommentTitle("");
                  setCommentBody("");
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleMainContent;
