import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Image,
  Input,
} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { fetchUserCourses } from "../../../core/api/userPanel/Courses";
import { useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { RiSearch2Fill } from "react-icons/ri";
import { AppContext } from "../../../context/Provider";

const columns = [
  "تصویر",
  "نام دوره",
  "مدرس",
  "نوع دوره",
  "سطح دوره",
  "نام ترم",
  "آخرین بروزرسانی",
  "قیمت",
  "وضعیت پرداخت",
  "مشاهده",
];

function UserCourses() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(undefined);
  const { setUserNavTitle } = useContext(AppContext);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userCourses", page],
    queryFn: () => fetchUserCourses(page, query),
  });

  useEffect(() => {
    refetch();
  }, [query]);

  useEffect(() => {
    setUserNavTitle("دوره‌های من");
  }, []);

  const pages = useMemo(() => {
    return data?.data ? Math.ceil(data?.data.totalCount / 3) : 0;
  }, [data?.data]);

  if (error) {
    return <p className="text-lg m-4">خطا در دریافت اطلاعات</p>;
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
    <div className="flex flex-col gap-5 mt-8 px-10">
      <Input
        placeholder="جستجوی دوره ...."
        aria-label="searchKey"
        value={query}
        onValueChange={setQuery}
        endContent={
          <span className="p-1">
            <RiSearch2Fill size={25} className="text-primary mx-2" />
          </span>
        }
        size="lg"
        classNames={{
          base: "max-w-[500px]",
          inputWrapper:
            "bg-white px-2 h-14 dark:bg-dark-100 border-2 border-primary dark:border-white",
        }}
      />
      {data.data.listOfMyCourses.length > 0 ? (
        <Table
          aria-label="pagination"
          classNames={{
            wrapper: "dark:bg-dark-200 dark:border",
            th: "bg-primary dark:bg-dark-100 text-white text-small md:text-medium",
            td: "py-3 text-small lg:text-medium",
          }}
          bottomContent={
            pages > 0 ? (
              <div className="flex w-full justify-center">
                <Pagination
                  style={{ direction: "ltr" }}
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            ) : null
          }
        >
          <TableHeader>
            {columns.map((text, index) => (
              <TableColumn key={index} align="center">
                {text}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody items={data.data.listOfMyCourses}>
            {data.data.listOfMyCourses.map((item) => (
              <TableRow key={item.courseId}>
                <TableCell>
                  <Image src={item.tumbImageAddress} width={100} height={70} />
                </TableCell>
                <TableCell>{item.courseTitle}</TableCell>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.typeName}</TableCell>
                <TableCell>{item.levelName}</TableCell>
                <TableCell>{item.termName}</TableCell>
                <TableCell>{item.lastUpdate.slice(0, 10)}</TableCell>
                <TableCell>{item.cost.slice(0, -3)} تومان</TableCell>
                <TableCell>{item.paymentStatus}</TableCell>
                <TableCell className="ps-5">
                  <Link to={`/courses/${item.courseId}`}>
                    <FaEye size={25} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-2xl m-4">دوره ای یافت نشد</p>
      )}
    </div>
  );
}

export default UserCourses;
