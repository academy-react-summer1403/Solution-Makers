import { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "../../../../../core/api/app/Courses";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
} from "@nextui-org/react";
import ColumnCourseCard from "../../../../common/courseCard/ColumnCourseCard";
import RowCourseCard from "../../../../common/courseCard/RowCourseCard";
import { AppContext } from "../../../../../context/Provider";
import ColumnCourseCardSkeleton from "../../../../common/courseCard/ColumnCourseCard/Skeleton";

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
    comparisonIds,
  } = useContext(AppContext);

  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["courses", coursesPageNumber],
    queryFn: () =>
      fetchCourses(
        coursesPageNumber,
        rowsOfPage,
        courseLevelId,
        courseTypeId,
        teacherId,
        listTech,
        techCount,
        coursesSortingCol,
        coursesQuery,
        coursesSortType,
        costDown,
        costUp
      ),
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

  useEffect(() => {
    console.log(comparisonIds);
    if (comparisonIds.length == 2) {
      setIsCompareModalOpen(true);
    }
  }, [comparisonIds]);

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
                      <ColumnCourseCard
                        {...course}
                        key={course.courseId}
                        refetch={refetch}
                      />
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
            item: "rounded-full mx-1 dark:bg-dark-100",
            prev: "dark:bg-dark-100",
            next: "dark:bg-dark-100",
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
      <Modal
        isOpen={isCompareModalOpen}
        onOpenChange={() => setIsCompareModalOpen(false)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                مقایسه دو دوره
              </ModalHeader>
              <ModalBody>
                <p className="text-xl">
                  میخوای این دو دوره رو با هم مقایسه کنی ؟
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-lg"
                  color="primary"
                  onPress={() => {
                    setIsCompareModalOpen(false);
                    //  با زدن دکمه بله کاربر ریدایرکت میشه به صفحه مقایسه دوره ها
                  }}
                >
                  بله
                </Button>
                <Button
                  className="text-lg"
                  color="danger"
                  onPress={() => setIsCompareModalOpen(false)}
                >
                  خیر
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CoursesList;
