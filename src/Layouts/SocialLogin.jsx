import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
  return (
    <div>
      <h2 className='text-xl mb-3 font-semibold'>Login with</h2>
      <div className='*:w-full space-y-2'>
        <button className='btn text-blue-600'>
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className='btn'>
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;