import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePause, handlePlay, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-[#F0A500]">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data.map((song, i) => {
        return(
          <SongBar key={`${artistId}-${song.key}-${i}`} song={song} i={i} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay} />
        )
      })}
    </div>
  </div>
);

export default RelatedSongs;
