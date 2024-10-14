import ArticlesMiddleSection from "../../components/articles/MiddleSection";
import Header from "../../components/common/Header";
import AppLayout from "../../layouts/AppLayout";

function Articles() {
  return (
    <AppLayout>
      <Header
        img="/src/assets/images/articles/Asset.png"
        heading="اخبار و مقالات هگزا اسکواد"
      />
      <ArticlesMiddleSection />
    </AppLayout>
  );
}

export default Articles;
