import instance from "../../../services/middleware";

export const fetchUserCoursesComments = () =>
  instance.get("/SharePanel/GetMyCoursesComments");

export const fetchUserArticleComments = () =>
  instance.get("/SharePanel/GetMyNewsComments");
