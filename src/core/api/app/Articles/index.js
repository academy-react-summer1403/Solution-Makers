import axios from "axios";
import instance from "../../../services/middleware";

export const fetchArticles = (
  articlesPageNumber,
  articlesSortingCol,
  articlesQuery,
  articlesCategory
) =>
  instance.get(
    `/News?PageNumber=${articlesPageNumber}&RowsOfPage=9${
      articlesSortingCol ? `&SortingCol=${articlesSortingCol}` : ""
    }&SortType=DESC${articlesQuery ? `&Query=${articlesQuery}` : ""}${
      articlesCategory ? `&NewsCategoryId=${articlesCategory}` : ""
    }`
  );

export const getArticlesCategoriesList = () =>
  axios.get("/News/GetListNewsCategory");
