import React from 'react';
import LeftNavbar from '../Components/Layout-component/LeftNavbar';
import CenterNavbar from '../Components/Layout-component/CenterNavbar';
import RightNav from '../Components/Layout-component/RightNav';

const Main = () => {
  return (
    <div className='grid grid-cols-12 gap-2'>
      <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
      <section className='col-span-6'><CenterNavbar></CenterNavbar></section>
      <aside className='col-span-3'><RightNav></RightNav></aside>

    </div>
  );
};

export default Main;