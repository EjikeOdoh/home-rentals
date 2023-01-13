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
        <div className=" flex lg:mx-10 lg:px-10 flex-col pt-8">
          <h1 className="text-white font-['Inter'] text-center lg:font-bold lg:text-[52px] text-[32px] md:text-[45px] lg:ml-10 ml-2 pl-4">
            {' '}
            The most affortable place to stay in the san franciso bay area
          </h1>
          <div className="ml-2 pl-4">
            <img src={Map} alt="map" className="block p-0" />
            <div>
              <select name="type">
                <option value="">All type</option>
              </select>
              <select name="environs">
                <option value="">Neighbourhood</option>
              </select>
              <button>
                {' '}
                <AiOutlineSearch />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
