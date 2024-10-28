import instance from "../../../services/middleware";

export const fetchArticles = (
  articlesPageNumber,
  articlesSortingCol,
  articlesQuery
) =>
  instance.get(
    `/News?PageNumber=${articlesPageNumber}&RowsOfPage=9${
      articlesSortingCol ? `&SortingCol=${articlesSortingCol}` : ""
    }&SortType=DESC${articlesQuery ? `&Query=${articlesQuery}` : ""}`
  );
