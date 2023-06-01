import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import PlaySong from "./components/PlaySong";
import SideBar from "./components/SideBar/SideBar";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else setSong(song);
  };
  return (
    <div className="relative">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <div className="flex  ">
          <SideBar />
          <Home />
        </div>
        <PlaySong />
      </Songs.Provider>
    </div>
  );
}

export default App;
