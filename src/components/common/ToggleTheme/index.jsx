import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/Provider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function ToggleTheme({ hideInMobile }) {
  const { theme, setTheme } = useContext(AppContext);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeHandler = () => {
    if (theme == "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <span
      className={`${hideInMobile ? "hidden" : ""} sm:inline-block bg-white dark:bg-dark-100 p-2 rounded-full cursor-pointer`}
      onClick={themeHandler}
    >
      {theme == "light" ? (
        <MdOutlineDarkMode size={28} />
      ) : (
        <MdOutlineLightMode size={28} />
      )}
    </span>
  );
}

export default ToggleTheme;
