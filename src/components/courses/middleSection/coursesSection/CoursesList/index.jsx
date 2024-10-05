import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import ColumnCourseCard from "../../../../common/ColumnCourseCard";
import RowCourseCard from "../../../../common/RowCourseCard";
import { AppContext } from "../../../../../context/Provider";
import ColumnCourseCardSkeleton from "../../../../common/ColumnCourseCard/Skeleton";
import { baseApi } from "../../../../../config/index";

function CoursesList() {
  const {
    reFetch,
    setReFetch,
    pageNumber,
    setPageNumber,
    rowsOfPage,
    setRowsOfPage,
    courseLevelId,
    courseTypeId,
    teacherId,
    listTech,
    techCount,
    query,
    costDown,
    costUp,
  } = useContext(AppContext);

  const fetchCourses = () =>
    axios.get(
      `${baseApi}Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${rowsOfPage}${
        courseLevelId ? `&courseLevelId=${courseLevelId}` : ""
      }${courseTypeId ? `&CourseTypeId=${courseTypeId}` : ""}${
        teacherId ? `&TeacherId=${teacherId}` : ""
      }${listTech.length > 0 ? `&ListTech=${listTech.join(",")}` : ""}${
        techCount ? `&TechCount=${String(techCount)}` : ""
      }${query ? `&Query=${query}` : ""}${
        costDown ? `&CostDown=${costDown}` : ""
      }${costUp ? `&CostUp=${costUp}` : ""}`
    );

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["courses", pageNumber],
    queryFn: () => fetchCourses(),
  });

  useEffect(() => {
    if (
      data &&
      rowsOfPage == 9 &&
      pageNumber > Math.ceil(data.data.totalCount / rowsOfPage)
    ) {
      setPageNumber(Math.ceil(data.data.totalCount / rowsOfPage));
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
    query,
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
            ? "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4"
            : "flex flex-col gap-6"
        }`}
      >
        {isLoading ? (
          new Array(9)
            .fill(0)
            .map((item, index) => <ColumnCourseCardSkeleton key={index} />)
        ) : (
          <>
            {rowsOfPage == 9
              ? data.data.courseFilterDtos.map((course) => (
                  <ColumnCourseCard {...course} key={course.courseId} />
                ))
              : data.data.courseFilterDtos.map((course) => (
                  <RowCourseCard {...course} key={course.courseId} />
                ))}
          </>
        )}
      </div>
      {data?.data.courseFilterDtos.length > 0 && (
        <Pagination
          style={{ direction: "ltr" }}
          className="mt-8"
          classNames={{
            base: "flex justify-center",
            item: "rounded-full mx-1 bg-white",
            prev: "bg-white",
            next: "bg-white",
            cursor: "bg-primary rounded-full",
          }}
          total={Math.ceil(data.data.totalCount / rowsOfPage)}
          page={pageNumber}
          showControls
          onChange={(number) => {
            setPageNumber(number);
            scrollTo({ top: 560, behavior: "smooth" });
          }}
        />
      )}
    </>
  );
}

export default CoursesList;
