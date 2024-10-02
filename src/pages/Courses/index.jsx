import MyNavbar from "../../components/common/Navbar";
import Header from "../../components/common/Header";
import MiddleSection from "../../components/courses/MiddleSection";
import Footer from "../../components/common/Footer";

function Courses() {
  return (
    <>
      <MyNavbar />
      <Header
        img="/src/assets/images/courses/Asset11.png"
        heading="آموزش برنامه نویسی با بهترین ها"
        reminding="مهمه از کی یاد می گیری!!"
      />
      <MiddleSection />
      <Footer />
    </>
  );
}

export default Courses;