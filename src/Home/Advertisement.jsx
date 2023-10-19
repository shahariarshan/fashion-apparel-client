import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Advertisement = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    return (
        <div className="hero min-h-screen  " data-aos="flip-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel w-full">
                    <div id="slide111" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/f9YbZLb/stylish-golden-watch-white-surface.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide444" className="btn btn-circle">❮</a>
                            <a href="#slide222" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide222" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Nsc7mGb/34484448-shoesoct7.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide111" className="btn btn-circle">❮</a>
                            <a href="#slide333" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide333" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/k4GrQ8h/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide222" className="btn btn-circle">❮</a>
                            <a href="#slide444" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide444" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Lx2xmkn/high-heels-black-velvet.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide333" className="btn btn-circle">❮</a>
                            <a href="#slide555" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide555" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/4WRNvGQ/11242082-49101.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide444" className="btn btn-circle">❮</a>
                            <a href="#slide111" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center ">Advertise<span className="text-red-500">Ment</span></h1>
                    
                    <div className=" mt-8 ">


                        <div>
                            <div className="carousel ">
                                <div id="slide11" className="carousel-item relative w-full">
                                    <img  src="https://i.ibb.co/Lx2xmkn/high-heels-black-velvet.jpg" className="w-auto " />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide44" className="btn btn-circle">❮</a>
                                        <a href="#slide22" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide22" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/RHvVDff/woman-posing-with-stylish-footwear-summer-fashion-bag-long-legs-shopping.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide11" className="btn btn-circle">❮</a>
                                        <a href="#slide33" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide33" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/XSfLWwC/new-smartwatch-balancing-with-hand.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide22" className="btn btn-circle">❮</a>
                                        <a href="#slide44" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide44" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/jhNHgmv/girl-coat.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide33" className="btn btn-circle">❮</a>
                                        <a href="#slide55" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide55" className="carousel-item relative w-full">
                                    <img src="https://i.ibb.co/NNTkH11/young-woman-holding-shopping-bags.jpg" className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide44" className="btn btn-circle">❮</a>
                                        <a href="#slide11" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Advertisement;