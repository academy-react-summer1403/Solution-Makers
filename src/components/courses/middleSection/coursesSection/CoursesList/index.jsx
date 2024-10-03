import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@nextui-org/react";
import axios from "axios";
import ColumnCourseCard from "../../../../common/ColumnCourseCard";
import RowCourseCard from "../../../../common/RowCourseCard";
import { AppContext } from "../../../../../context/Provider";

const fetchCourses = (pageNumber, RowsOfPage) =>
  axios.get(
    `https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${RowsOfPage}&SortingCol=Active&SortType=DESC&TechCount=0`
  );

function CoursesList() {
  const { coursesShowStatus } = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfPage, setRowsOfPage] = useState(9);

  const { data, isLoading, error, isError, isFetching, refetch } = useQuery({
    queryKey: ["courses", pageNumber],
    queryFn: () => fetchCourses(pageNumber, rowsOfPage),
  });

  useEffect(() => {
    setRowsOfPage(coursesShowStatus == "column" ? 9 : 5);
    setPageNumber(1);
    refetch();
  }, [coursesShowStatus, rowsOfPage]);

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
        total={Math.ceil(data.data.totalCount / rowsOfPage)}
        page={pageNumber}
        showControls
        onChange={(number) => setPageNumber(number)}
      />
    </>
  );
}

export default CoursesList;
