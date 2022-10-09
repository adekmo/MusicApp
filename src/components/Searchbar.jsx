import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerms, setSearchTerms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerms}`);
  }

  return(
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-[#F0A500] focus-within:text-[#F0A500]">
      <label htmlFor="search-field" className="sr-only">Search all songs</label>
      <div className="flex flex-row justify-center items-center">
        <FiSearch className="w-5 h-5 mr-4" />
        <input name="search-field" autoComplete="off" id="search-field"  placeholder="search" type="search" value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} className="flex-1 bg-transparent outline-none border-none placeholder-[#F0A500] text-base text-[#F0A500] " />
      </div>
    </form>
  )
}

export default Searchbar;
