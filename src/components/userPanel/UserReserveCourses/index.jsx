import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import {
  fetchUserReserveCourses,
  deleteCourseReserve,
} from "../../../core/api/userPanel/Courses";
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

function UserReserveCourses() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userReserveCourses"],
    queryFn: () => fetchUserReserveCourses(),
  });

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data?.data
      .sort(
        (a, b) =>
          new Date(a.reserverDate).getTime() -
          new Date(b.reserverDate).getTime()
      )
      .reverse()
      .slice(start, end);
  }, [page, data?.data]);

  if (error) {
    return <p className="text-xl font-bold m-5">خطا در دریافت اطلاعات</p>;
  }

  if (isLoading) {
    return (
      <BeatLoader
        color="#2196F3"
        className="flex justify-center mt-10"
        size={20}
      />
    );
  }

  return (
    <div className="px-10">
      {data.data.length > 0 ? (
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
                total={Math.ceil(data.data.length / rowsPerPage)}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn align="center" key="courseName">
              نام دوره
            </TableColumn>
            <TableColumn align="center" key="submitDate">
              تاریخ درخواست
            </TableColumn>
            <TableColumn align="center" key="status">
              وضعیت تایید
            </TableColumn>
            <TableColumn align="center" key="remove">
              حذف
            </TableColumn>
          </TableHeader>
          <TableBody
            items={items.map((item) => ({
              ...item,
              submitDate: <span>{item.reserverDate.slice(0, 10)}</span>,
              status: (
                <span>{item.accept ? "تایید شده" : "در انتظار تایید"}</span>
              ),
              remove: (
                <>
                  {item.accept == false && (
                    <span
                      className="inline-flex items-center justify-center p-2 cursor-pointer"
                      onClick={() => {
                        deleteCourseReserve(item.reserveId).then(() =>
                          refetch()
                        );
                      }}
                    >
                      <BsTrash size={22} color="#E4125B" />
                    </span>
                  )}
                </>
              ),
            }))}
          >
            {(item) => (
              <TableRow key={item.reserveId}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <p className="text-lg">هنوز دوره ای رزرو نکردید</p>
      )}
    </div>
  );
}

export default UserReserveCourses;
