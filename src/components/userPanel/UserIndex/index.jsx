import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";
import UserDetails from "./UserDetails";
import UserIndexFavCourses from "./UserIndexFavCourses";
import 'swiper/css';
import UserIndexFavArticles from "./UserIndexFavArticles";



function UserIndex() {
  const { setUserNavTitle } = useContext(AppContext);

  

  useEffect(() => {
    setUserNavTitle("پیشخوان");
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <UserDetails />
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 px-10 py-5">
        
      <UserIndexFavCourses />
      <UserIndexFavArticles />

      </div>
    </div>
  );
}

export default UserIndex;
