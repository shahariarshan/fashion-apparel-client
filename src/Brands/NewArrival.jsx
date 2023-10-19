import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const NewArrival = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    return (
        <div  className=" mx-auto w-1/2" data-aos="fade-up">
           <img  src="https://i.ibb.co/zsFyxgD/4660894-2456051.jpg" alt="" />
          <div>
          <h2 className="text-2xl text-blue-400 font-mono font-bold  text-center mb-5">No new product</h2>
          </div>
        </div>
    );
};

export default NewArrival;