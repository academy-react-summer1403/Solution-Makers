import { useQuery } from "@tanstack/react-query";
import { fetchUserFavoriteArticles } from "../../../../core/api/userPanel/Articles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import UserIndexCard from "../UserIndexCard";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ErrorBox from "../../Error";

function UserIndexFavArticles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userIndexFavArticles"],
    queryFn: () => fetchUserFavoriteArticles(),
  });

  const navigate = useNavigate();

  if (error) {
    return <ErrorBox />;
  }

  if (isLoading) {
    return <Spinner size="lg" className="m-8" />;
  }

  if (data.data.myFavoriteNews.length == 0) {
    return (
      <div className="flex justify-center items-center min-h-[180px] text-xl rounded-2xl border-2 border-primary dark:bg-dark-200">
        هنوز مقاله ای به لیست علاقمندی ها اضافه نشد
      </div>
    );
  }

  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper shadow-xl dark:shadow-none rounded-2xl flex flex-col-reverse"
    >
      <div
        className="flex items-center justify-center text-lg lg:text-2xl p-4 cursor-pointer dark:bg-dark-100 bg-primary text-white"
        onClick={() => navigate("/my-panel/favorite-articles")}
      >
        مقاله های مورد علاقه من
      </div>
      {data.data.myFavoriteNews.map((article) => (
        <SwiperSlide
          key={article.newsId}
          className="flex cursor-pointer dark:bg-dark-200"
          onClick={() => navigate(`/articles/${article.newsId}`)}
        >
          <UserIndexCard {...article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default UserIndexFavArticles;
