import Articles from "./pages/Articles";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import LoginCodeVerifiction from "./pages/Login/LoginCodeVerifiction";
// import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ForgetPasswordVerification from "./pages/ForgetPassword/ForgetPasswordVerification";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import ArticleDetails from "./pages/ArticleDetails";
import SignUp from "./pages/SignUp/SignUp";
import SignUpVerification from "./pages/SignUp/SignUpVerification";
import SetPassword from "./pages/SignUp/SetPassword";
import SignUpLoginIndex from "./pages/Login/SignUpLoginIndex";

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
    element: <SignUpLoginIndex />,
  },
  {
    path: "/LoginCodeVerifiction",
    element: <LoginCodeVerifiction />,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/ForgetPasswordVerification",
    element: (
      <ForgetPasswordVerification />
    ),
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignUpVerification",
    element: <SignUpVerification />,
  },
  {
    path: "/SetPassword",
    element: <SetPassword />,
  },
];

export default routes;
