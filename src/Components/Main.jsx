import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <HomeLayout></HomeLayout>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;