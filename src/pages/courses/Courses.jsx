import MyNavbar from "../../components/navbar/MyNavbar";
import Footer from "../../components/common/footer/Footer";
import MiddleSection from "../../components/courses/middleSection/MiddleSection";
import CoursesHeader from "../../components/courses/topSection/CoursesHeader";

function Courses() {
  return (
    <>
      <MyNavbar />
      <CoursesHeader />
      <MiddleSection />
      <Footer />
    </>
  );
}

export default Courses;
