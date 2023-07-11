import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../asset/2.png";
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
    name: "contact",
    link: "/contact",
  },
  {
    id: 5,
    name: "signIn",
    link: "/signIn",
  },
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
    console.log(nav.classList.contains("toggle"))
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
        }  font-semibold items-center z-[11] justify-between py-5 px-10 uppercase absolute top-0 w-full left-0 nav-flex`}
      >
        <div className="nav-header a-center flex items-center gap-x-3 w-40%">
          <img className="w-20 h-10" src={Icon} alt="logo" />
          {/* <h1 className="text-blue-600">xtraMovie</h1> */}
        </div>
        <ul className="nav-ul flex justify-between w-[60%] a-center">
          {NavVariable.map((NavVar) => (
            <li key={NavVar.id}>
              <NavLink
                to={NavVar.link}
                className={(navData) =>
                  navData.isActive ? "text-[#e4d804]" : ""
                }
                onClick={mobilemenu}
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
