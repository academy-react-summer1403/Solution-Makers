import instance from "../../../services/middleware";

export const fetchUserFavoriteArticles = () =>
  instance.get("/SharePanel/GetMyFavoriteNews");
