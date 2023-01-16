// import image
import Person from '../assets/Ellipse 4.jpg';

function CommentProfile() {
  return (
    <div className="flex  pt-[20px]">
      <img
        src={Person}
        alt="the commenter"
        className="rounded-full pr-[10px] max-w-[20%] block"
      />
      <div className="user-name ">
        <p> Harry Wilson</p>
        <p>Property Owner</p>
      </div>
    </div>
  );
}

export default CommentProfile;
