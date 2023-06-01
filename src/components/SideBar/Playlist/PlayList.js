import { BsPlusSquareFill, BsFillHeartFill } from "react-icons/bs";

function PlayList() {
  return (
    <div>
      <div className="py-4 ml-4 text-[12px] font-bold text-[#b2b2b2]">
        PLAYLISTS
      </div>
      <ul>
        <div className="ml-4 flex items-center py-2">
          <BsPlusSquareFill size={"26px"} className="text-[#b2b2b2]" />
          <span className="text-[#b2b2b2] text-[14px] font-semibold ml-4">
            Create Playlist
          </span>
        </div>
        <div className="ml-4 flex items-center py-2">
          <BsFillHeartFill size={"26px"} className="text-[#b2b2b2]" />
          <span className="text-[#b2b2b2] text-[14px] font-semibold ml-4">
            Liked Songs
          </span>
        </div>
      </ul>
    </div>
  );
}

export default PlayList;
