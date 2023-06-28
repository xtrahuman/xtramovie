import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../asset/planet.png';
import Container from './container';
const NavVariable = [
    {
      id: 1,
      name: 'home',
      link: '/',
    },
    {
      id: 2,
      name: 'tvshow',
      link: '/tvshow',
    },
    {
      id: 3,
      name: 'movies',
      link: '/movies',
    },
    {
      id: 4,
      name: 'contact',
      link: '/contact',
    },
    {
      id: 4,
      name: 'signIn',
      link: '/signIn',
    },
  ];
  
  const Navbar = () => {
    return (
      <Container>
      <nav className="navBar a-center flex items-center justify-between py-5">
        <div className="nav-header a-center flex items-center gap-x-3">
          <img className='w-8 h-8' src={Icon} alt="logo" />
          <h1 className="text-blue-600">xtraMovie</h1>
        </div>
        <ul className="nav-ul flex justify-between w-[60%]">
          {NavVariable.map((NavVar) => (
            <li key={NavVar.id} >
              <NavLink to={NavVar.link} className={(navData) => (navData.isActive ? "text-[#e4d804]" : '')}>
                {NavVar.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
    );
  };
  
  export default Navbar;
  