import { useSelector } from 'react-redux'

import {Error, Loader, SongCard} from '../components'
import { useGetSongsBySearchQuery } from '../redux/sevices/shazamCore'
import { useParams } from 'react-router-dom'

const Search = () => {

    const { searchTerm } = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

    const songs = data?.tracks?.hits?.map((song) => song.track);
    console.log('song', songs);

    if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;
    if (error) return <Error />;

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing result for <span className='font-black'>{searchTerm}</span></h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {songs?.map((song, i) => {
                    return(
                        <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
                    )
                })}
            </div>
        </div>
    )
}

export default Search;
