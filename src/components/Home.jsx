// components
import NavBar from './NavBar';

// Images
import HomeBg from '../assets/homebg.svg';

function Home() {
  return (
    <div className="w-full grid bg-gradient-to-bl from-black/[0.01] to-black/[51] relative h-96 lg:h-screen">
      <img
        src={HomeBg}
        alt="background of a house "
        className="absolute w-full h-full object-cover mix-blend-overlay"
      />
      <div className="w-full relative">
        <NavBar className="mx-auto" />
      </div>
    </div>
  );
}

export default Home;
