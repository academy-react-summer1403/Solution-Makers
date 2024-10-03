import { Select, SelectItem } from "@nextui-org/react";
import SearchInput from "../../../../common/SearchInput";
import { useState } from "react";
import { CgSortAz } from "react-icons/cg";
import CoursesShowStatusToggler from "./CoursesShowStatusToggler";

function InputSection() {
  const [sort, setSort] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-5">
      <div className="w-full md:w-[12%] lg:w-[15%] xl:w-[12%] flex items-center justify-center sm:justify-start md:justify-center h-20">
        <CoursesShowStatusToggler />
      </div>
      <div className="w-full md:w-[68%] lg:w-[60%] xl:w-[68%] h-20 flex items-center">
        <SearchInput />
      </div>
      <div className="w-full md:w-[20%] lg:w-[25%] xl:w-[20%] h-20 flex items-center">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            placeholder="انتخاب کنید"
            selectedKeys={[sort]}
            className="max-w-xs"
            classNames={{ trigger: "bg-white h-14", value: "text-md" }}
            onChange={(e) => setSort(e.target.value)}
            startContent={<CgSortAz size={40} />}
          >
            <SelectItem key="favs">محبوب ترین‌ها</SelectItem>
            <SelectItem key="mostSelled">پر فروش ترین ها</SelectItem>
            <SelectItem key="newest">جدیدترین</SelectItem>
            <SelectItem key="expensive">گران ترین</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default InputSection;
