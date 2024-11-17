import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-semibold text-xl mb-3'>Find Us On</h2>
      <div className="join flex *:text-gray-500 *:bg-base-100 join-vertical">
        <button className="btn justify-start join-item">
          <FaFacebook className='text-blue-600'></FaFacebook> Facebook
        </button>
        <button className="btn justify-start join-item">
          <FaTwitter className='text-blue-600'></FaTwitter> Twitter
        </button>
        <button className="btn justify-start join-item">
          <FaInstagram className='text-red-700'></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;