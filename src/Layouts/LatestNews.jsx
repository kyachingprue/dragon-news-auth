import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex items-center mt-7 bg-slate-200 py-2 px-3 gap-3'>
      <h2 className='font-semibold text-xl text-white bg-[#D72050] px-3 py-1'>Latest</h2>
      <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
        <Link to="/news">
          The climate emergency is transforming lives in every corner of the world. Hear from the frontlines of the fight to keep our planet liveable.Is your phone listening to you? Is Amazon mapping your home? Can Twitter really topple governments? Dataveillance takes you to the frontiers of our watched world.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;