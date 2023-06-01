/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { Songs } from "../../../Context";
function Image() {
  const { song } = useContext(Songs);
  return (
    <div>
      <img
        src={song.links.images[0].url}
        className="w-full h-[200px] object-cover"
      />
    </div>
  );
}

export default Image;
