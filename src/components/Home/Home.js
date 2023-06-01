import Albums from "./Album/Albums";
import ListAlbum from "./ListAlbum/ListAlbum";
import PlayAlbum from "./ListSongs/PlayAlbum";

function Home() {
  return (
    <div className="w-full ">
      <Albums />
      <PlayAlbum />
      <div className="max-h-[305px] overflow-y-auto scrollbar-hide overflow-x-hidden">
        <ListAlbum />
      </div>
    </div>
  );
}

export default Home;
