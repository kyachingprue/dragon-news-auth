import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png';


const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div></div>
      <div className='nav flex text-slate-600 items-center space-x-3'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      <div className='flex justify-center item-center gap-3'>
        <img src={userLogo} alt="" />
        <button className='bg-neutral py-2 px-4 text-white font-semibold'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;