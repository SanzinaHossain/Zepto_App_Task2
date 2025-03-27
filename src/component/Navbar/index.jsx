/*
Author: Sanzina Hossain
Organization: Niret InfoTech Limited
All right reserved by @niret_dev
*/

import NavbarLogo from "./NavbarLogo";
import NavbarManuItems from "./NavbarMenuItems";

export default function Navbar() {
  //   const navigate = useNavigate();
  return (
    <div className="navbar bg-first text-white text-xs fixed top-0 left-0 right-0 z-10 shadow-lg">
      <NavbarLogo />

      <NavbarManuItems />

      <div className=" navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
