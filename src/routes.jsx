import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
];

export default routes;
