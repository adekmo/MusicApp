import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'

import {Error, Loader, SongCard} from '../components'
import { useGetSongsByCountryQuery } from '../redux/sevices/shazamCore'

const AroundYou = () => {

    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const {data, isFetching, error } = useGetSongsByCountryQuery(country)

    console.log('cont', country);

    useEffect(() => {
        // your key
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=')
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, [country])
    
    if (isFetching && loading) return <Loader title="loading songs around you" />;
    if (error && country) return <Error />;

    return(
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around You <span>{country}</span></h2>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.map((song, i) => {
                    return(
                        <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
                    )
                })}
            </div>
        </div>
    )
}

export default AroundYou;
