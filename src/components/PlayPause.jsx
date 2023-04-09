import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa';

const PlayPause = (props) => {
  const {isPlaying,activeSong,song,handlePlay,handlePause} = props;
  return (
    (isPlaying && (activeSong?.track?.id === song?.track?.id))
    ?
    (
    <FaPauseCircle
      size={35}
      className='text-gray-300'
      onClick={handlePause}
      />
    )
    :
    (
    <FaPlayCircle
      size={35}
      className='text-gray-300'
      onClick={handlePlay}
      />
    )
  )
}


export default PlayPause;
