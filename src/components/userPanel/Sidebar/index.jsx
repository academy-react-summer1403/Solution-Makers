import { useContext } from "react";
import { AppContext } from "../../../context/Provider";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiBookOpenTextBold } from "react-icons/pi";
import { BiSolidBookHeart, BiLogOut } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import { GoKey } from "react-icons/go";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import UserPanelSidebarLink from "./SidebarLink";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../../../core/services/common/storage";

function UserPanelSidebar() {
  const { showUserPanelSidebar, setShowUserPanelSidebar, userInfos } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className={`bg-primary dark:bg-dark-200 dark:border-l h-screen fixed z-50 w-[250px] ${
        showUserPanelSidebar ? "right-0" : "-right-[1000px]"
      } lg:static flex flex-col h-full lg:w-[20%] gap-2 transition-all`}
      onClick={(e) => {
        if (
          e.target.nodeName == "A" ||
          e.target.nodeName == "path" ||
          e.target.nodeName == "svg"
        ) {
          return false;
        } else {
          setShowUserPanelSidebar(false);
        }
      }}
    >
      <span
        className="absolute left-1 top-1 lg:hidden cursor-pointer"
        onClick={() => setShowUserPanelSidebar(false)}
      >
        <IoIosArrowRoundForward size={35} color="white" />
      </span>
      <div className="flex flex-col gap-3 items-center justify-center px-9 py-5 border-b-1 border-[#cacaca] ">
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
          icon={<FaRegComment size={25} color="white" />}
          text="نظرات ثبت شده"
          link={"comments"}
        />
        <UserPanelSidebarLink
          icon={<LiaUserEditSolid size={30} color="white" />}
          text="ویرایش پروفایل"
          link={"edit-profile"}
        />
        <UserPanelSidebarLink
          icon={<GoKey size={25} color="white" />}
          text="تغییر رمز عبور"
          link={"change-password"}
        />
        <div className="px-4">
          <Link
            to="/"
            className="flex justify-start items-center gap-3 py-3 px-5 rounded-xl text-white text-medium xl:text-lg hover:bg-[#1e87db] dark:hover:bg-primary"
          >
            <AiOutlineHome size={30} />
            بازگشت به خانه
          </Link>
        </div>
        <div className="px-4">
          <span
            className="flex justify-start items-center gap-3 py-3 px-5 rounded-xl cursor-pointer text-white text-medium xl:text-lg hover:bg-[#1e87db] dark:hover:bg-primary"
            onClick={() => {
              removeItem("token");
              removeItem("userId");
              removeItem("userInfos");
              navigate("/")
            }}
          >
            <BiLogOut size={30} />
            خروج از حساب
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserPanelSidebar;
