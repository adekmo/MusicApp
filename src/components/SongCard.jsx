import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, isPlaying, activeSong, data}) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }

  return (
      <div className="flex flex-col w-[250px] p-4 bg-[#F0A500] bg-opacity-70 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
          <div className="relative w-full h-56 group">
            <div className={`absolute inset-0 justify-center items-center bg-[#1A1C20] bg-opacity-30 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-[#1A1C20] bg-opacity-60' : 'hidden'}`}>
              <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
            </div>
            <img alt="song_img" src={song.images?.coverart} />
          </div>

          <div className="mt-4 flex flex-col">
            <p className="font-semibold text-lg text-[#F4F4F4] truncate">
              <Link to={`/songs/${song?.key}`}>
                {song.title}
              </Link>
            </p>

            <p className="text-sm truncate text-[#e7e7e7] mt-1">
              <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artitst'}>
                {song.subtitle}
              </Link>
            </p>
          </div>
      </div>
    );
}

export default SongCard;
