import { NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IconMenu2 />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/instructors">Instructors</NavLink>
              </li>
              <li>
                <NavLink to="/membership">Membership</NavLink>
              </li>
            </ul>
          </div>
          <img src="/logo.jpg" alt="logo" className=" h-24 w-24" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/membership">Membership</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Join</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
