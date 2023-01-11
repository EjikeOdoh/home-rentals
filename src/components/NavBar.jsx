import React from 'react';
import { useState } from 'react';
// react router
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

//  image import
import Logo from '../assets/logo 1.svg';

//  import icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// Navigation component
function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full lg:mx-auto flex items-center justify-between lg:block ">
      {/* Nav menu at the left*/}
      <div className=" lg:mx-10  pt-6  lg:px-10 flex items-center max-width-{900px] justify-between lg:border-b-2  lg:border-b-white/[0.1]">
        <NavLink to="/" className="pb-4 block pl-10">
          <img src={Logo} alt="home rental logo" className="w-full" />
        </NavLink>

        {/* desktop menu */}
        <div className="desktop text-white font-['DM Sans'] text-[1.125rem]  hidden lg:flex lg:items-center ">
          <NavHashLink
            to="/"
            className="lg:px-3 mr-2 lg:pb-8 pt-2 lg:hover:border-b-white lg:hover:border-b-2 lg:focus:border-b-2 lg:focus:border-b-white"
          >
            {' '}
            Home
          </NavHashLink>
          <NavHashLink
            to="#landlord"
            className="lg:px-3  mr-2 lg:pb-8 pt-2 lg:hover:border-b-white lg:hover:border-b-2 lg:focus:border-b-2 lg:focus:border-b-white "
          >
            {' '}
            LandLord
          </NavHashLink>
          <NavHashLink
            to="#tenant"
            className="lg:px-3 mr-2 lg:pb-8 pt-2 lg:hover:border-b-white lg:hover:border-b-2 lg:focus:border-b-2 lg:focus:border-b-white"
          >
            {' '}
            Tenants
          </NavHashLink>
          <NavHashLink
            to="#contact"
            className="lg:px-3 lg:pb-8 pt-2 lg:hover:border-b-white lg:hover:border-b-2 lg:focus:border-b-2 lg:focus:border-b-white"
          >
            {' '}
            Contact Us
          </NavHashLink>
        </div>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden pr-4 mx-4" onClick={handleNav}>
        {menu ? (
          <AiOutlineClose size={30} className="text-[#F4511E] cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="text-[#F4511E] cursor-pointer" />
        )}
      </div>

      {/* mobile menu ul */}
      <div
        className={
          menu
            ? 'fixed top-0 left-0 flex flex-col h-full bg-[#F4511E]/100 w-[60%] text-white'
            : ` fixed left-[-100%] `
        }
      >
        <NavLink to="/" className=" block p-4 mb-2">
          <img
            src={Logo}
            alt="home rental logo"
            className="w-1/3 mix-blend-luminosity"
          />
        </NavLink>
        <ul className="pt-2 px-2 flex flex-col border-t-2">
          <NavHashLink to="/" className="p-4 mb-2">
            Home
          </NavHashLink>
          <NavHashLink to="#landlord" className="p-4 mb-2">
            LandLord
          </NavHashLink>
          <NavHashLink to="#tenant" className="p-4 mb-2">
            Tenants
          </NavHashLink>
          <NavHashLink to="#contact" className="p-4 mb-2">
            Contact Us
          </NavHashLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
