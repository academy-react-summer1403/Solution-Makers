import { createContext, useState } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types

function Provider({ children }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isSignUpLoginModalOpen, setisSignUpLoginModalOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [userInfos, setUserInfos] = useState({});
  const [showUserPanelSidebar, setShowUserPanelSidebar] = useState(false);
  const [reFetch, setReFetch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [bagIconNum, setBagIconNum] = useState(5);
  const [coursesPageNumber, setCoursesPageNumber] = useState(1);
  const [coursesSortType, setCoursesSortType] = useState("DESC");
  const [coursesSortingCol, setCoursesSortingCol] = useState(undefined);
  const [rowsOfPage, setRowsOfPage] = useState(9);
  const [courseTypeId, setCourseTypeId] = useState(undefined);
  const [courseLevelId, setCourseLevelId] = useState(undefined);
  const [teacherId, setTeacherId] = useState(undefined);
  const [techCount, setTechCount] = useState(0);
  const [listTech, setListTech] = useState([]);
  const [coursesQuery, setCoursesQuery] = useState("");
  const [costDown, setCostDown] = useState(undefined);
  const [costUp, setCostUp] = useState(undefined);
  const [articlesPageNumber, setArticlesPageNumber] = useState(1);
  const [articlesQuery, setArticlesQuery] = useState("");
  const [articlesSortingCol, setArticlesSortingCol] = useState(undefined);
  const [articlesCategory, setArticlesCategory] = useState("");
  const [userNavTitle, setUserNavTitle] = useState("");
  const [commentId, setCommentId] = useState(75);
  const [comparisonIds, setComparisonIds] = useState([]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isSignUpLoginModalOpen,
        setisSignUpLoginModalOpen,
        userInfos,
        setUserInfos,
        reFetch,
        setReFetch,
        isLogin,
        setIsLogin,
        bagIconNum,
        setBagIconNum,
        showUserPanelSidebar,
        setShowUserPanelSidebar,
        coursesPageNumber,
        setCoursesPageNumber,
        coursesSortType,
        setCoursesSortType,
        rowsOfPage,
        setRowsOfPage,
        courseLevelId,
        setCourseLevelId,
        courseTypeId,
        setCourseTypeId,
        teacherId,
        setTeacherId,
        listTech,
        setListTech,
        techCount,
        setTechCount,
        coursesQuery,
        setCoursesQuery,
        coursesSortingCol,
        setCoursesSortingCol,
        costDown,
        setCostDown,
        costUp,
        setCostUp,
        articlesPageNumber,
        setArticlesPageNumber,
        articlesQuery,
        setArticlesQuery,
        articlesSortingCol,
        setArticlesSortingCol,
        articlesCategory,
        setArticlesCategory,
        userNavTitle,
        setUserNavTitle,
        commentId,
        setCommentId,
        phoneNumber,
        setPhoneNumber,
        comparisonIds,
        setComparisonIds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
