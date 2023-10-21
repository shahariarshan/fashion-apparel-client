import Navbar from "../Navbar/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ErrorPage = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    
    return (
        <div  data-aos="fade-up">
            <Navbar></Navbar>
             <img className="h-[700px] w-[700px] mx-auto" src="https://i.ibb.co/zsFyxgD/4660894-2456051.jpg" alt="" />
          <div>
          <h2 className="text-2xl text-blue-400 font-mono font-bold  text-center ">No new product</h2>
          </div>
        </div>
    );
};

export default ErrorPage;