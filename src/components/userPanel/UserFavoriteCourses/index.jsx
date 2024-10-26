import { useQuery } from "@tanstack/react-query";
import { fetchUserFavoriteCourses } from "../../../core/api/userPanel/Courses";
import { removeCourseFromFavorites } from "../../../core/api/app/CourseDetails";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { BsTrash } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { AppContext } from "../../../context/Provider";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function UserFavoriteCourses() {
  const { setUserNavTitle } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["favCourses"],
    queryFn: () => fetchUserFavoriteCourses(),
  });

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data?.data.favoriteCourseDto.slice(start, end);
  }, [page, data?.data.favoriteCourseDto]);

  useEffect(() => {
    setUserNavTitle("دوره های مورد علاقه");
  }, []);

  if (isLoading) {
    return (
      <BeatLoader
        color="#2196F3"
        className="flex justify-center mt-10"
        size={20}
      />
    );
  }

  if (error) {
    return <p className="text-xl font-bold m-5">خطا در دریافت اطلاعات</p>;
  }

  return (
    <div className="mt-16 px-10">
      {data.data.favoriteCourseDto.length > 0 ? (
        <Table
          aria-label="Example table with client side pagination"
          classNames={{
            wrapper: "dark:bg-dark-200 dark:border",
            th: "bg-primary dark:bg-dark-100 text-white text-small md:text-medium",
            td: "py-3 text-small lg:text-medium",
          }}
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                style={{ direction: "ltr" }}
                classNames={{
                  base: "flex justify-center",
                }}
                showControls
                showShadow
                color="primary"
                page={page}
                total={Math.ceil(
                  data?.data.favoriteCourseDto.length / rowsPerPage
                )}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn align="center" key="courseTitle">
              نام دوره
            </TableColumn>
            <TableColumn align="center" key="teacheName">
              مدرس
            </TableColumn>
            <TableColumn align="center" key="typeName">
              نوع دوره
            </TableColumn>
            <TableColumn align="center" key="levelName">
              سطح دوره
            </TableColumn>
            <TableColumn align="center" key="watch">
              مشاهده جزئیات دوره
            </TableColumn>
            <TableColumn align="center" key="delete">
              حذف دوره
            </TableColumn>
          </TableHeader>
          <TableBody
            items={items.map((item) => ({
              ...item,
              watch: (
                <Link
                  to={`/courses/${item.courseId}`}
                  className="inline-flex items-center justify-center p-1 cursor-pointer"
                >
                  <FaEye size={22} />
                </Link>
              ),
              delete: (
                <span
                  className="inline-flex items-center justify-center p-1 cursor-pointer"
                  onClick={() =>
                    removeCourseFromFavorites(item.favoriteId).then(() =>
                      refetch()
                    )
                  }
                >
                  <BsTrash size={22} color="#E4125B" />
                </span>
              ),
            }))}
          >
            {(item) => (
              <TableRow key={item.courseId}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <p className="text-lg">هنوز دوره ای به لیست علاقمندی ها اضافه نشد</p>
      )}
    </div>
  );
}

export default UserFavoriteCourses;
