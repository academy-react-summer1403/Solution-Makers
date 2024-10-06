import ArticlesMiddleSection from "../../components/articles/MiddleSection";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import MyNavbar from "../../components/common/Navbar";

function Articles() {
  return (
    <>
      <MyNavbar />
      <Header
        img="/src/assets/images/articles/Asset.png"
        heading="اخبار و مقالات هگزا اسکواد"
      />
      <ArticlesMiddleSection />
      <Footer />
    </>
  );
}

export default Articles;
