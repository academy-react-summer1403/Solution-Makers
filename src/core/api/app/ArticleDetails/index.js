import toast from "react-hot-toast";
import instance from "../../../services/middleware";
import { getItem } from "../../../services/common/storage";

export const fetchArticleById = (id) => instance.get(`/News/${id}`);

export const fetchArticleComments = (id) =>
  instance.get(`/News/GetNewsComments?NewsId=${id}`);

export const getArticleCommentsReplies = (commentId) => {
  return toast.promise(
    instance.get(`/News/GetRepliesComments?Id=${commentId}`),
    {
      loading: "در حال دریافت اطلاعات",
      error: "خطایی رخ داد",
    }
  );
};

export const addReplyArticleComment = (newsId, title, describe, parentId) => {
  return toast.promise(
    instance.post("/News/CreateNewsReplyComment", {
      newsId,
      userIpAddress: "tesssst",
      title,
      describe,
      userId: String(getItem("userId")),
      parentId,
    }),
    {
      loading: "در حال پردازش",
      success: "عملیات با موفقیت انجام شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addArticleComment = (newsId, title, describe) => {
  return toast.promise(
    instance.post("/News/CreateNewsComment", {
      newsId,
      userIpAddress: "tesssst",
      title,
      describe,
      userId: String(getItem("userId")),
    }),
    {
      loading: "در حال پردازش",
      success: "عملیات با موفقیت انجام شد",
      error: "خطایی رخ داد",
    }
  );
};

export const likeArticleComment = (id) => {
  return toast.promise(instance.post(`/News/CommentLike/${id}?LikeType=true`), {
    loading: "در حال پردازش",
    success: "لایک شد",
    error: "خطایی رخ داد",
  });
};

export const deleteLikeArticleComment = (id) => {
  return toast.promise(
    instance.delete("/News/DeleteCommentLikeNews", {
      data: {
        deleteEntityId: id,
      },
    }),
    {
      loading: "در حال پردازش",
      success: "لایک برداشته شد",
      error: "خطایی رخ داد",
    }
  );
};

export const submitScoreForArticle = (id, score) => {
  return toast.promise(
    instance.post(`/News/NewsRate?NewsId=${id}&RateNumber=${score}`),
    {
      loading: "در حال پردازش",
      success: "امتیاز ثبت شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addArticleToFavorites = (id) => {
  return toast.promise(instance.post(`/News/AddFavoriteNews?NewsId=${id}`), {
    loading: "در حال پردازش",
    success: "به علاقمندی ها اضافه شد",
    error: "خطایی رخ داد",
  });
};

export const removeArticleFromFavorites = (currentUserFavoriteId) => {
  return toast.promise(
    instance.delete("/News/DeleteFavoriteNews", {
      data: {
        deleteEntityId: currentUserFavoriteId,
      },
    }),
    {
      loading: "در حال پردازش",
      success: "از علاقمندی ها اضافه حذف شد",
      error: "خطایی رخ داد",
    }
  );
};

export const addArticleLike = (id) => {
  return toast.promise(instance.post(`/News/NewsLike/${id}`), {
    loading: "در حال پردازش",
    success: "لایک شد",
    error: "خطایی رخ داد",
  });
};

export const addArticleDislike = (id) => {
  return toast.promise(instance.post(`/News/NewsDissLike/${id}`), {
    loading: "در حال پردازش",
    success: "دیسلایک شد",
    error: "خطایی رخ داد",
  });
};

export const deleteArticleLike = (likeId) => {
  return toast.promise(
    instance.delete("/News/DeleteLikeNews", {
      data: {
        deleteEntityId: likeId,
      },
    }),
    {
      loading: "در حال پردازش",
      success: "لایک برداشته شد",
      error: "خطایی رخ داد",
    }
  );
};
