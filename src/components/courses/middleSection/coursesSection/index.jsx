import CoursesList from "./CoursesList";
import TopSection from "./TopSection";

function CoursesSection() {
  return (
    <div className="w-full lg:w-[70%] xl:w-[75%] px-5 sm:px-2">
      <TopSection />
      <CoursesList />
    </div>
  );
}

export default CoursesSection;
