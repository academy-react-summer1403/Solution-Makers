import { Navbar, NavbarMenuToggle, NavbarMenu, Button, Avatar, Badge, } from "@nextui-org/react";
import NavMenuItem from "./NavMenuItem";
import { useContext, useState } from "react";
import { AppContext } from "../../context/Provider";
import { NavLink, Link } from "react-router-dom";
import "./MyNavbar.css";

function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { bagIconNum } = useContext(AppContext);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{ wrapper: "max-w-[full]" }}
    >
      <div className="container h-[50px] flex justify-start px-0 md:px-4 md:justify-between items-center gap-2">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link to="/">
          <div className="hidden md:flex items-center gap-2">
            <img src="/src/assets/images/navbar/Group 33.png" />
            <p>هگزا اسکواد</p>
          </div>
        </Link>
        <ul className="hidden md:flex gap-12">
          <li>
            <NavLink to="/courses">دوره‌ها</NavLink>
          </li>
          <li>
            <NavLink to="/teachers">اساتید</NavLink>
          </li>
          <li>
            <NavLink to="/contact">ارتباط با ما</NavLink>
          </li>
          <li>
            <NavLink to="/articles">اخبار مقالات</NavLink>
          </li>
        </ul>
        <div className="hidden md:flex justify-between items-center gap-4">
          <Link className="bg-white h-[50px] w-[50px] rounded-full hidden md:flex items-center justify-center">
            <Badge
              content={bagIconNum > 0 ? bagIconNum : null}
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
          <Button radius="full" size="lg" color="primary">
            ورود به حساب
          </Button>
        </div>
      </div>

      <NavbarMenu className="space-y-2">
        <NavMenuItem target="" title="ورود به حساب کاربری" />
        <NavMenuItem target="" title="پنل کاربری" />
        <NavMenuItem target="" title="سبد خرید" />
        <NavMenuItem target="" title="دوره‌ها" />
        <NavMenuItem target="" title="اساتید" />
        <NavMenuItem target="" title="ارتباط با ما" />
        <NavMenuItem target="" title="اخبار مقالات" />
        <NavMenuItem target="" title="خروج" />
      </NavbarMenu>
    </Navbar>
  );
}

export default MyNavbar;
