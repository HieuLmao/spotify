import { BsSpotify } from "react-icons/bs";

function Logo() {
  return (
    <div className="flex items-center gap-2 text-left py-6 ml-6">
      <BsSpotify size={"30px"} className="text-white" />
      <span className="text-[22px] text-white font-semibold">Spotify</span>
    </div>
  );
}

export default Logo;
