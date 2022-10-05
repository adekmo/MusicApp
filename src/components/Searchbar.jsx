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
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">Search all songs</label>
      <div className="flex flex-row justify-center items-center">
        <FiSearch className="w-5 h-5 mr-4" />
        <input name="search-field" autoComplete="off" id="search-field"  placeholder="search" type="search" value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} className="flex-1 bg-transparent outline-none border-none placeholder-gray-500 text-base text-white " />
      </div>
    </form>
  )
}

export default Searchbar;
