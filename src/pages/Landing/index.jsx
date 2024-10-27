import AppLayout from "../../layouts/AppLayout";
// import Header from "../../components/common/Header";
// import CoursesMiddleSection from "../../components/courses/MiddleSection";
// import CoursesList from "../../components/courses/MiddleSection/CoursesSection/CoursesList";
import "/src/app/App.css";
import Services from "./Services";
import LandingCourses from "./LandingCourses";
import Category from "./Category";
import LandingHeader from "./LandingHeader";
import LandingNews from "./LandingNews";
import Slider from "./Slider";

function Landing() {
  return (
    <AppLayout>
      <div>
        <LandingHeader />
      </div>
      <div className=" m-auto w-[1280px] ">
        {/* خدمات ما */}
        <Services />
        {/* دوره های آموزش*/}
        <LandingCourses />
        {/* دسته بندی دوره ها */}
        <Category />
      </div>
      <div className=" w-full mt-[30px] ">
        {/* اساتید برتر */}
        <Slider />
      </div>
      <div className=" m-auto w-[1280px] ">
        {/* اخبار و مقالات */}
        <LandingNews />
      </div>
    </AppLayout>
  );
}

export default Landing;
