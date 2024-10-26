import instance from "../../../services/middleware";

export const fetchCourses = (
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
) =>
  instance.get(
    `/Home/GetCoursesWithPagination?PageNumber=${coursesPageNumber}&RowsOfPage=${rowsOfPage}${
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
