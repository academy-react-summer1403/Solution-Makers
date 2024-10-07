import axios from "axios";
import { useParams } from "react-router-dom";
import { baseApi } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import {Avatar} from "@nextui-org/react";

function ArticleMainContent() {
  const { id } = useParams();

  const fetchArticleById = () => axios.get(`${baseApi}/News/${id}`);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(),
  });

  console.log(data?.data.detailsNewsDto);

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <div className="container flex flex-col mt-10">

      <div className="flex flex-col gap-10 md:flex-row p-5">
        <div className="imgContainer w-full md:w-[40%] bg-red-600 rounded-2xl overflow-hidden lg:h-[340px]">
          <img src="https://next1code.ir/wp-content/uploads/2024/01/nextjs1-course-cover-500x286.jpg" className="w-full h-full"/>
        </div>

        <div className="flex flex-col justify-between w-full md:w-[60%]">
          <h1 className="text-ellipsis whitespace-nowrap overflow-hidden">{data.data.detailsNewsDto.title}</h1>
          <p className="text-justify mt-5 md:mt-0 text-[#455A64]">
            همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص
            مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و
            این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری
            است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع
            خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان مقاله
            مشخص است، صحبت ما روی آموزش دیدن و یادگیری است.همانطور که از عنوان
            مقاله. قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو
            برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی
            خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب
            است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به
            درک عمیقی از اون مطلب میرسند؟ قطعا خیر.
          </p>

          <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-[16px]">

            <div className="text-primary mt-5 md:mt-0 flex flex-col items-start sm:flex-row sm:items-center gap-4">
              <span className="flex items-center gap-1">
                <MdOutlineRemoveRedEye size={20} />
                22 بازدید
                {/* {currentView} */}
              </span>
              <GoDotFill size={20} className="hidden sm:inline-block" />
              <span className="flex items-center gap-1">
                <IoCalendarOutline size={20} />
                1402/7/2
                {/* {updateDate.slice(0, 10)} */}
              </span>
            </div>

            <div className="xs:flex mt-5 md:mt-0 justify-start items-center gap-3 sm:bg-white sm:pe-12 sm:ps-4 sm:py-3 rounded-2xl">
            <Avatar radius="lg" size="md" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              <p>بهاره یزدانی</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ArticleMainContent;
