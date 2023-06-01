import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

function Menu() {
  return (
    <div>
      <ul className="flex flex-col mb-6">
        <div className="flex items-center py-2 px-4 bg-[#282828] rounded-[4px]">
          <AiFillHome size={"24px"} className="text-white" />
          <a className=" font-[500] text-white ml-4" href="">
            Home
          </a>
        </div>
        <div className="flex items-center py-2 px-4 ">
          <AiOutlineSearch size={"24px"} className="text-white" />
          <a className=" font-[500] text-white ml-4" href="">
            Search
          </a>
        </div>
        <div className="flex items-center py-2 px-4 ">
          <BiLibrary size={"24px"} className="text-white" />
          <a className=" font-[500] text-white ml-4" href="">
            Your Library
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Menu;
