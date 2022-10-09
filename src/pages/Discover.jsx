import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetSongsByGenreQuery } from '../redux/sevices/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice'


const Discover = () => {

    // analogikan state itu sebuah CAKE, cake ada beberapa Bagian.
    // disptach, untuk membuat perubahan,
    // selector untuk memilih bagian

    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

    // const { data, isFetching, error } = useGetTopChartsQuery();
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
    console.log('genre', data);
    const genreTitle = genres.find(({value}) => value === genreListId)?.title;
    if(isFetching) return <Loader title="Loading Songs..." />;
    
    if(error) return <Error />;
    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-[#F0A500] text-left">Discover { genreTitle || 'Pop'}</h2>
                <select
                onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                value={genreListId || 'pop'}
                className="bg-[#1A1C20] text-[#F0A500] p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map((genre)=> {
                        return(
                            <option key={genre.value} value={genre.value}>{genre.title}</option>
                        )
                    })}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                    {data?.map((song, i) => {
                        return(
                            <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
                        )
                    })}
            </div>
        </div>
    )
}

export default Discover;
