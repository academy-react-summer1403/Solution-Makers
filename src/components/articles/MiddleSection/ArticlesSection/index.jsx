import ArticleCard from "../../../common/ArticleCard";
import { baseApi } from "../../../../config";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { Pagination } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/Provider";
import instance from "../../../../core/services/middleware";
import toast from "react-hot-toast";

function ArticlesList() {
  const {
    articlesPageNumber,
    setArticlesPageNumber,
    rowsOfPage,
    reFetch,
    setReFetch,
    articlesQuery,
    articlesSortingCol,
  } = useContext(AppContext);

  const fetchArticles = () =>
    instance.get(
      `${baseApi}/News?PageNumber=${articlesPageNumber}&RowsOfPage=9${
        articlesSortingCol ? `&SortingCol=${articlesSortingCol}` : ""
      }&SortType=DESC${articlesQuery ? `&Query=${articlesQuery}` : ""}`
    );

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  useEffect(() => {
    reFetch && refetch();
    setReFetch(false);
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

  useEffect(() => {
    toast.remove();
  }, []);

  return (
    <>
      {data.data.news.length != 0 ? (
        <>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data?.data.news.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          {data?.data.news.length > 0 && (
            <Pagination
              style={{ direction: "ltr" }}
              className="mt-8"
              classNames={{
                base: "flex justify-center",
                item: "rounded-full mx-1 bg-white dark:bg-dark-100",
                prev: "bg-white dark:bg-dark-100",
                next: "bg-white dark:bg-dark-100",
                cursor: "bg-primary rounded-full",
              }}
              total={Math.ceil(data.data.totalCount / rowsOfPage)}
              page={articlesPageNumber}
              showControls
              onChange={(number) => {
                setReFetch(true);
                setArticlesPageNumber(number);
                scrollTo({ top: 560, behavior: "smooth" });
              }}
            />
          )}
        </>
      ) : (
        <p className="text-xl">مقاله ای یافت نشد</p>
      )}
    </>
  );
}

export default ArticlesList;
