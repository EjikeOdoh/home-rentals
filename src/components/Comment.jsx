import { useRef, useState } from 'react';

// import components
import CommentProfile from './CommentProfile.jsx';

// import Video
import VideoBg from '../assets/homerental.mp4';

// import react icons
import { ImQuotesLeft } from 'react-icons/im';
import { BsCircle, BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

function Comment() {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(true);
  const [shown, setShown] = useState(false);

  const handlePlay = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      setPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <div className=" flex lg:justify-between bg-[#f4511e12] flex-col md:flex-row ">
      <div className="lg:ml-[129px] ml-2 pl-4  lg:max-w-[50%] lg:pt-[130px]  w-full pt-8 md:pt-6 pr-8  text-justify">
        <p className="text-[#18191F] lg:pr-16">
          <ImQuotesLeft className="text-[#F4511E]/60 md:text-[0.5px]" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <CommentProfile />
        <div className="slider flex pt-[10px] lg:pt-[70px] mb-4 md:pb-0 mt-4 md:mt-0">
          <BsCircle className="bg-[#F4511E]/70 text-[#F4511E]/70 rounded-full mr-2 cursor-pointer hover:bg-white" />
          <BsCircle className="bg-[#F4511E]/70 text-[#F4511E]/70 rounded-full mr-2 cursor-pointer hover:bg-white" />
          <BsCircle className="bg-[#F4511E]/70 text-[#F4511E]/70 rounded-full mr-2 cursor-pointer hover:bg-white" />
        </div>
      </div>
      <div
        className="lg:max-w-[50%] w-full h-max-full md:order-last order-first relative"
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {/* <img
          src={cover}
          alt="beautiful home decor"
          className="w-full  object-cover"
        /> */}
        <video
          src={VideoBg}
          autoPlay
          loop
          className="object-cover w-full h-full"
          ref={videoRef}
        />
        {shown && (
          <button
            className="absolute left-[50%] top-[45%] "
            onClick={handlePlay}
          >
            {playing ? (
              <BsFillPlayFill className="text-red-500 text-[2rem] lg:text-[4rem]" />
            ) : (
              <BsPauseFill className="text-red-500 text-[2rem] lg:text-[4rem]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Comment;
