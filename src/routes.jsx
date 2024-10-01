import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Teachers from "./pages/teachers/Teachers";
import Contact from "./pages/contact/Contact";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
];

export default routes;
