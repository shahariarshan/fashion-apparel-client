import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar';



const Root = () => {
  
  return (
    <div className='dark:bg-black'>
      <div >
        <div className=" mx-auto lg:px-14   container">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <div>
         

        </div>
      </div>

    </div>
  );
};

export default Root;