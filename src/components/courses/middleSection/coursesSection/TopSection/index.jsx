import { Select, SelectItem } from "@nextui-org/react";
import SearchInput from "../../../../common/SearchInput";
import { useContext } from "react";
import { CgSortAz } from "react-icons/cg";
import CoursesShowStatusToggler from "./CoursesShowStatusToggler";
import { AppContext } from "../../../../../context/Provider";

function TopSection() {
  const {
    coursesQuery,
    setCoursesQuery,
    setCoursesSortType,
    setCoursesSortingCol,
    setReFetch,
  } = useContext(AppContext);

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-5">
      <div className="w-full md:w-[12%] lg:w-[15%] xl:w-[12%] flex items-center justify-center sm:justify-start md:justify-center h-20">
        <CoursesShowStatusToggler />
      </div>
      <div className="w-full md:w-[68%] lg:w-[60%] xl:w-[68%] h-20 flex items-center">
        <SearchInput
          placeholder="چی میخوای یاد بگیری ؟"
          query={coursesQuery}
          setQuery={setCoursesQuery}
        />
      </div>
      <div className="w-full md:w-[20%] lg:w-[25%] xl:w-[20%] h-20 flex items-center">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            placeholder="انتخاب کنید"
            aria-label="coursesSortingCol"
            className="max-w-xs"
            classNames={{ trigger: "bg-white h-14", value: "text-md" }}
            onChange={(e) => {
              setCoursesSortingCol(e.target.value.split(",")[0]);
              setCoursesSortType(e.target.value.split(",")[1]);
              setReFetch(true);
            }}
            startContent={<CgSortAz size={40} />}
          >
            <SelectItem key="lastUpdate,DESC">جدیدترین</SelectItem>
            <SelectItem key="cost,ASC">ارزان ترین</SelectItem>
            <SelectItem key="cost,DESC">گران ترین</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
