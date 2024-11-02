import { useEffect } from "react";
import CoursesSection from "./CoursesSection";
import FilterSection from "./FilterSection";
import toast from "react-hot-toast";

function CoursesMiddleSection() {
  useEffect(() => {
    toast.remove();
  }, []);

  return (
    <div className="container mt-20 px-0 sm:px-[2rem] md:px-[3rem] lg:px-[3rem] flex justify-center gap-8">
      <div className="hidden lg:block lg:w-[30%] xl:w-[25%] mt-3">
        <FilterSection />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[75%] px-5 sm:px-2">
        <CoursesSection />
      </div>
    </div> 
  );
}

export default CoursesMiddleSection;
