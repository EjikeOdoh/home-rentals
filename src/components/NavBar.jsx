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
      <div className=" lg:mx-10  pt-4  lg:pt-6 lg:px-10 flex items-center max-width-{900px] justify-between lg:border-b-2  lg:border-b-white/[0.1]">
        <NavLink to="/" className="pb-4 block lg:pl-10 pl-4 ml-2">
          <img src={Logo} alt="home rental logo" className="w-5/6 lg-full" />
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
      <div className="lg:hidden pr-6 mx-4" onClick={handleNav}>
        {menu ? (
          <AiOutlineClose size={30} className="text-[#F4511E] cursor-pointer" />
        ) : (
          <AiOutlineMenu size={30} className="text-[#F4511E] cursor-pointer" />
        )}
      </div>

      {/* mobile menu ul */}
      <div
        className={
          menu
            ? 'fixed top-0 left-0 flex flex-col h-full bg-[#F4511E]/100 w-[60%] text-white ease-in-out duration-1000 '
            : ` fixed left-[-100%]  top-0 ease-in-out duration-1000`
        }
      >
        <NavLink to="/" className=" block p-4 mb-2">
          <img
            src={Logo}
            alt="home rental logo"
            className="w-1/3 mix-blend-luminosity md:w-1/2"
          />
        </NavLink>
        <ul className="pt-2 px-2 flex flex-col border-t-2">
          <NavHashLink
            to="/"
            className="p-4 mb-2 text-[18px] md:text-[30px] md:hover:text-[27px] hover:text-[16px]"
          >
            Home
          </NavHashLink>
          <NavHashLink
            to="#landlord"
            className="p-4 mb-2 text-[18px] hover:text-[16px] md:text-[30px] md:hover:text-[27px]"
          >
            LandLord
          </NavHashLink>
          <NavHashLink
            to="#tenant"
            className="p-4 mb-2 text-[18px] hover:text-[16px] md:text-[30px] md:hover:text-[27px]"
          >
            Tenants
          </NavHashLink>
          <NavHashLink
            to="#contact"
            className="p-4 mb-2 text-[18px] hover:text-[16px] md:text-[30px] md:hover:text-[27px]"
          >
            Contact Us
          </NavHashLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
