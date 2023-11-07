import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";


const NewArrival = () => {
<Helmet>
    <title>
    Fashion and Apparel| New Products
    </title>
</Helmet>

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="space-x-5 px-5" data-aos="zoom-in-up">

      <div  >
        <h2 className="text-4xl text-center text-lime-400 font-serif font-semibold mt-5">Coming <span className="text-red-600"> Soon....</span></h2>
        
        <Marquee className="mt-10 ">
        <div className="card w-96 bg-orange-400 shadow-xl ">
  <figure><img src="https://i.ibb.co/9qZtbzG/30317.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/gMR2ysk/43403.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/QkYpXr5/43404.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/gMR2ysk/43403.jpg" /></figure>
  
</div>
        
        </Marquee>
        <Marquee className="mt-10 ">
        <div className="card w-96 bg-orange-400 shadow-xl ">
  <figure><img src="https://i.ibb.co/Tb7FHJy/businessman-s-torso-suit.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/PDv5GH1/man-rings-posing-with-dagger.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/5260mF9/close-up-red-lipsticks-arrangement.jpg" /></figure>
  
</div>
        <div className="card w-96 bg-orange-400 shadow-xl">
  <figure><img src="https://i.ibb.co/w4SftC0/colored-transparent-sunglasses-still-life.jpg" /></figure>
  
</div>
        
        </Marquee>
      </div>
     <div className="">
     <Footer></Footer>
     </div>
    </div>
  );
};

export default NewArrival;