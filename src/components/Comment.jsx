// import components
import CommentProfile from './CommentProfile.jsx';

// import Image
import cover from '../assets/cover.svg';
// import react icons
import { ImQuotesLeft } from 'react-icons/im';
import { BsCircle } from 'react-icons/bs';

function Comment() {
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
      <div className="lg:max-w-[50%] w-full h-max-full md:order-last order-first">
        <img
          src={cover}
          alt="beautiful home decor"
          className="w-full  object-cover"
        />
      </div>
    </div>
  );
}

export default Comment;
