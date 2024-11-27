import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./Objects/categoryCard";
import { getCategories } from "../../core/api/app/landing";
import { FaCode, FaReact } from "react-icons/fa";
import { BsDatabaseFillLock } from "react-icons/bs";
import { RiNextjsLine } from "react-icons/ri";
import { BeatLoader } from "react-spinners";

const Category = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center my-[56px]" size={20} />
    );
  }

  if (error) {
    return <span>خطا در دریافت اطلاعات</span>
  }

  return (
    <div className="dark:bg-none lg:bg-[url(/src/components/Landing/Objects/blend.png)] flex flex-col lg:flex-row items-center justify-between gap-16 mt-32 px-16 dark:px-28">
      <div className="dark:text-[#7a7878] mt-[-70px] w-full lg:w-[35%] flex flex-col justify-center text-right">
        <h1 className="dark:text-white">دسته بندی دوره ها</h1>
        <p className="dark:text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-[25px] w-full lg:w-[40%]">
        <div className="flex flex-col gap-[25px]">
          <CategoryCard
            catTitle={data?.data[0].techName.substring(1) || "فرانت اند"}
            catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
            Span={
              <span className="bg-[#F1F7FF] p-6 rounded-xl flex justify-center items-center text-[35px]">
                <FaCode color="#2539ED" />
              </span>
            }
          />
          <CategoryCard
            catTitle={data?.data[1].techName.substring(1) || "بک اند"}
            catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
            Span={
              <span className="bg-[#DEFFEE] p-6 rounded-xl flex justify-center items-center text-[35px]">
                <BsDatabaseFillLock color="#00DA71" />
              </span>
            }
          />
        </div>
        <div className="flex flex-col gap-[25px] mt-[50px]">
          <CategoryCard
            catTitle={data?.data[2].techName.substring(1) || "React"}
            catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
            icon={<FaReact color="#FF9900" />}
            Span={
              <span className="bg-[#FFF7E3] p-6 rounded-xl flex justify-center items-center text-[35px]">
                <FaReact color="#FF9900" />
              </span>
            }
          />
          <CategoryCard
            catTitle={data?.data[3].techName.substring(1) || "Next.Js"}
            catDescription="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است"
            Span={
              <span className="bg-[#FFF2F8] p-6 rounded-xl flex justify-center items-center text-[35px]">
                <RiNextjsLine color="#FF007A" />
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
