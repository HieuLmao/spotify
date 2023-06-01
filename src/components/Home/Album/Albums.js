function Albums() {
  return (
    <div className="h-[280px] bg-gradient-to-b from-[#101211] to-[#34120f] ">
      <div className="flex ml-[25px] mt-[100px] absolute gap-6">
        <div className="w-[150px] ">
          <img
            className="rounded-[20px] drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]"
            src="https://cdns-images.dzcdn.net/images/cover/fc585114bde1e3b2ebe6d5c079d2f884/264x264.jpg"
            alt="album"
          />
        </div>
        <div className="text-white">
          <p className="text-[10px] font-bold mt-5">PLAYLIST</p>
          <p className="text-[45px] font-[700] leading-[68px]">Pop Right Now</p>
          <span className="text-[10px] text-[#C4C4C4] font-[500]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </span>
          <div className="flex gap-3 items-center">
            <span className="font-bold text-[14px]">Spotify</span>
            <span className="text-[10px] font-bold text-[#C4C4C4]">
              860,025 likes
            </span>
            <span className="text-[10px] font-bold text-[#C4C4C4]">
              100 songs,7hr 22min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Albums;
