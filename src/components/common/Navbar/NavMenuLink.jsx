import { NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

function NavMenuLink(props) {
  return (
    <NavbarMenuItem>
      <Link to={props.target} className="hover:text-primary">
        {props.title}
      </Link>
    </NavbarMenuItem>
  );
}

export default NavMenuLink;
