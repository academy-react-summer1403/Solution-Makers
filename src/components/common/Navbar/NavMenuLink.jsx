import { NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

function NavMenuLink({ target, title, func }) {
  return (
    <NavbarMenuItem onClick={func}>
      <Link to={target} className="hover:text-primary">
        {title}
      </Link>
    </NavbarMenuItem>
  );
}

export default NavMenuLink;
