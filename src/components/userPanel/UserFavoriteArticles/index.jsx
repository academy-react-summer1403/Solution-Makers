import { useQuery } from "@tanstack/react-query";
import { fetchUserFavoriteArticles } from "../../../core/api/userPanel/Articles";
import { removeArticleFromFavorites } from "../../../core/api/app/ArticleDetails";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../../context/Provider";
import { BeatLoader } from "react-spinners";
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
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserFavoriteArticles() {
  const { setUserNavTitle } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["favArticles"],
    queryFn: () => fetchUserFavoriteArticles(),
  });

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data?.data.myFavoriteNews.slice(start, end);
  }, [page, data?.data.myFavoriteNews]);

  useEffect(() => {
    setUserNavTitle("مقاله های های مورد علاقه");
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
      {data.data.myFavoriteNews.length > 0 ? (
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
                  data?.data.myFavoriteNews.length / rowsPerPage
                )}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn align="center" key="title">
              عنوان مقاله
            </TableColumn>
            <TableColumn align="center" key="currentRate">
              امتیاز مقاله
            </TableColumn>
            <TableColumn align="center" key="currentView">
              تعداد بازدید
            </TableColumn>
            <TableColumn align="center" key="currentLikeCount">
              تعداد لایک ها
            </TableColumn>
            <TableColumn align="center" key="watch">
              مشاهده مقاله
            </TableColumn>
            <TableColumn align="center" key="delete">
              حذف مقاله
            </TableColumn>
          </TableHeader>
          <TableBody
            items={items.map((item) => ({
              ...item,
              watch: (
                <Link
                  to={`/articles/${item.newsId}`}
                  className="inline-flex items-center justify-center p-1 cursor-pointer"
                >
                  <FaEye size={22} />
                </Link>
              ),
              delete: (
                <span
                  className="inline-flex items-center justify-center p-1 cursor-pointer"
                  onClick={() =>
                    removeArticleFromFavorites(item.favoriteId).then(() =>
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
              <TableRow key={item.newsId}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <p className="text-lg">هنوز مقاله ای به لیست علاقمندی ها اضافه نشد</p>
      )}
    </div>
  );
}

export default UserFavoriteArticles;
