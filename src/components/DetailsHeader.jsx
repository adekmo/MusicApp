import { Link } from 'react-router-dom'

const DetailsHeader = ({ artistId, artistData, songData}) => {

  const artist = artistData?.artists[artistId].attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-[#F0A500] sm:h-48 h-28">
      </div>
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-[#F0A500] shadow-xl"
        />
  
        <div className="ml-5">
          <p className="text-[#F4F4F4] font-bold sm:text-3xl text-xl">{artistId ? artist?.name : songData?.title}</p>
          {!artistId && <Link to={`/artists/${songData?.artists[0].adamid}`}><p className="text-base text-[#e7e7e7] mt-2">{songData?.subtitle}</p></Link>}

          <p className="text-base text-[#e7e7e7] mt-2">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h24" />
    </div>
  )
}

export default DetailsHeader;
