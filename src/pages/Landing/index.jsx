import AppLayout from "../../layouts/AppLayout";
import Services from "../../components/landing/Services";
import LandingCourses from "../../components/landing/LandingCourses";
import Category from "../../components/landing/Category";
import LandingHeader from "../../components/landing/LandingHeader";
import LandingNews from "../../components/landing/LandingNews";
import Slider from "../../components/landing/Slider";
import "/src/app/App.css";

function Landing() {
  return (
    <AppLayout>
      <LandingHeader />
      <Services />
      <LandingCourses />
      <Category />
      <div className="w-full mt-[30px]">
        <Slider />
      </div>
      <div className="m-auto">
        <LandingNews />
      </div>
    </AppLayout>
  );
}

export default Landing;
