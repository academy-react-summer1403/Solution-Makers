import { useContext } from "react";
import { AppContext } from "../../../context/Provider";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBookOpenTextBold } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Avatar } from "@nextui-org/react";
import UserPanelSidebarLink from "./SidebarLink";

function UserPanelSidebar() {
  const { showUserPanelSidebar, setShowUserPanelSidebar } =
    useContext(AppContext);

  return (
    <div
      className={`bg-primary dark:bg-dark-200 absolute z-50 w-[250px] ${
        showUserPanelSidebar ? "right-0" : "-right-[1000px]"
      } lg:static flex flex-col h-full lg:w-[20%] gap-2 transition-all`}
    >
      <span
        className="absolute left-1 top-1 lg:hidden cursor-pointer"
        onClick={() => setShowUserPanelSidebar(false)}
      >
        <IoIosArrowRoundForward size={35} color="white"/>
      </span>
      <div className="flex items-center px-9 py-8 border-b-1 border-[#cacaca] ">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="lg"
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <UserPanelSidebarLink
          icon={<LuLayoutDashboard size={30} color="white" />}
          text="پیشخوان"
          link={""}
        />
        <UserPanelSidebarLink
          icon={<PiBookOpenTextBold size={30} color="white" />}
          text="دوره‌های من"
          link={"courses"}
        />
        <UserPanelSidebarLink
          icon={<GoHeart size={30} color="white" />}
          text="ذخیره شده‌ها"
          link={""}
        />
        <UserPanelSidebarLink
          icon={<FaRegComment size={30} color="white" />}
          text="نظرات ثبت شده"
          link={""}
        />
        <UserPanelSidebarLink
          icon={<LiaUserEditSolid size={30} color="white" />}
          text="ویرایش پروفایل"
          link={""}
        />
        <UserPanelSidebarLink
          icon={<BiLogOut size={30} color="white" />}
          text="خروج از حساب"
          link={""}
        />
      </div>
    </div>
  );
}

export default UserPanelSidebar;
