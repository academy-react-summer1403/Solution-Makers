import toast from "react-hot-toast";
import instance from "../../../services/middleware";

export const fetchUserCourses = (page, query) =>
  instance.get(
    `/SharePanel/GetMyCourses?PageNumber=${page}&RowsOfPage=3&SortingCol=DESC&SortType=LastUpdate${
      query ? `&Query=${query}` : ""
    }`
  );

export const fetchUserFavoriteCourses = () =>
  instance.get("/SharePanel/GetMyFavoriteCourses");

export const fetchUserReserveCourses = () =>
  instance.get("/SharePanel/GetMyCoursesReserve");

export const deleteCourseReserve = (id) => {
  return toast.promise(
    instance.delete("/CourseReserve", {
      data: {
        id,
      },
    }),
    {
      loading: "در حال پردازش",
      success: "دوره از لیست رزرو شده ها حذف شد",
      error: "خطایی رخ داد",
    }
  );
};
