import { NavLink } from "react-router-dom";
import "./index.css";

function UserPanelSidebarLink({ text, link, icon }) {
  return (
    <div className="px-4">
      <NavLink
        id="sidebarNavLink"
        to={link}
        className="flex justify-start items-center gap-3 py-3 px-5 rounded-xl text-white text-medium xl:text-lg hover:bg-[#1e87db] dark:hover:bg-primary"
      >
        {icon}
        {text}
      </NavLink>
    </div>
  );
}

export default UserPanelSidebarLink;
