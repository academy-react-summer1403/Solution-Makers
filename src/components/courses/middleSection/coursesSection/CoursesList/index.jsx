import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import ColumnCourseCard from "../../../../common/courseCard/ColumnCourseCard";
import RowCourseCard from "../../../../common/courseCard/RowCourseCard";
import { AppContext } from "../../../../../context/Provider";
import ColumnCourseCardSkeleton from "../../../../common/courseCard/ColumnCourseCard/Skeleton";
import { baseApi } from "../../../../../config/index";

function CoursesList() {
  const {
    reFetch,
    setReFetch,
    coursesPageNumber,
    setCoursesPageNumber,
    rowsOfPage,
    courseLevelId,
    courseTypeId,
    teacherId,
    listTech,
    techCount,
    coursesQuery,
    coursesSortingCol,
    coursesSortType,
    costDown,
    costUp,
  } = useContext(AppContext);

  const fetchCourses = () =>
    axios.get(
      `${baseApi}/Home/GetCoursesWithPagination?PageNumber=${coursesPageNumber}&RowsOfPage=${rowsOfPage}${
        courseLevelId ? `&courseLevelId=${courseLevelId}` : ""
      }${courseTypeId ? `&CourseTypeId=${courseTypeId}` : ""}${
        teacherId ? `&TeacherId=${teacherId}` : ""
      }${listTech.length > 0 ? `&ListTech=${listTech.join(",")}` : ""}${
        techCount ? `&TechCount=${String(techCount)}` : ""
      }${coursesSortingCol ? `&SortingCol=${coursesSortingCol}` : ""}${
        coursesQuery ? `&Query=${coursesQuery}` : ""
      }${coursesSortType == "DESC" ? "&SortType=DESC" : "&SortType=ASC"}${
        costDown ? `&CostDown=${costDown}` : ""
      }${costUp ? `&CostUp=${costUp}` : ""}`
    );

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["courses", coursesPageNumber],
    queryFn: () => fetchCourses(),
  });

  useEffect(() => {
    if (
      data &&
      rowsOfPage == 9 &&
      coursesPageNumber > Math.ceil(data.data.totalCount / rowsOfPage)
    ) {
      setCoursesPageNumber(Math.ceil(data.data.totalCount / rowsOfPage));
    }
    reFetch && refetch();
    setReFetch(false);
  }, [
    rowsOfPage,
    courseLevelId,
    courseTypeId,
    teacherId,
    listTech,
    techCount,
    coursesQuery,
    costDown,
    costUp,
    reFetch,
  ]);

  if (error) {
    return (
      <p className="text-lg mt-8 ps-4">دریافت اطلاعات با خطا مواجه گردید !</p>
    );
  }

  return (
    <>
      <div
        className={`${
          rowsOfPage == 9
            ? "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4 mt-4"
            : "flex flex-col gap-2"
        }`}
      >
        {isLoading ? (
          new Array(9)
            .fill(0)
            .map((item, index) => <ColumnCourseCardSkeleton key={index} />)
        ) : (
          <>
            {data.data.courseFilterDtos.length != 0 ? (
              <>
                {rowsOfPage == 9
                  ? data.data.courseFilterDtos.map((course) => (
                      <ColumnCourseCard {...course} key={course.courseId} />
                    ))
                  : data.data.courseFilterDtos.map((course) => (
                      <RowCourseCard {...course} key={course.courseId} />
                    ))}
              </>
            ) : (
              <p className="text-xl p-4">دوره ای یافت نشد</p>
            )}
          </>
        )}
      </div>
      {data?.data.courseFilterDtos.length > 0 && (
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
          page={coursesPageNumber}
          showControls
          onChange={(number) => {
            setReFetch(true);
            setCoursesPageNumber(number);
            scrollTo({ top: 560, behavior: "smooth" });
          }}
        />
      )}
    </>
  );
}

export default CoursesList;
