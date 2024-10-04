import CoursesSection from "./CoursesSection";
import FilterSection from "./FilterSection";

function MiddleSection() {
  return (
    <div className="container mt-20 px-0 sm:px-[2rem] md:px-[3rem] lg:px-[3rem] flex justify-center gap-4">
      <FilterSection />
      <CoursesSection />
    </div>
  );
}

export default MiddleSection;
