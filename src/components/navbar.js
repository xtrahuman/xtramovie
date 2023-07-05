import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../asset/planet.png';
import Container from './container';
import useSticky from './sticky';
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
    const { sticky, stickyRef } = useSticky();
    return (
      <Container className="relative">
      <nav ref={stickyRef} className={`flex ${sticky? 'sticky' : ''}  font-semibold items-center z-[9] justify-between py-5 px-10 uppercase absolute top-0 w-full left-0`}>
        <div className="nav-header a-center flex items-center gap-x-3 w-40%">
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
      {/* <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      /> */}
    </Container>
    );
  };
  
  export default Navbar;
  