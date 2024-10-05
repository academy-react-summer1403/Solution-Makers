import { createContext, useState } from "react";

export const AppContext = createContext();

function Provider({ children }) {
  const [reFetch, setReFetch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [bagIconNum, setBagIconNum] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfPage, setRowsOfPage] = useState(9);
  const [courseTypeId, setCourseTypeId] = useState(undefined);
  const [courseLevelId, setCourseLevelId] = useState(undefined);
  const [teacherId, setTeacherId] = useState(undefined);
  const [techCount, setTechCount] = useState(0);
  const [listTech, setListTech] = useState([]);
  const [query, setQuery] = useState("");
  const [costDown, setCostDown] = useState(undefined);
  const [costUp, setCostUp] = useState(undefined);

  return (
    <AppContext.Provider
      value={{
        reFetch,
        setReFetch,
        isLogin,
        setIsLogin,
        bagIconNum,
        setBagIconNum,
        pageNumber,
        setPageNumber,
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
        query,
        setQuery,
        costDown,
        setCostDown,
        costUp,
        setCostUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
