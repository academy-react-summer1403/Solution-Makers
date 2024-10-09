import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import LoginCodeVerifiction from "./pages/Login/LoginCodeVerifiction";
import Login from "./pages/Login";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";

const routes = [
  { path: "/", element: <Landing /> },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/:id",
    element: <ArticleDetails />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/LoginCodeVerifiction",
    element: <LoginCodeVerifiction />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
