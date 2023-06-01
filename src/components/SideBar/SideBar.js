import Image from "./Image/Image";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import PlayList from "./Playlist/PlayList";

function SideBar() {
  return (
    <div className="bg-black  w-[300px] ">
      <div className="p-[6px] mb-[62px]">
        <Logo />
        <Menu />
        <PlayList />
      </div>
      <Image />
    </div>
  );
}

export default SideBar;
