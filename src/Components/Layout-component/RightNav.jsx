import React from 'react';
import SocialLogin from '../../Layouts/SocialLogin';
import FindUs from '../../Layouts/FindUs';

const RightNav = () => {
  return (
    <div className='space-y-6'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNav;