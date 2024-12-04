import { Select, SelectItem } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { getArticlesCategoriesList } from "../../../../core/api/app/Articles";
import { useContext } from "react";
import { AppContext } from "../../../../context/Provider";

function Category() {
  const { setArticlesCategory, setReFetch } = useContext(AppContext);

  const { data } = useQuery({
    queryKey: ["articlesCategoriesList"],
    queryFn: getArticlesCategoriesList,
  });

  return (
    <Select
      items={
        data?.data.map((item) => ({
          key: item.id,
          label: item.categoryName,
        })) || []
      }
      label="لیست دسته بندی"
      placeholder="انتخاب کنید"
      classNames={{ trigger: "bg-white shadow-xl dark:bg-dark-100" }}
      onSelectionChange={(e) => {
        if (e.size == 0) {
          setArticlesCategory("");
          setReFetch(true);
        } else {
          setArticlesCategory(e.currentKey);
          setReFetch(true);
        }
      }}
    >
      {(item) => <SelectItem>{item.label}</SelectItem>}
    </Select>
  );
}

export default Category;
