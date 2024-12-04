import ArticleCard from "../../../common/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/Provider";
import { fetchArticles } from "../../../../core/api/app/Articles";
import ArticleCardSkeleton from "../../../common/ArticleCard/Skeleton";

function ArticlesList() {
  const {
    articlesPageNumber,
    setArticlesPageNumber,
    rowsOfPage,
    reFetch,
    setReFetch,
    articlesQuery,
    articlesSortingCol,
    articlesCategory
  } = useContext(AppContext);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: () =>
      fetchArticles(articlesPageNumber, articlesSortingCol, articlesQuery, articlesCategory),
  });

  useEffect(() => {
    reFetch && refetch();
    setReFetch(false);
  }, [articlesQuery, reFetch]);

  if (error) {
    return <span className="text-lg">دریافت اطلاعات با خطا مواجه گردید</span>;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {new Array(9).fill(0).map((item, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </div>
    );
  }

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
              style={{
                direction: "ltr",
              }}
              className="mt-8"
              classNames={{
                base: "flex justify-center",
                item: "rounded-full mx-1 dark:bg-dark-100",
                prev: "dark:bg-dark-100",
                next: "dark:bg-dark-100",
                cursor: "bg-primary rounded-full",
              }}
              total={Math.ceil(data.data.totalCount / rowsOfPage)}
              page={articlesPageNumber}
              showControls
              onChange={(number) => {
                setReFetch(true);
                setArticlesPageNumber(number);
                scrollTo({
                  top: 560,
                  behavior: "smooth",
                });
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
