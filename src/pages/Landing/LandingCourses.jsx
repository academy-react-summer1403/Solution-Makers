import { baseApi } from "../../config";
import axios from "axios";
// import ServicesCard from "./Objects/ServicesCard";
import SectionsTitle from "./Objects/SectionsTitle";
import { AppContext } from "../../context/Provider";
import {
  useContext,
  useEffect,
} from "react";
import ColumnCourseCardSkeleton from "../../components/common/courseCard/ColumnCourseCard/Skeleton";
import ColumnCourseCard from "../../components/common/courseCard/ColumnCourseCard";
import { useQuery } from "@tanstack/react-query";
// import ColumnCourseCard from "../../components/common/courseCard/ColumnCourseCard";
// import SectionsTitle from "./Objects/SectionsTitle";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const LandingCourses = () => {
  const navigate = useNavigate();
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
      `${baseApi}/Home/GetCoursesWithPagination?PageNumber=${coursesPageNumber}&RowsOfPage=4${
        courseLevelId
          ? `&courseLevelId=${courseLevelId}`
          : ""
      }${
        courseTypeId
          ? `&CourseTypeId=${courseTypeId}`
          : ""
      }${
        teacherId
          ? `&TeacherId=${teacherId}`
          : ""
      }${
        listTech.length > 0
          ? `&ListTech=${listTech.join(
              ","
            )}`
          : ""
      }${
        techCount
          ? `&TechCount=${String(
              techCount
            )}`
          : ""
      }${
        coursesSortingCol
          ? `&SortingCol=${coursesSortingCol}`
          : ""
      }${
        coursesQuery
          ? `&Query=${coursesQuery}`
          : ""
      }${
        coursesSortType == "DESC"
          ? "&SortType=DESC"
          : "&SortType=ASC"
      }${
        costDown
          ? `&CostDown=${costDown}`
          : ""
      }${
        costUp
          ? `&CostUp=${costUp}`
          : ""
      }`
    );

  const {
    data,
    isLoading,
    error,
    // refetch,
  } = useQuery({
    queryKey: [
      "courses",
      coursesPageNumber,
    ],
    queryFn: () => fetchCourses(),
  });

  // useEffect(() => {
  //   if (
  //     data &&
  //     rowsOfPage == 4 &&
  //     coursesPageNumber >
  //       Math.ceil(
  //         data.data.totalCount /
  //           rowsOfPage
  //       )
  //   ) {
  //     setCoursesPageNumber(
  //       Math.ceil(
  //         data.data.totalCount /
  //           rowsOfPage
  //       )
  //     );
  //   }
  //   reFetch && refetch();
  //   setReFetch(false);
  // }, [
  //   rowsOfPage,
  //   courseLevelId,
  //   courseTypeId,
  //   teacherId,
  //   listTech,
  //   techCount,
  //   coursesQuery,
  //   costDown,
  //   costUp,
  //   reFetch,
  // ]);

  if (error) {
    return (
      <p className="text-lg mt-8 ps-4">
        دریافت اطلاعات با خطا مواجه
        گردید !
      </p>
    );
  }

  return (
    <>
      {/*******faahfjsgfjgjhfgjsagfgjjhsfjhb********* */}

      <div className=" w-full mt-[70px] flex flex-col justify-between items-center ">
        <SectionsTitle name="دوره های آموزشی" />

        <div>
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-4 mt-[45px] ">
              {isLoading ? (
                new Array(9)
                  .fill(0)
                  .map(
                    (item, index) => (
                      <ColumnCourseCardSkeleton
                        key={index}
                      />
                    )
                  )
              ) : (
                <>
                  {data.data
                    .courseFilterDtos
                    .length != 0 ? (
                    <>
                      {data.data.courseFilterDtos.map(
                        (course) => (
                          <ColumnCourseCard
                            {...course}
                            key={
                              course.courseId
                            }
                          />
                        )
                      )}
                    </>
                  ) : (
                    <p className="text-xl p-4">
                      دوره ای یافت نشد
                    </p>
                  )}
                </>
              )}
            </div>
          </>
        </div>
        <Button
          onPress={() => {
            navigate("/courses");
          }}
          radius="full"
          size="lg"
          color="primary"
          className="hidden md:inline-block mt-[40px] "
        >
          مشاهده همه
        </Button>
      </div>
    </>
  );
};

export default LandingCourses;
