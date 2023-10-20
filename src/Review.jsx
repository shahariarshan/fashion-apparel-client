import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

import Marquee from "react-fast-marquee";

const Review = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    return (
        
        <div  data-aos="zoom-in-right ">
 <Marquee>
            <div className="card  bg-red-400 shadow-xl ml-5  ">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/d7Bzksd/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shohel</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/4F9Lc3r/portrait-smiling-blonde-woman.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Sadia</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/smsVqVH/young-happy-woman-with-ok-sign-white-shirt.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mymuna</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            <div className="card  bg-red-400 shadow-xl ml-5">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/d7Bzksd/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Shoes" className="rounded-full w-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Daddy</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-sky-600" />
                    </div>
                </div>
            </div>
            </Marquee>

        </div>

    );
};

export default Review;