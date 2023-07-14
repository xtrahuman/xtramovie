import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../asset/XtraMovieLogo.png";
import Container from "./container";
import useSticky from "./sticky";

// mobileToggle.addEventListener('click', mobilemenu);

const NavVariable = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "tvshow",
    link: "/tvshow",
  },
  {
    id: 3,
    name: "movies",
    link: "/movies",
  },
  {
    id: 4,
    name: "about",
    link: "/about",
  },
  // {
  //   id: 5,
  //   name: "signIn",
  //   link: "/signIn",
  // },
];

const Navbar = () => {
  const mobileToggle = document.querySelector("#mobile_menu");
  const nav = document.querySelector(".nav-flex");
  const bodyfixed = document.querySelector("body");
  const { sticky, stickyRef } = useSticky();

  const mobilemenu = () => {
    mobileToggle.classList.toggle("toggle-menu");
    nav.classList.toggle("toggle");
    bodyfixed.classList.toggle("static");
  };

  const closeMobileMenu = () => {
    if (nav.classList.contains("toggle")) {
      mobileToggle.classList.toggle("toggle-menu");
      nav.classList.toggle("toggle");
      bodyfixed.classList.toggle("static");
    }
  };
  return (
    <Container className="relative">
      <div
        className="menubar absolute z-[11]"
        id="mobile_menu"
        onClick={mobilemenu}
      >
        <div className="vector"></div>
        <div className="vector"></div>
        <div className="vector"></div>
      </div>
      <nav
        ref={stickyRef}
        className={`flex ${
          sticky ? "sticky" : ""
        }  font-semibold items-center z-[11] justify-between py-2 px-10 uppercase absolute top-0 w-full left-0 nav-flex`}
      >
        <div className="nav-header a-center flex items-center gap-x-3 w-40%">
          <NavLink onClick={closeMobileMenu} to="/">
            <img className="w-[60px] h-[auto]" src={Icon} alt="logo" />
          </NavLink>
        </div>
        <ul className="nav-ul flex justify-between w-[60%] a-center">
          {NavVariable.map((NavVar) => (
            <li key={NavVar.id}>
              <NavLink
                to={NavVar.link}
                className={(navData) =>
                  navData.isActive ? "text-[#e4d804]" : ""
                }
                onClick={closeMobileMenu}
              >
                {NavVar.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      /> */}
    </Container>
  );
};

export default Navbar;
