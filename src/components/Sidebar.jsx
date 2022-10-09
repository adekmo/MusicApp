import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri';
import {HiOutlineMenu} from 'react-icons/hi';


import { logonew2 } from '../assets';
import {links} from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    { links.map((item) => {
      return (
        <NavLink key={item.name} to={item.to} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-[#F4F4F4] hover:text-[#F0A500]" onClick={() => handleClick && handleClick()}>
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      )
    })};
  </div>
);

const Sidebar = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#0d0e10]">
        <img src={logonew2} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {menuOpen ? (<RiCloseLine className="w-6 h-6 text-[#F0A500] mr-2" onClick={() => setMenuOpen(false)} />) : (<HiOutlineMenu className="w-6 h-6 text-[#F0A500] mr-2" onClick={() => setMenuOpen(true)} />)}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#1A1C20] backdrop-blur-lg z-10 p-6 md-hidden smooth-transition ${menuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logonew2} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
}

export default Sidebar;
