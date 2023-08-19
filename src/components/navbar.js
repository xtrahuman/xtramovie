import React, { Fragment, useEffect  } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../asset/XtraMovieLogo.png";
import Container from "./container";
import useSticky from "./sticky";
import { Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout, setAuthenticated } from "../redux/authentication/action";
import { userprofile } from "../utility";

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
  const { user, loggedin } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (userprofile) {
      dispatch(setAuthenticated(userprofile));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
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
        <ul className="nav-ul flex justify-between w-[60%] items-center a-center">
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
          {loggedin ? (
            <li key="logout">
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 p-3 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:[#e4d804]">
                    <span className="sr-only">Open user menu</span>
                    <div className="overflow-hidden">
                      {/* <UserPhoto
                  photo={currentUser?.photo}
                  altText={currentUser?.full_name}
                  slug=""
                  size="medium"
                /> */}
                      {user.user?.username || user?.username}
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-[#0D1B2A] ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <Menu.Item>
                      {({ active }) => (
                        <>
                          <NavLink
                            // to={`/users/${currentUser?.slug}`}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer hover:text-[#e4d804]"
                            )}
                          >
                            Your Profile
                          </NavLink>
                          <NavLink
                            to={`/watchlists`}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer hover:text-[#e4d804]"
                            )}
                          >
                            watchlists
                          </NavLink>
                          <NavLink
                            // to={`/users/${currentUser?.slug}`}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer hover:text-[#e4d804]"
                            )}
                          >
                            purchases
                          </NavLink>

                          <span
                            onClick={() => dispatch(logout())}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer hover:text-[#e4d804]"
                            )}
                          >
                            Logout
                          </span>
                        </>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ) : (
            <li key="login">
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? "text-[#e4d804]" : ""
                }
                onClick={closeMobileMenu}
              >
                Signin
              </NavLink>
            </li>
          )}
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
