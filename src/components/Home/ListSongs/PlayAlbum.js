import { AiFillPlaySquare, AiOutlineHeart } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";

function PlayAlbum() {
  return (
    <div className="">
      <div className="flex gap-4 items-center  py-[16px] pl-[20px] bg-gradient-to-b from-[#271210] to-[#000]">
        <AiFillPlaySquare size={"50px"} className="text-[#1DB954]" />
        <AiOutlineHeart size={"20px"} className="text-white" />
        <SlOptions size={"20px"} className="text-white" />
      </div>
      <div></div>
    </div>
  );
}

export default PlayAlbum;
