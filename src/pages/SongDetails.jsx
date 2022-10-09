import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/sevices/shazamCore'



const SongDetails = () => {
    const { songid } = useParams();
    const dispatch = useDispatch();
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    console.log('songid', songid);

    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    console.log('song', songData);

    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });
    console.log('related', data);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    }

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    }

    if (isFetchingRelatedSongs || isFetchingSongDetails) return <Loader title="searching song details" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />

            <div className='mb-10'>
                <h2 className="text-[#F0A500] text-3xl font-bold">Lyrics :</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((Line, i) => (
                        <p className="text-[#F4F4F4] text-base my-1">{Line}</p>
                    )) : <p className="text-[#F4F4F4] text-base my-1">Sorry, no lyrics found!</p>}
                </div>
            </div>

            <RelatedSongs data={data} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePauseClick} handlePlay={handlePlayClick} />
        </div>
    )
}


export default SongDetails;
