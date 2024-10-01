import { Select, SelectItem } from "@nextui-org/react";
import SearchInput from "../../../common/SearchInput";
import { useState } from "react";
import { CgSortAz } from "react-icons/cg";
import CoursesShowStatusToggler from "./CoursesShowStatusToggler";

function InputSection() {
  const [sort, setSort] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-0 sm:gap-5">
      <div className="flex items-center h-20">
        <CoursesShowStatusToggler />
      </div>
      <div className="w-full md:w-[80%] h-20 flex items-center">
        <SearchInput />
      </div>
      <div className="w-full md:w-[20%] h-20 flex items-center">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Select
            label="دسته بندی"
            placeholder="انتخاب کنید"
            selectedKeys={[sort]}
            className="max-w-xs"
            classNames={{ trigger: "bg-white" }}
            onChange={(e) => setSort(e.target.value)}
            startContent={<CgSortAz size={36} />}
          >
            <SelectItem key="favs">محبوب ترین</SelectItem>
            <SelectItem key="mostSelled">پر فروش ترین</SelectItem>
            <SelectItem key="newest">جدیدترین</SelectItem>
            <SelectItem key="expensive">گران ترین</SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default InputSection;
