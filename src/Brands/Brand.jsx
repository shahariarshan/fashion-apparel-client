import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const Brand = ({b}) => {
    useEffect(()=>{
        Aos.init();
      },[])
    const {image} =b;

    return (
        <figure data-aos="zoom-in"><img src={image} alt="" /></figure>
      
    );
};

export default Brand;