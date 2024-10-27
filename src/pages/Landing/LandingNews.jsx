/* eslint-disable no-undef */
// import React from "react";
import {
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { baseApi } from "../../config";
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
  const {
    articlesPageNumber,
    // setArticlesPageNumber,
    // rowsOfPage,
    reFetch,
    setReFetch,
    articlesQuery,
    articlesSortingCol,
  } = useContext(AppContext);
  const fetchArticles = () =>
    axios.get(
      `${baseApi}/News?PageNumber=${articlesPageNumber}&RowsOfPage=3${
        articlesSortingCol
          ? `&SortingCol=${articlesSortingCol}`
          : ""
      }&SortType=DESC${
        articlesQuery
          ? `&Query=${articlesQuery}`
          : ""
      }`
    );

  // eslint-disable-next-line no-unused-vars
  const {
    data,
    isLoading,
    // error,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });
  console.log(data);

  useEffect(() => {
    reFetch && refetch();
    setReFetch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articlesQuery, reFetch]);

  if (isLoading) {
    return (
      <BeatLoader
        color="#2196F3"
        className="flex justify-center mt-10"
        size={20}
      />
    );
  }

  return (
    <>
      {data.data.news.length !== 0 ? (
        <>
          <div className=" w-full flex flex-col items-center mt-[100px] ">
            <SectionsTitle name="اخبار و مقالات " />

            <div className=" mt-[40px] w-full h-[556px] flex flex-nowrap justify-between ">
              <div className=" hover:scale-[1.03] cursor-pointer duration-200   w-[624px] h-full flex flex-col flex-nowrap justify-between  ">
                <div className="  w-[616px] h-[340px] ">
                  <img
                    src="/src/pages/Landing/Objects/photo.png"
                    className=" w-full h-full "
                  />
                </div>
                <div className=" flex flex-col justify-between w-[616px]   ">
                  {" "}
                  <div className="flex flex-row items-center gap-4 justify-start sm:flex-row text-primary">
                    <span className="flex items-center gap-1 bg-[#bddcf6] rounded-full text-center justify-center h-[40px] w-[102px] ">
                      <MdOutlineRemoveRedEye
                        size={20}
                      />
                      122
                    </span>

                    <span className="flex items-center gap-1 justify-center bg-[#bddcf6] rounded-full h-[40px] w-[111px] ">
                      <IoCalendarOutline
                        size={20}
                      />
                      1254
                    </span>
                  </div>
                  <h1 className=" text-[32px] mt-[6px] ">
                    چگونه مطالعه موثر را
                    برای شما آسانتر
                    کنیم.
                  </h1>
                  <p className=" text-[16px] ">
                    لورم ایپسوم متن
                    ساختگی با تولید
                    سادگی نامفهوم از
                    صنعت چاپ و با
                    استفاده از طراحان
                    گرافیک است چاپگرها و
                    متون بلکه روزنامه و
                    مجله در ستون و
                    سطرآنچنان که لازم
                    است و برای شرایط
                    فعلی تکنولوژی مورد.s
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-[30px] pr-[10px] ">
                {data?.data.news.map(
                  (article) => (
                    <NewsCard
                      key={article.id}
                      {...article}
                    />
                  )
                )}
              </div>
            </div>
            <Button
              onPress={() => {
                navigate("/articles");
              }}
              radius="full"
              size="lg"
              color="primary"
              className="hidden md:inline-block mt-[40px] "
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
