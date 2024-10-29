import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavLink,
  Link,
} from "react-router-dom";
import NavMenuLink from "./NavMenuLink";
import ToggleTheme from "../ToggleTheme";
import BagIcon from "../BagIcon";
import "./index.css";
import {
  getItem,
  removeItem,
} from "../../../core/services/common/storage";
import { isLogin } from "../../../utils/auth";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const navigate = useNavigate();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-[#e7f0fc] dark:bg-dark-200 md:px-6 py-2 static",
        wrapper: "max-w-[full]",
      }}
    >
      <div className="w-full h-[50px] flex justify-start sm:justify-between sm:px-4 items-center gap-2">
        <NavbarMenuToggle
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          className="md:hidden"
        />
        <Link to="/">
          <div className="hidden sm:flex items-center gap-2">
            <img src="/src/assets/images/navbar/Group 33.png" />
            <p>هگزا اسکواد</p>
          </div>
        </Link>
        <ul className="hidden md:flex gap-12">
          <li>
            <NavLink to="/">
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">
              دوره‌ها
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              ارتباط با ما
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles">
              اخبار مقالات
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-4">
          <ToggleTheme
            hideInMobile={true}
          />
          <Link className="bg-white h-[50px] w-[50px] rounded-full hidden sm:flex items-center justify-center">
            <BagIcon />
          </Link>
          {isLogin() && (
            <Popover
              placement="bottom-start"
              offset={15}
              classNames={{
                content:
                  "hidden md:inline-flex dark:border-2",
                trigger:
                  "hidden md:inline-flex",
              }}
            >
              {isLogin() && (
                <PopoverTrigger>
                  <Avatar
                    src={
                      getItem(
                        "userInfos"
                      ) &&
                      getItem(
                        "userInfos"
                      ).userImage[0]
                        .puctureAddress
                    }
                    size="md"
                    className="dark:border-2 cursor-pointer"
                  />
                </PopoverTrigger>
              )}
              <PopoverContent className="items-start gap-1 px-4 py-2">
                <Link
                  to="/my-panel/dashboard"
                  className="hover:text-primary"
                >
                  پنل کاربری
                </Link>
                <Link
                  to="/my-panel/edit-profile"
                  className="hover:text-primary"
                >
                  ویرایش پروفایل
                </Link>
                <Link className="hover:text-primary">
                  خروج
                </Link>
              </PopoverContent>
            </Popover>
          )}
          {isLogin() ? (
            <Button
              onClick={() => {
                removeItem("token");
                removeItem("userId");
                removeItem("userInfos");
                navigate("/login");
              }}
              radius="full"
              size="lg"
              color="primary"
              className="hidden md:inline-block"
            >
              خروج از حساب
            </Button>
          ) : (
            <Button
              onClick={() =>
                navigate("/login")
              }
              radius="full"
              size="lg"
              color="primary"
              className="hidden md:inline-block"
            >
              ورود به حساب
            </Button>
          )}
        </div>
      </div>

      <NavbarMenu className="bg-[#e7f0fc] dark:bg-dark-200 space-y-2">
        {!isLogin() && (
          <NavMenuLink
            target="/login"
            title="ورود به حساب کاربری"
          />
        )}
        <NavMenuLink
          target="/"
          title="صفحه اصلی"
        />
        {isLogin() && (
          <NavMenuLink
            target="/my-panel/dashboard"
            title="پنل کاربری"
          />
        )}
        <NavMenuLink
          target="/courses"
          title="دوره‌ها"
        />
        <NavMenuLink
          target="/articles"
          title="اخبار مقالات"
        />
        <NavMenuLink
          target=""
          title="سبد خرید"
        />
        {isLogin() && (
          <NavMenuLink
            target="/login"
            title="خروج"
            func={() => {
              removeItem("token");
              removeItem("userId");
              removeItem("userInfos");
            }}
          />
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default MyNavbar;
