import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import RateSection from "../../common/RateSection";
import CommentsBox from "../../common/comments/CommentsBox";
import CourseDetailsTabs from "../CourseDetailsTabs";
import CourseDescription from "../CourseDescription";
import CourseSpecificationsBox from "../CourseSpecificationsBox";
import instance from "../../../core/services/middleware";

function CourseMainContent() {
  const { id } = useParams();
  const [showBox, setShowBox] = useState("descriptions");
  const [commentBody, setCommentBody] = useState("");

  const addComment = (describe) => {
    const formData = new FormData();
    formData.append("CourseId", id);
    formData.append("Title", "test title");
    formData.append("Describe", describe);
    instance
      .post("/Course/AddCommentCourse", formData)
      .then(() => setCommentBody(""));
  };

  const addLike = () => instance.post(`/Course/AddCourseLike?CourseId=${id}`);

  const addDislike = () =>
    instance.post(`/Course/AddCourseDissLike?CourseId=${id}`);

  const addToFavorites = () =>
    instance.post("/Course/AddCourseFavorite", { courseId: id });

  const fetchCourseById = () =>
    instance.get(`/Home/GetCourseDetails?CourseId=${id}`);

  const fetchCourseComments = () =>
    axios.get(`/Course/GetCourseCommnets/${id}`);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseById(),
  });

  const comments = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => fetchCourseComments(),
  });

  console.log(data?.data);

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center mt-10" size={20} />
    );
  }

  return (
    <div className="container px-12 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-5 w-full lg:w-[70%]">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={
                data.data.imageAddress ||
                "/src/assets/images/notFound/1047293-صفحه-یافت-نشد-خطای-404.jpg"
              }
              className="w-full lg:h-[548px]"
            />
          </div>
          <h1 className="text-ellipsis whitespace-nowrap overflow-hidden sm:whitespace-normal">
            {data.data.title}
          </h1>
          <p className="text-justify text-ellipsis whitespace-nowrap overflow-hidden sm:whitespace-normal">
            {data.data.describe}
          </p>
          <RateSection
            id={id}
            addLike={addLike}
            addDislike={addDislike}
            addToFavorites={addToFavorites}
            currentUserLike={Boolean(Number(data.data.currentUserLike))}
            currentUserDissLike={Boolean(Number(data.data.currentUserDissLike))}
          />
          <div className="bg-white dark:bg-dark-200 p-7 mt-12 rounded-3xl overflow-hidden">
            <CourseDetailsTabs setShowBox={setShowBox} />
            {showBox == "descriptions" && (
              <CourseDescription
                googleSchema={data.data.googleSchema}
                describe={data.data.describe}
              />
            )}
            {showBox == "comments" && (
              <CommentsBox
                courseId={id}
                comments={comments?.data?.data}
                isLoading={comments?.isLoading}
                error={comments?.error}
                commentBody={commentBody}
                setCommentBody={setCommentBody}
                addComment={addComment}
              />
            )}
            {showBox == "details" && (
              <div className="lg:hidden">
                <CourseSpecificationsBox
                  currentRegistrants={data.data.currentRegistrants}
                  courseStatusName={data.data.courseStatusName}
                  courseLevelName={data.data.courseLevelName}
                  capacity={data.data.capacity}
                  startTime={data.data.startTime}
                  endTime={data.data.endTime}
                  cost={data.data.cost}
                  teacherName={data.data.teacherName}
                  uniqeUrlString={data.data.uniqeUrlString}
                />
              </div>
            )}
          </div>
        </div>
        <div className="hidden w-full lg:w-[30%] lg:flex flex-col gap-10">
          <CourseSpecificationsBox
            currentRegistrants={data.data.currentRegistrants}
            courseStatusName={data.data.courseStatusName}
            courseLevelName={data.data.courseLevelName}
            capacity={data.data.capacity}
            startTime={data.data.startTime}
            endTime={data.data.endTime}
            cost={data.data.cost}
            teacherName={data.data.teacherName}
            uniqeUrlString={data.data.uniqeUrlString}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseMainContent;
