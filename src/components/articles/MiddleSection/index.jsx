import { useEffect } from "react";
import toast from "react-hot-toast";
import ArticlesList from "./ArticlesSection";
import TopSection from "./TopSection";

function ArticlesMiddleSection() {
  useEffect(() => {
    toast.remove();
  }, []);

  return (
    <div className="container flex flex-col gap-10 lg:px-14 mt-24">
      <TopSection />
      <ArticlesList />
    </div>
  );
}

export default ArticlesMiddleSection;
