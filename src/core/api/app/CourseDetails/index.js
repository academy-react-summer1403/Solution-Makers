import toast from "react-hot-toast";
import instance from "../../../services/middleware";

export const fetchCourseById = (id) =>
  instance.get(`/Home/GetCourseDetails?CourseId=${id}`);

export const fetchCourseComments = (id) =>
  instance.get(`/Course/GetCourseCommnets/${id}`);

export const getCourseCommentsReplies = (courseId, commentId) => {
  return toast.promise(
    instance.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`),
    {
      loading: "در حال دریافت اطلاعات",
      error: "خطایی رخ داد",
    }
  );
};

export const addCommentCourse = (id, commentTitle, commentBody) => {
  const formData = new FormData();
  formData.append("CourseId", id);
  formData.append("Title", commentTitle);
  formData.append("Describe", commentBody);
  return toast.promise(instance.post("/Course/AddCommentCourse", formData), {
    loading: "در حال پردازش",
    success: "عملیات با موفقیت انجام شد",
    error: "خطایی رخ داد",
  });
};

export const addReplyCourseComment = (
  commentId,
  courseId,
  replyTitle,
  replyBody
) => {
  const formData = new FormData();
  formData.append("CommentId", commentId);
  formData.append("CourseId", courseId);
  formData.append("Title", replyTitle);
  formData.append("Describe", replyBody);
  return toast.promise(
    instance.post("/Course/AddReplyCourseComment", formData),
    {
      loading: "در حال پردازش",
      success: "عملیات با موفقیت انجام شد",
      error: "خطایی رخ داد",
    }
  );
};

export const submitScoreForCourse = (id, score) => {
  return toast.promise(
    instance.post(`/Course/SetCourseRating?CourseId=${id}&RateNumber=${score}`),
    {
      loading: "در حال پردازش",
      success: "امتیاز ثبت شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addCourseToFavorites = (id) => {
  return toast.promise(
    instance.post("/Course/AddCourseFavorite", { courseId: id }),
    {
      loading: "در حال پردازش",
      success: "به علاقمندی ها اضافه شد",
      error: "خطایی رخ داد",
    }
  );
};

export const removeCourseFromFavorites = (userFavoriteId) => {
  const formData = new FormData();
  formData.append("CourseFavoriteId", userFavoriteId);
  return toast.promise(
    instance.delete("/Course/DeleteCourseFavorite", { data: formData }),
    {
      loading: "در حال پردازش",
      success: "از علاقمندی ها اضافه حذف شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addCourseLike = (id) => {
  return toast.promise(instance.post(`/Course/AddCourseLike?CourseId=${id}`), {
    loading: "در حال پردازش",
    success: "لایک شد",
    error: "خطایی رخ داد",
  });
};

export const addCourseDislike = (id) => {
  return toast.promise(
    instance.post(`/Course/AddCourseDissLike?CourseId=${id}`),
    {
      loading: "در حال پردازش",
      success: "دیسلایک شد",
      error: "خطایی رخ داد",
    }
  );
};

export const deleteCourseLike = (userLikeId) => {
  const formData = new FormData();
  formData.append("CourseLikeId", userLikeId);
  return toast.promise(
    instance.delete("/Course/DeleteCourseLike", { data: formData }),
    {
      loading: "در حال پردازش",
      success: "لایک برداشته شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addLikeForCourseComment = (id) => {
  return toast.promise(
    instance.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}`),
    {
      loading: "در حال پردازش",
      success: "کامنت لایک شد",
      error: "خطایی رخ داد",
    }
  );
};

export const dislikeCourseComment = (id) => {
  return toast.promise(
    instance.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`),
    {
      loading: "در حال پردازش",
      success: "کامنت دیسلایک شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addCourseReserve = (courseId) =>
  toast.promise(instance.post("/CourseReserve/ReserveAdd", { courseId }), {
    loading: "در حال پردازش",
    success: "دوره با موفقیت رزرو شد",
    error: "خطایی رخ داد",
  });
