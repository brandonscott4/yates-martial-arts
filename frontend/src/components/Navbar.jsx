import { NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "../assets/YMA-logo.png";

function Navbar() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <>
      <div className="navbar sticky top-0 z-[1] bg-white shadow-md h-[110px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleHamburgerMenu}
            >
              <IconMenu2 />
            </label>
            {isHamburgerMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/" onClick={toggleHamburgerMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/instructors" onClick={toggleHamburgerMenu}>
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/classes" onClick={toggleHamburgerMenu}>
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/prices" onClick={toggleHamburgerMenu}>
                    Prices
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery" onClick={toggleHamburgerMenu}>
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://yatesfitnessandhealth.co.uk"
                    onClick={toggleHamburgerMenu}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yates Fitness
                  </a>
                </li>
              </ul>
            )}
          </div>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Yates Martial Arts logo"
              className=" h-20 w-[90px] lg:h-24 lg:w-[104px]"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/prices">Prices</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <a
                href="https://yatesfitnessandhealth.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Yates Fitness
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/contact">
            <button className="btn bg-sky-300 w-28 hover:bg-sky-400 border-0 mr-4">
              Join Us
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
