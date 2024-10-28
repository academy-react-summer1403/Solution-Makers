import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";
import UserDetails from "./UserDetails";
import UserIndexFavCourses from "./UserIndexFavCourses";
import UserIndexFavArticles from "./UserIndexFavArticles";
import UserIndexCoursesComments from "./UserIndexCoursesComments";
import UserIndexArticlesComments from "./UserIndexArticleComments";
import "swiper/css";

function UserIndex() {
  const { setUserNavTitle } = useContext(AppContext);

  useEffect(() => {
    setUserNavTitle("پیشخوان");
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <UserDetails />
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 px-10 py-5">
        <UserIndexFavCourses />
        <UserIndexFavArticles />
        <UserIndexCoursesComments />
        <UserIndexArticlesComments />
      </div>
    </div>
  );
}

export default UserIndex;
