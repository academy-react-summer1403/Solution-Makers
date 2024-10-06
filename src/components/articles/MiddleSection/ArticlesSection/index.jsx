import axios from "axios";
import ArticleCard from "../../../common/ArticleCard";
import { baseApi } from "../../../../config";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";

function ArticlesList() {
  const fetchArticles = () =>
    axios.get(
      `${baseApi}News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC`
    );

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetchArticles(),
  });

  console.log(data?.data.news);

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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {data?.data.news.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
}

export default ArticlesList;
