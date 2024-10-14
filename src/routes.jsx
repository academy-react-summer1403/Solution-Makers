import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";
import CourseDetails from "./pages/CourseDetails";
import UserPanelLayout from "./layouts/UserPanelLayout";
import UserPanelIndex from "./pages/userPanel/Index";
import UserPanelCourses from "./pages/userPanel/Courses";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CourseDetails /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:id", element: <ArticleDetails /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  {
    path: "/my-panel/*",
    element: <UserPanelLayout />,
    children: [
      {
        path: "",
        element: <UserPanelIndex />,
      },
      {
        path: "courses",
        element: <UserPanelCourses />,
      },
    ],
  },
];

export default routes;
