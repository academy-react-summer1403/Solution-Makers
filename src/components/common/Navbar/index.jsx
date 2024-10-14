import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  Avatar,
  Badge,
} from "@nextui-org/react";
import {
  useContext,
  useState,
} from "react";
import { AppContext } from "../../../context/Provider";
import {
  NavLink,
  Link,
} from "react-router-dom";
import NavMenuLink from "./NavMenuLink";
import "./index.css";

function MyNavbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const { bagIconNum } =
    useContext(AppContext);

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
            <NavLink to="/courses">
              دوره‌ها
            </NavLink>
          </li>
          <li>
            <NavLink to="/teachers">
              اساتید
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
          <ToggleTheme />
          <Link className="bg-white h-[50px] w-[50px] rounded-full hidden sm:flex items-center justify-center">
            <Badge
              content={
                bagIconNum > 0
                  ? bagIconNum
                  : null
              }
              color="primary"
              shape="circle"
              placement="top-right"
              className="-top-[2.5px] -right-[2.5px]"
            >
              <Avatar
                radius="full"
                size="sm"
                src="/src/assets/images/navbar/shopping-bag.png"
                className="w-6 h-6"
                classNames={{
                  base: "bg-white",
                }}
              />
            </Badge>
          </Link>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            radius="full"
            size="lg"
            color="primary"
            className="hidden md:inline-block"
          >
            ورود به حساب
          </Button>
        </div>
      </div>

      <NavbarMenu className="bg-[#e7f0fc] space-y-2">
        <NavMenuLink
          target=""
          title="ورود به حساب کاربری"
        />
        <NavMenuLink
          target=""
          title="پنل کاربری"
        />
        <NavMenuLink
          target=""
          title="سبد خرید"
        />
        <NavMenuLink
          target=""
          title="دوره‌ها"
        />
        <NavMenuLink
          target=""
          title="اساتید"
        />
        <NavMenuLink
          target=""
          title="ارتباط با ما"
        />
        <NavMenuLink
          target=""
          title="اخبار مقالات"
        />
        <NavMenuLink
          target=""
          title="خروج"
        />
      </NavbarMenu>
    </Navbar>
  );
}

export default MyNavbar;
