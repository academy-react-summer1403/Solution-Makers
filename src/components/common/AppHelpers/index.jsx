import { useState } from "react";
import { PiCaretUpBold } from "react-icons/pi";
import ToggleTheme from "../ToggleTheme";

function AppHelpers() {
  const [isShow, setIsShow] = useState(false);

  window.onscroll = () => {
    if (scrollY > 200) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  return (
    <div
      className={`hidden xs:inline-flex flex-col-reverse gap-4 ${
        isShow ? "left-4" : "-left-[500px]"
      } fixed bottom-5 transition-all`}
    >
      <span
        className=" bg-primary rounded-full p-1 cursor-pointer"
        onClick={() => scrollTo({ top: "0", behavior: "smooth" })}
      >
        <PiCaretUpBold size={35} className="text-white" />
      </span>
      <ToggleTheme border="border-2" />
    </div>
  );
}

export default AppHelpers;
