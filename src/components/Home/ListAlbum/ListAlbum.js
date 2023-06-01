import { BiTimeFive } from "react-icons/bi";

import { useContext, useEffect, useState } from "react";
import { Songs } from "../../../Context";

function ListAlbum() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <table className="table-auto w-full bg-black relative ">
      <thead className="sticky top-0 bg-black text-[#C4C4C4] h-12  ">
        <tr className="">
          <th className="w-[7%] ">#</th>
          <th className="text-[14px] text-left font-[500]">TITLE</th>
          <th className="text-[14px] w-[40%] text-left font-[500]">ALBUM</th>
          <th className="w-[5%] ">
            <BiTimeFive size={"20px"} className="text-center" />
          </th>
        </tr>
      </thead>
      <tbody className=" text-white text-[14px]  ">
        {DataSongs.map((song, index) => (
          <tr
            key={index}
            className={`h-[35px] hover:bg-gradient-to-t from-slate-600 hover:duration-[350ms] hover:cursor-pointer ${
              idSong === song.id && "bg-slate-600"
            }`}
            onClick={() => handlePlaySong(song.id)}
          >
            <td className="text-center">{index + 1}</td>
            <td>{song.name}</td>
            <td>{song.author}</td>
            <td className="mr-[10px]">4:27</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListAlbum;
