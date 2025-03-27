/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import { ImMenu } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import NavbarData from "./NavbarData";

export default function NavbarLogo() {
  const { navbarMenuList } = NavbarData();

  return (
    <div className="navbar-start">
      <div className="drawer visible lg:hidden md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label htmlFor="my-drawer">
            <ImMenu className="text-third text-2xl cursor-pointer" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-second text-white min-h-full w-[85%] p-4">
            {navbarMenuList.map((list, index) => (
              <li key={index}>
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    `focus:bg-transparent active:bg-transparent hover:bg-transparent text-white text-xl hover:text-secondary hover:font-bold navbar_backgroundColor ${
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
      </div>

      <div className="text-xl playwrite-is-title text-white mr-7">
        <Link to="/">BookWorld </Link>
      </div>
    </div>
  );
}
