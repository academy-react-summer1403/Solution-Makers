import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCourseById,
  fetchCourseComments,
  addCommentCourse,
} from "../../../core/api/app/CourseDetails";
import { BeatLoader } from "react-spinners";
import CourseRateSection from "../CourseRateSection";
import CommentsBox from "../../common/comments/CommentsBox";
import CourseDetailsTabs from "../CourseDetailsTabs";
import CourseDescription from "../CourseDescription";
import CourseSpecificationsBox from "../CourseSpecificationsBox";
import toast from "react-hot-toast";
import { AppContext } from "../../../context/Provider";
import { Button } from "@nextui-org/react";
import RelatedCourses from "../RelatedCourses";

function CourseMainContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { reFetch, setReFetch } = useContext(AppContext);
  const [showBox, setShowBox] = useState("descriptions");
  const [commentTitle, setCommentTitle] = useState("");
  const [commentBody, setCommentBody] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["course", id],
    queryFn: () => fetchCourseById(id),
  });

  const comments = useQuery({
    queryKey: ["courseComments"],
    queryFn: () => fetchCourseComments(id),
  });

  useEffect(() => {
    reFetch && refetch();
    reFetch && comments?.refetch();
    setReFetch(false);
  }, [reFetch]);

  useLayoutEffect(() => {
    scrollTo({ top: "0", behavior: "instant" });
    toast.remove();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center gap-8 mt-14">
        <span className=" text-center text-2xl">
          دریافت اطلاعات با خطا مواجه گردید
        </span>
        <span className="text-center">
          <Button
            color="primary"
            className="text-lg py-6 dark:bg-dark-100"
            onClick={() => navigate("/courses")}
          >
            بازگشت به صفحه دوره ها
          </Button>
        </span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <BeatLoader color="#2196F3" className="text-center my-[56px]" size={20} />
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
          <p
            className="text-justify sm:whitespace-normal"
            dangerouslySetInnerHTML={{ __html: data.data.describe }}
          ></p>
          <CourseRateSection
            id={id}
            currentUserLike={Boolean(Number(data.data.currentUserLike))}
            currentUserDissLike={Boolean(Number(data.data.currentUserDissLike))}
            isUserFavorite={data.data.isUserFavorite}
            userFavoriteId={data.data.userFavoriteId}
            userLikeId={data.data.userLikeId}
            currentUserSetRate={data.data.currentUserSetRate}
            currentUserRateNumber={data.data.currentUserRateNumber}
            refetch={refetch}
          />
          <div className="bg-white dark:bg-dark-200 p-7 mt-12 rounded-3xl overflow-hidden shadow-xl">
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
                comments={comments?.data?.data.filter(
                  (comment) => comment.accept == true
                )}
                isLoading={comments?.isLoading}
                error={comments?.error}
                commentTitle={commentTitle}
                setCommentTitle={setCommentTitle}
                commentBody={commentBody}
                setCommentBody={setCommentBody}
                addComment={() =>
                  addCommentCourse(id, commentTitle, commentBody).then(() => {
                    setCommentTitle("");
                    setCommentBody("");
                  })
                }
                refetch={comments.refetch}
              />
            )}
            {showBox == "details" && (
              <div className="lg:hidden">
                <CourseSpecificationsBox
                  courseId={id}
                  currentRegistrants={data.data.currentRegistrants}
                  courseStatusName={data.data.courseStatusName}
                  courseLevelName={data.data.courseLevelName}
                  capacity={data.data.capacity}
                  startTime={data.data.startTime}
                  endTime={data.data.endTime}
                  cost={data.data.cost}
                  teacherName={data.data.teacherName}
                  uniqeUrlString={data.data.uniqeUrlString}
                  isCourseUser={data.data.isCourseUser}
                  isCourseReseve={data.data.isCourseReseve}
                  refetch={refetch}
                />
              </div>
            )}
          </div>
        </div>
        <div className="hidden w-full lg:w-[30%] lg:flex flex-col gap-10">
          <CourseSpecificationsBox
            courseId={id}
            currentRegistrants={data.data.currentRegistrants}
            courseStatusName={data.data.courseStatusName}
            courseLevelName={data.data.courseLevelName}
            capacity={data.data.capacity}
            startTime={data.data.startTime}
            endTime={data.data.endTime}
            cost={data.data.cost}
            teacherName={data.data.teacherName}
            uniqeUrlString={data.data.uniqeUrlString}
            isCourseUser={data.data.isCourseUser}
            isCourseReseve={data.data.isCourseReseve}
            refetch={refetch}
          />
        </div>
      </div>
      <RelatedCourses
        id={id}
        teacherId={data.data.teacherId}
        courseLevelName={data.data.courseLevelName}
        techs={data.data.techs}
      />
    </div>
  );
}

export default CourseMainContent;
