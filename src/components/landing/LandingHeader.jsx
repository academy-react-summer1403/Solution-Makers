import { useQuery } from "@tanstack/react-query";
import LandHeadObj from "./Objects/LandHeadObj";
import { getLandingReport } from "../../core/api/app/landing";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { MdMenuBook } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { Select, SelectItem } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

const LandingHeader = () => {
  const { setCoursesQuery, setArticlesQuery } = useContext(AppContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["landingReport"],
    queryFn: getLandingReport,
  });

  useEffect(() => {
    setCoursesQuery("");
    setArticlesQuery("");
  }, []);

  return (
    <div className="relative w-full h-[900px] m-auto bg-[url(/src/components/Landing/header-bg.png)] bg-[length:100%_90%] bg-no-repeat dark:invert-[1] dark:text-black flex flex-row flex-nowrap justify-center px-6 pt-6 md:pt-20">
      <div className="w-full lg:w-[70%] flex flex-col text-center gap-4 md:gap-14 overflow-hidden">
        <div className="flex flex-col gap-3">
          <p className="text-[20px] lg:text-[24px]">پلتفرم آموزش طراحی وب</p>
          <h1 className="text-[26px] lg:text-[80px]">
            مرجع آموزش برنامه نویسی
          </h1>
          <p className="text-[20px] lg:text-[24px]">
            مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به
            زبان فارسی .
          </p>
        </div>
        <div className="bg-white dark:bg-black w-[80%] mx-auto flex rounded-2xl overflow-hidden pr-4">
          <input
            placeholder="چی میخوای یاد بگیری ؟"
            className="w-[80%] h-14 outline-none dark:bg-black dark:text-white"
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                if (!selected) {
                  toast.error("لطفا ابتدا دسته بندی جستجو را انتخاب کنید");
                  return;
                }
                if (selected == "courses") {
                  setCoursesQuery(searchKey);
                  navigate("/courses");
                }
                if (selected == "articles") {
                  setArticlesQuery(searchKey);
                  navigate("/articles");
                }
              }
            }}
          />
          <Select
            placeholder="جستجو در بین"
            className="max-w-xs"
            aria-label="searchCol"
            classNames={{
              base: "w-[20%]",
              trigger: "bg-white dark:bg-dark-100 h-14",
              value: "text-md",
            }}
            onChange={(e) => setSelected(e.target.value)}
          >
            <SelectItem key="courses">دوره ها</SelectItem>
            <SelectItem key="articles">مقالات</SelectItem>
          </Select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:px-28 py-5 lg:p-5">
          <LandHeadObj
            icon={<LiaChalkboardTeacherSolid color="#fff" />}
            title="مدرس مجرب"
            countNum={data?.data.teacherCount}
          />
          <LandHeadObj
            title="نفر دانشجو"
            countNum={data?.data.studentCount}
            icon={<PiStudentBold color="#fff" />}
          />
          <LandHeadObj
            title="دوره آموزشی"
            countNum={data?.data.courseCount}
            icon={<MdMenuBook color="#fff" />}
          />
          <LandHeadObj
            title="مقاله آموزشی"
            countNum={data?.data.newsCount}
            icon={<GrArticle color="#fff" />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
