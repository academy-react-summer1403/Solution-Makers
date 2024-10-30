import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import CourseComparison from "./pages/CourseComparison";
import Articles from "./pages/Articles";
import CourseDetails from "./pages/CourseDetails";
import ArticleDetails from "./pages/ArticleDetails";
import Login from "./pages/Login";
import LoginCodeVerifiction from "./pages/Login/LoginCodeVerifiction";
import SignUp from "./pages/SignUp/SignUp";
import SignUpVerification from "./pages/SignUp/SignUpVerification";
import SetPassword from "./pages/SignUp/SetPassword";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ForgetPasswordVerification from "./pages/ForgetPassword/ForgetPasswordVerification";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import UserPanelLayout from "./layouts/UserPanelLayout";
import UserPanelIndex from "./pages/userPanel/Index";
import UserPanelCourses from "./pages/userPanel/Courses";
import UserPanelFavoriteCourses from "./pages/userPanel/FavoriteCourses";
import UserPanelFavoriteArticles from "./pages/userPanel/FavoriteArticles";
import UserPanelEditProfile from "./pages/userPanel/EditProfile";
import UserPanelChangePassword from "./pages/userPanel/ChangePassword";
import UserPanelComments from "./pages/userPanel/Comments";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/courses", element: <Courses /> },
  { path: "/CourseComparison", element: <CourseComparison /> },
  { path: "/articles", element: <Articles /> },
  { path: "/articles/:id", element: <ArticleDetails /> },
  { path: "/courses/:id", element: <CourseDetails /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/LoginCodeVerifiction", element: <LoginCodeVerifiction /> },
  { path: "/ForgetPassword", element: <ForgetPassword /> },
  {
    path: "/ForgetPasswordVerification",
    element: <ForgetPasswordVerification />,
  },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/SignUpVerification", element: <SignUpVerification /> },
  { path: "/SetPassword", element: <SetPassword /> },
  {
    path: "/my-panel/*",
    element: <UserPanelLayout />,
    children: [
      {
        path: "dashboard",
        element: <UserPanelIndex />,
      },
      {
        path: "courses",
        element: <UserPanelCourses />,
      },
      {
        path: "favorite-courses",
        element: <UserPanelFavoriteCourses />,
      },
      {
        path: "favorite-articles",
        element: <UserPanelFavoriteArticles />,
      },
      {
        path: "comments",
        element: <UserPanelComments />,
      },
      {
        path: "edit-profile",
        element: <UserPanelEditProfile />,
      },
      {
        path: "change-password",
        element: <UserPanelChangePassword />,
      },
    ],
  },
];

export default routes;
