import Header from "../../components/common/Header";
import CoursesMiddleSection from "../../components/courses/MiddleSection";
import AppLayout from "../../layouts/AppLayout";

function Courses() {
  return (
    <AppLayout>
      <Header
        img="/src/assets/images/courses/Asset11.png"
        heading="آموزش برنامه نویسی با بهترین ها"
        reminding="مهمه از کی یاد می گیری!!"
      />
      <CoursesMiddleSection />
    </AppLayout>
  );
}

export default Courses;
