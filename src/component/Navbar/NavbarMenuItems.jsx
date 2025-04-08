import { NavLink } from "react-router-dom";
import NavbarData from "./NavbarData";

export default function NavbarMenuItems() {
  const { navbarMenuList } = NavbarData();
  return (
    <div className="navbar-center hidden lg:flex md:flex text-lg">
      <ul className="menu menu-horizontal px-1 text-lg focus:outline-none focus:ring-0">
        {navbarMenuList.map((list, index) => (
          <li key={index}>
            <NavLink
              to={list.path}
              className={({ isActive }) =>
                `focus:bg-transparent active:bg-transparent hover:bg-transparent text-white  hover:font-bold navbar_backgroundColor ${
                  isActive ? "navbar_Client_Link font-bold" : ""
                }`
              }
            >
              {list.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
