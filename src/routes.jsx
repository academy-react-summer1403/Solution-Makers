import Landing from "./pages/Landing";
import Courses from "./pages/Courses";
import Articles from "./pages/Articles";
import CourseDetails from "./pages/CourseDetails";
import ArticleDetails from "./pages/ArticleDetails";
import LoginCodeVerifiction from "./pages/Login/LoginCodeVerifiction";
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
import UserPrivateRoute from "./components/private/UserPrivateRoute";
import ResetPasswordPage from "./pages/ResetPassword";

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
    path: "/courses/:id",
    element: <CourseDetails />,
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
    path: "/LoginCodeVerifiction",
    element: <LoginCodeVerifiction />,
  },
  {
    path: "/resetpassword/:ConfigValue",
    element: <ResetPasswordPage />,
  },
  {
    path: "/my-panel/*",
    element: (
      <UserPrivateRoute>
        <UserPanelLayout />
      </UserPrivateRoute>
    ),
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
