import axios from "axios";
import { useParams } from "react-router-dom";
import { baseApi } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { Avatar } from "@nextui-org/react";
import CommentsBox from "../../common/comments/CommentsBox";
import RateSection from "../../common/RateSection";

function ArticleMainContent() {
  const { id } = useParams();

  const fetchArticleById = () => axios.get(`${baseApi}/News/${id}`);

  const fetchArticleComments = () =>
    axios.get(`${baseApi}/News/GetNewsComments?NewsId=${id}`);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(),
  });

  const comments = useQuery({
    queryKey: ["articleComments"],
    queryFn: () => fetchArticleComments(),
  });

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
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
            <h1 className="text-ellipsis whitespace-nowrap overflow-hidden">
              {data.data.detailsNewsDto.title}
            </h1>
            <p className="text-justify mt-5 md:mt-0 overflow-hidden text-[#455A64] dark:text-white">
              {data.data.detailsNewsDto.describe}
            </p>

            <div className="flex flex-col sm:flex-row justify-between sm:text-[16px]">
              <div className="text-primary mt-5 md:mt-0 flex flex-col items-start sm:flex-row sm:items-center gap-4">
                <span className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye size={20} />
                  {data.data.detailsNewsDto.currentView} بازدید
                </span>
                <GoDotFill size={20} className="hidden sm:inline-block" />
                <span className="flex items-center gap-1">
                  <IoCalendarOutline size={20} />
                  1402/7/2
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
          <div className="flex flex-col items-start justify-center mt-12 gap-5">
            <h3 className="text-lg font-bold">
              {data.data.detailsNewsDto.googleTitle}
            </h3>
            <p>{data.data.detailsNewsDto.googleDescribe}</p>
          </div>
          <RateSection title="آیا از این مقاله راضی بودید؟" />
          <div className="bg-white dark:bg-dark-200 p-7 mt-12 rounded-3xl">
            <CommentsBox
              articleId={id}
              title="نظرات کاربران درباره این مقاله"
              comments={comments.data?.data}
              isLoading={comments.isLoading}
              error={comments.error}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleMainContent;
