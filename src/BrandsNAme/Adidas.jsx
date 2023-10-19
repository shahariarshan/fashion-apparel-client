import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const Adidas = () => {
    const { bName, photo, name, description, type, price } = useParams()
    console.log(bName, photo, name, description, price, type);
    const loadedData = useLoaderData()
    console.log(loadedData)

    const products = loadedData.filter(product => product.bName === bName)


    return (
        <div>

            <Navbar></Navbar>
            {/* <div>

            {
                    products.map(p =><div key={p.id} className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img src={p.image1} className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                      </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                      <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                      </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                      <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                      </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                      <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                      </div>
                    </div>
                  </div>)
                }

            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">



               
                {
                    products.map(product => <span key={product._id}  >
                    

                


                        <div className="card card-compact  bg-gray-300 shadow-xl ">
                            <figure><img className="p-7" src={product.photo} /></figure>
                            <div className="card-body">
                                <div className=" text-center">
                                    <p><span className="text-xl font-serif  text-red-600"></span><span className="font-medium"><span className="text-2xl">{product.bName}</span></span></p>
                                    <p><span className="text-xl font-serif font-medium text-red-600">Product Name:</span>{product.name}</p>
                                    <h2 className="mt-2" ><span className="text-xl font-serif font-medium text-red-600">Product-Type:</span>{product.type}</h2>
                                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600">Price:</span>{product.price}</h2>
                                    <div className="rating mt-2">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>

                                </div>
                                <div className="card-actions justify-between">
                                    <Link to={`/details/${products._id}`}>
                                    <button className="btn btn-link">details</button>
                                    </Link>
                                    <Link to={`/update/${product._id}`}>
                                        <button className="btn btn-link">update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </span>)
                }

            </div>
        </div>
    );
};

export default Adidas;