import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Songs } from "../Context";

function PlaySong() {
  const { song, handleSetSong } = useContext(Songs);
  const handleNext = () => {
    handleSetSong(song.id + 1);
  };
  const handlePre = () => {
    handleSetSong(song.id - 1);
  };
  const handleEnd = () => {
    handleSetSong(song.id + 1);
  };
  return (
    <div className="bg-[#181818]">
      <AudioPlayer
        className="playsong bg-gradient-to-t from-black to-[#181818] fixed bottom-0"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleNext}
        onClickPrevious={handlePre}
        onEnded={handleEnd}
      />
    </div>
  );
}

export default PlaySong;
