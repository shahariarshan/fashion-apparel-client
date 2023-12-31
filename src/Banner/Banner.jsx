import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Banner = () => {
  useEffect(()=>{
    Aos.init();
  },[])
    return (
        
        <div className="hero min-h-screen  bg-base-200" data-aos="fade-down-right">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.ibb.co/y8cjtn2/collection.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/vhmy23z/sale-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/tcHKcrH/instagram-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/LnCLQ9n/instagram-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/SPf0J6d/instagram-6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
          <div>
            <h1 className="text-5xl font-bold">Biggest Seal <br /> Up to <span className="text-red-500">50%</span></h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <div className="mx-3 ">
           
            
            <div className="drawer" >
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content items-center lg:items-start">
    
    <label htmlFor="my-drawer" className="btn btn-accent  text-cyan-700 drawer-button">Our Items</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4  min-h-full bg-stone-300 text-black text-xl font-serif">
      {/* Sidebar content here */}
      <li><a>T-Shirt </a></li>
      <li><a>Shirt</a></li>
      <li><a>Perfume</a></li>
      <li><a>Bikers Wears</a></li>
      <li><a>Leather Belts</a></li>
      <li><a>Watches</a></li>
      <li><a>Begs</a></li>
      
    </ul>
  </div>
</div>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;