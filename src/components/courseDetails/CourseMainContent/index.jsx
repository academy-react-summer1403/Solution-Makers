import axios from "axios";
import { useParams } from "react-router-dom";
import { baseApi } from "../../../config";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import CourseSpecificationsDiv from "./CourseSpecificationsDiv";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsCameraVideo } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuCalendarCheck2 } from "react-icons/lu";
import { Avatar, Button } from "@nextui-org/react";
import RateSection from "../../common/RateSection";
import CommentsBox from "../../common/comments/CommentsBox";

function CourseMainContent() {
  const { id } = useParams();

  const fetchCourseById = () =>
    axios.get(`${baseApi}/Home/GetCourseDetails?CourseId=${id}`);

  const fetchCourseComments = () =>
    axios.get(`${baseApi}/Course/GetCourseCommnets/${id}`);

  const { data, isLoading, error } = useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseById(),
  });

  const comments = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => fetchCourseComments(),
  });

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <div className="container px-12 mt-10">
      <div className="flex gap-8">
        <div className="flex flex-col gap-5 lg:w-[70%]">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={
                data.data.imageAddress ||
                "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
              }
              className="w-full lg:h-[548px]"
            />
          </div>
          <h1>{data.data.title}</h1>
          <p className="text-justify">{data.data.describe}</p>
          <RateSection />
          <div className="bg-white p-7 mt-12 rounded-3xl">
            <CommentsBox
              courseId={id}
              comments={comments?.data?.data}
              isLoading={comments?.isLoading}
              error={comments?.error}
            />
          </div>
        </div>
        <div className="lg:w-[30%] flex flex-col gap-10">
          <div className="bg-white px-8 py-5 flex flex-col divide-y-1 divide-gray rounded-3xl">
            <h3 className="text-center text-2xl pb-5">مشخصات دوره</h3>
            <CourseSpecificationsDiv
              icon={<HiOutlineUsers />}
              textKey="تعداد دانشجو"
              textValue={data.data.currentRegistrants}
            />
            <CourseSpecificationsDiv
              icon={<BsCameraVideo />}
              textKey="وضعیت دوره"
              textValue={data.data.courseStatusName}
            />
            <CourseSpecificationsDiv
              icon={<IoCalendarOutline />}
              textKey="تاریخ شروع"
              textValue={data.data.startTime.slice(0, 10)}
            />
            <CourseSpecificationsDiv
              icon={<LuCalendarCheck2 />}
              textKey="تاریخ پایان"
              textValue={data.data.endTime.slice(0, 10)}
            />
            <div className="py-5 flex justify-between items-center">
              <Button color="primary" size="lg" className="rounded-full ">
                شرکت در دوره
              </Button>
              <span className="flex items-center gap-2">
                <b className="text-primary text-xl">
                  {data.data.cost.toLocaleString()}
                </b>
                تومان
              </span>
            </div>
          </div>
          <div className="bg-white flex items-center p-6 gap-5 rounded-3xl">
            <div>
              <Avatar
                size="lg"
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                <RiGraduationCapLine size={20} />
                {data.data.teacherName}
              </span>
              <div>{data.data.uniqeUrlString}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMainContent;
