// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Sidebar  } from './components';
import { Feed } from './pages';
import Create from './pages/Create';

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#ffffff] to-[#ffffff]">
        {/* <Searchbar /> */}

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">

            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/create" element={<Create />} />

            </Routes>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default App;
