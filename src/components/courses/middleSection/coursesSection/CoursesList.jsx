import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import ColumnCourseCard from "../../../common/ColumnCourseCard";
import RowCourseCard from "../../../common/RowCourseCard";
import { AppContext } from "../../../../context/Provider";

const fetchCourses = (pageNumber, RowsOfPage) =>
  axios.get(
    `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${RowsOfPage}&SortingCol=Active&SortType=DESC&TechCount=0`
  );

function CoursesList() {
  const { coursesShowStatus } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [coursesCountInEachPage, setCoursesCountInEachPage] = useState(9);

  const { data, isLoading, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["courses", page],
    queryFn: () => fetchCourses(page, coursesCountInEachPage),
  });

  useEffect(() => {
    setCoursesCountInEachPage(coursesShowStatus == "column" ? 9 : 5);
    setPage(1);
    refetch();
  }, [coursesShowStatus, coursesCountInEachPage]);

  if (isLoading) {
    return <div className="text-xl p-4">در حال دریافت اطلاعات</div>;
  }

  return (
    <>
      <div
        className={`${
          coursesShowStatus == "column"
            ? "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-4"
            : "flex flex-col gap-6"
        }`}
      >
        {coursesShowStatus == "column"
          ? data.data.courseFilterDtos.map((course) => (
              <ColumnCourseCard {...course} key={course.courseId} />
            ))
          : data.data.courseFilterDtos.map((course) => (
              <RowCourseCard {...course} key={course.courseId} />
            ))}
      </div>
      <Pagination
        style={{ direction: "ltr" }}
        className="mt-4"
        classNames={{
          base: "flex justify-center",
          item: "rounded-full mx-1",
          cursor: "bg-primary rounded-full",
        }}
        total={Math.ceil(data.data.totalCount / coursesCountInEachPage)}
        page={page}
        showControls
        onChange={(number) => setPage(number)}
      />
    </>
  );
}

export default CoursesList;
