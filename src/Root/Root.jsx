import{Outlet} from 'react-router-dom'
import { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

const handelTheme=() =>{
  setTheme(theme==="dark" ? "Light" :"dark")
}
    return (
        <div className='dark:bg-black'>
            <div className=" mx-auto lg:px-14   container">
            <button onClick={handelTheme}  className="btn font-medium text-slate-950">Dark Mode </button>
                <Navbar></Navbar>
               </div>
            <div>
               <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;