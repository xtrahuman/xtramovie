import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../asset/planet.png';
const NavVariable = [
    {
      id: 1,
      name: 'Rocket',
      link: '/',
    },
    {
      id: 2,
      name: 'Dragon',
      link: '/Dragon',
    },
    {
      id: 3,
      name: 'Mission',
      link: '/Mission',
    },
    {
      id: 4,
      name: 'My Profile',
      link: '/Myprofile',
    },
  ];
  
  const Navbar = () => {
  
    return (
      <nav className="navBar a-center flex">
        <div className="nav-header a-center flex">
          <img className='w-[40px] h-[40px]' src={Icon} alt="logo" />
          <h1 className="text-blue-600">Space Travelers&apos; Hub</h1>
        </div>
        <ul className="nav-ul d-flex a-center j-center">
          {NavVariable.map((NavVar) => (
            <li key={NavVar.id}>
              {/* <NavLink to={NavVar.link} className={(navData) => (navData.isActive ? 'active-link' : '')}> */}
                {NavVar.name}
              {/* </NavLink> */}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  