

import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PickUp from "../PickUp";
import Review from "../Review";
import Advertisement from "./Advertisement";
import { useEffect, useState } from "react";


const Home = () => {
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
        <div className="max-w-6xl mx-auto h-screen dark:bg-black container">
            <button onClick={handelTheme}  className="btn font-medium text-slate-950">Dark Mode </button>
          
                
            

                <div>
                <Navbar></Navbar>
               </div>
               <div>
               <Banner></Banner>
               </div>

               <div className="px-9">
               <Brands></Brands>
               </div>
                <Advertisement></Advertisement>
                <div className="mx-auto container px-9" >
                   <h1 className="text-center text-4xl mb-5 font-mono font-bold">Customers <span className="text-orange-500">Review</span></h1>
                <Review></Review>
                </div>
                
               <div className="px-9">
               <Footer></Footer>
               </div>
           
        </div>
    );
};

export default Home;