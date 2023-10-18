import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Brand = ({b}) => {
    useEffect(()=>{
        Aos.init();
      },[])
    const {image} =b;

    return (
        <figure><img src={image} alt="" /></figure>
        //     <Link  to={`/brands/${b.brand}`} className="card p-10  shadow-xl " data-aos="zoom-in">
        //         <figure><img src={image} alt="" /></figure>
               

        // </Link >
    );
};

export default Brand;