import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = (props) => {
  const {song,i} = props;
  console.log(song)

  const activeSong = {
    track: {
      id:'7lkqbdBKrsyNNq3xi0LeaY'
    } 
  };

  const handlePlayClick = () => {};
  const handlePauseClick = () => {};

 return (
<div 
  className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
  <div className="relative w-full h-56 group">
    <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${(activeSong?.track?.id === song?.track?.id)?'flex bg-black bg-opacity-70':'hidden'}`}>
     <PlayPause song={song} handlePlay={handlePlayClick} handlePause={handlePauseClick}/>
    </div>
    <img src={song?.track?.album?.images[0].url} alt="song-image" />
   </div>
   <div className="mt-4 flex flex-col">
    <p className="font-semibold text-lg text-white truncate">
      <Link to={`/songs/${song?.track?.id}`}>
      {song?.track?.name}
      </Link>
    </p>
    <p className="text-sm text-gray-300 mt-1 truncate">
      <Link to={song?.track?.artists?`/artists/${song?.track?.artists[0]?.id}`:'/top-artists'}>
      {song?.track?.artists[0]?.name}
      </Link>
    </p>

   </div>
  </div>
 )
};

export default SongCard;
