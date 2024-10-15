import BagIcon from "../../common/BagIcon";
import ToggleTheme from "../../common/ToggleTheme";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useContext } from "react";
import { AppContext } from "../../../context/Provider";
import { Link } from "react-router-dom";

function UserPanelNavbar() {
  const { setShowUserPanelSidebar, userNavTitle } = useContext(AppContext);

  return (
    <div className="flex justify-between px-2">
      <div className="flex items-center gap-4">
        <span className="lg:hidden">
          <HiOutlineBars3
            className="cursor-pointer"
            size={30}
            onClick={() => setShowUserPanelSidebar(true)}
          />
        </span>
        <h2 className="hidden sm:block text-3xl font-bold">{userNavTitle}</h2>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ToggleTheme />
        <Link className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center">
          <BagIcon />
        </Link>
      </div>
    </div>
  );
}

export default UserPanelNavbar;
