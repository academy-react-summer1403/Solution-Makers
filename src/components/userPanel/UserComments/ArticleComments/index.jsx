import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { fetchUserArticleComments } from "../../../../core/api/userPanel/Comments";
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
import { TfiMoreAlt } from "react-icons/tfi";

function ArticleComments({ setComment, onOpen }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const { data, isLoading, error } = useQuery({
    queryKey: ["myArticleComments"],
    queryFn: () => fetchUserArticleComments(),
  });

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data?.data.myNewsCommetDtos
      .sort(
        (a, b) =>
          new Date(a.insertDate).getTime() - new Date(b.insertDate).getTime()
      )
      .reverse()
      .slice(start, end);
  }, [page, data?.data.myNewsCommetDtos]);

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
    return <p className="text-xl font-bold m-5 px-10">خطا در دریافت اطلاعات</p>;
  }

  return (
    <div className="px-10">
      {data.data.myNewsCommetDtos.length > 0 ? (
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
                  data.data.myNewsCommetDtos.length / rowsPerPage
                )}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn align="center" key="title">
              عنوان نظر
            </TableColumn>
            <TableColumn align="center" key="courseTitle">
              نام مقاله
            </TableColumn>
            <TableColumn align="center" key="replyCount">
              تعداد پاسخ ها
            </TableColumn>

            <TableColumn align="center" key="submitDate">
              تاریخ ثبت
            </TableColumn>

            <TableColumn align="center" key="status">
              وضعیت
            </TableColumn>

            <TableColumn align="center" key="details">
              نمایش جزئیات
            </TableColumn>
          </TableHeader>
          <TableBody
            items={items.map((item) => ({
              ...item,
              submitDate: <span>{item.insertDate.slice(0, 10)}</span>,
              status: (
                <span>{item.accept ? "تایید شده" : "در انتظار تایید"}</span>
              ),
              details: (
                <span
                  className="inline-flex items-center justify-center p-2 cursor-pointer"
                  onClick={() => {
                    setComment(item);
                    onOpen();
                  }}
                >
                  <TfiMoreAlt />
                </span>
              ),
            }))}
          >
            {(item) => (
              <TableRow key={item.commentId}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <p className="text-lg">هنوز برای مقاله ای کامنتی ثبت نکردید</p>
      )}
    </div>
  );
}

export default ArticleComments;
