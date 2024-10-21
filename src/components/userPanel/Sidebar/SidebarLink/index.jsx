import { NavLink } from "react-router-dom";
import "./index.css"

function UserPanelSidebarLink({ text, link, icon }) {
  return (
    <div className="px-4">
      <NavLink id="sidebarNavLink" to={link} className="flex justify-start gap-3 py-3 px-5 rounded-xl text-white hover:bg-[#1e87db] dark:hover:bg-primary">
        {icon}
        <p className="text-lg">{text}</p>
      </NavLink>
    </div>
  );
}

export default UserPanelSidebarLink;
