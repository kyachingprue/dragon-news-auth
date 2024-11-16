import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='flex items-center mt-7 bg-slate-200 py-2 px-3 gap-3'>
      <h2 className='font-semibold text-xl text-white bg-[#D72050] px-3 py-1'>Latest</h2>
      <Marquee pauseOnHover={true} speed={90} className='space-x-10'>
        <Link to="/news">
          A quick-read daily newsletter that covers tech,
          science, startups, and programming. It provides
          succinct summaries with links for further reading.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;