/* eslint-disable react/prop-types */
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const BrandSlider = ({item}) => {
  useEffect(()=>{
    Aos.init();
  },[])
    // eslint-disable-next-line no-unused-vars
    const {images1,images2,images3}=item;
    console.log(item);
    return (
       <div>
         <div className="carousel w-full" data-aos="zoom-in">
        <div id="slide1" className="carousel-item lg:object-cover relative w-full">
          <img  src={item.images1} className="w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item lg:object-cover relative w-full">
          <img src={item.images2}  className="w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item lg:object-cover relative w-full">
          <img src={item.images3}  className="w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-40 lg:right-40 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
       
      </div>
       </div>
    );
};

export default BrandSlider;