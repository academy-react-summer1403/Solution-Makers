import { useContext } from "react";
import { AppContext } from "../../../context/Provider";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBookOpenTextBold } from "react-icons/pi";
import { BiSolidBookHeart } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Avatar } from "@nextui-org/react";
import UserPanelSidebarLink from "./SidebarLink";

function UserPanelSidebar() {
  const { showUserPanelSidebar, setShowUserPanelSidebar, userInfos } =
    useContext(AppContext);

  return (
    <div
      className={`bg-primary dark:bg-dark-200 dark:border-l fixed z-50 w-[250px] ${
        showUserPanelSidebar ? "right-0" : "-right-[1000px]"
      } lg:static flex flex-col h-full lg:w-[20%] gap-2 transition-all`}
    >
      <span
        className="absolute left-1 top-1 lg:hidden cursor-pointer"
        onClick={() => setShowUserPanelSidebar(false)}
      >
        <IoIosArrowRoundForward size={35} color="white" />
      </span>
      <div className="flex flex-col gap-3 items-center justify-center px-9 py-8 border-b-1 border-[#cacaca] ">
        <Avatar
          src={
            userInfos.currentPictureAddress == "Not-set"
              ? "/src/assets/images/notFound/images.png"
              : userInfos.currentPictureAddress
          }
          className="w-28 h-28 text-large"
        />
        <p className="text-xl text-white">
          {userInfos.fName} {userInfos.lName}
        </p>
      </div>
      <div className="flex flex-col gap-2 py-4">
        <UserPanelSidebarLink
          icon={<LuLayoutDashboard size={30} color="white" />}
          text="پیشخوان"
          link={"dashboard"}
        />
        <UserPanelSidebarLink
          icon={<PiBookOpenTextBold size={30} color="white" />}
          text="دوره‌های من"
          link={"courses"}
        />
        <UserPanelSidebarLink
          icon={<BiSolidBookHeart size={30} color="white" />}
          text="دوره های مورد علاقه"
          link={"favorite-courses"}
        />
        <UserPanelSidebarLink
          icon={<GrArticle size={30} color="white" />}
          text="مقاله های مورد علاقه"
          link={"favorite-articles"}
        />
        <UserPanelSidebarLink
          icon={<LiaUserEditSolid size={30} color="white" />}
          text="ویرایش پروفایل"
          link={"edit-profile"}
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
