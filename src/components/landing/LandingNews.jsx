import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewsCard from "./Objects/NewsCard";
import SectionsTitle from "./Objects/SectionsTitle";
import { Button } from "@nextui-org/react";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AppContext } from "../../context/Provider";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

const LandingNews = () => {
  const navigate = useNavigate();
  const { articlesPageNumber } = useContext(AppContext);
  const fetchArticles = () =>
    axios.get(`/News?PageNumber=${articlesPageNumber}&RowsOfPage=3`);

  const { data, isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  if (isLoading) {
    return (
      <BeatLoader
        color="#2196F3"
        className="flex justify-center mt-10"
        size={20}
      />
    );
  }

  if (error) {
    return <span>خطا در دریافت اطلاعات</span>;
  }

  return (
    <>
      {data.data.news.length !== 0 ? (
        <>
          <div className="w-full flex flex-col items-center mt-[100px]">
            <SectionsTitle name="اخبار و مقالات" />

            <div className="mt-[40px] w-full flex flex-col gap-16 lg:gap-0 lg:flex-row justify-center items-center">
              <div className="w-1/2 hover:scale-[1.03] cursor-pointer duration-200 h-full flex flex-col gap-5 justify-between items-center px-2">
                <div className="w-full lg:w-[80%] rounded-[25px] overflow-hidden">
                  <img
                    src={
                      data.data.news[0].currentImageAddressTumb ||
                      "/src/components/Landing/Objects/photo.png"
                    }
                    className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-[80%] break-words">
                  <div className="flex flex-row items-center gap-4 justify-start sm:flex-row text-primary">
                    <span className="hidden sm:flex items-center gap-1 bg-[#bddcf6] rounded-xl text-center justify-center py-1 px-4">
                      <MdOutlineRemoveRedEye size={20} />
                      {data.data.news[0].currentView}
                    </span>

                    <span className="hidden sm:flex items-center gap-1 justify-center bg-[#bddcf6] rounded-xl py-1 px-4">
                      <IoCalendarOutline size={20} />
                      {data.data.news[0].updateDate.slice(0, 10)}
                    </span>
                  </div>
                  <h3 className="text-[32px] mt-[6px]">
                    {data.data.news[0].title}
                  </h3>
                  <p className="text-[16px]">
                    {data.data.news[0].miniDescribe}
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-[30px]">
                {data.data.news.map((article) => (
                  <NewsCard key={article.id} {...article} />
                ))}
              </div>
            </div>
            <Button
              onPress={() => {
                navigate("/articles");
              }}
              radius="full"
              size="lg"
              color="primary"
              className="inline-block mt-[40px]"
            >
              مشاهده همه
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default LandingNews;
