// components
import NavBar from './NavBar';

// Images
import HomeBg from '../assets/homebg.svg';
import Map from '../assets/Rectangle.svg';

// import reacticons
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
  return (
    <div className="w-full grid bg-gradient-to-bl from-black/[0.01] to-black/[51] relative  lg:h-screen">
      <img
        src={HomeBg}
        alt="background of a house "
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />
      <div className="w-full relative">
        {/* navigation components */}
        <NavBar className="mx-auto" />
        <div className=" flex lg:mx-10 lg:px-10 flex-col pt-8 lg:flex-row lg:justify-between lg:items-center">
          <h1 className="text-white font-['Inter'] text-center lg:font-bold lg:text-[32px] text-[16px] uppercase tracking-[-1px] lg:max-w-[50%] lg:mr-5 lg:text-left md:pr-4 md:text-[28px] lg:ml-10 ml-2 pl-4">
            {' '}
            The most affortable place to stay in the san franciso bay area
          </h1>
          <div className="mx-auto pl-4 flex flex-col items-center container">
            <img src={Map} alt="map" className="block p-0 lg:w-2/3" />
            <div className="p-2 bg-white mt-1 mb-8 rounded-md ">
              <select name="type" className="p-3 bg-[#F9F9F9] mr-0">
                <option value=""> All type </option>
              </select>
              <select name="environs" className="p-3 bg-[#F9F9F9] rounded-md ">
                <option value=""> Neighbourhood </option>
              </select>
              <button className="bg-[#23A6F0] p-3 rounded-md">
                {' '}
                <AiOutlineSearch className="text-white" />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
