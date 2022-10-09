import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.title ? (<FaPauseCircle size={35} className="text-[#F4F4F4]" onClick={handlePause} />) : (<FaPlayCircle size={35} className="text-[#F4F4F4]" onClick={handlePlay} />)
);

export default PlayPause;
