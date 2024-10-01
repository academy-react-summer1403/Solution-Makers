import CoursesSection from "./coursesSection/CoursesSection";
import FilterSection from "./filterSection/FilterSection";

function MiddleSection() {
  return (
    <div className="px-0 sm:px-[2rem] md:px-[3rem] lg:px-[3rem] container flex justify-center bg-purple-300 gap-4">
      <FilterSection />
      <CoursesSection />
    </div>
  );
}

export default MiddleSection;
