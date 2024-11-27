import AppLayout from "../../layouts/AppLayout";
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
      <div>
        <Services />
        <LandingCourses />
        <Category />
      </div>
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
