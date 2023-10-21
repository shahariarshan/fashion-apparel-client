import { Link, useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import BrandSlider from "../BrandSlider";




const Adidas = () => {
    const { bName, photo, name, description, type, price } = useParams()
    console.log(bName, photo, name, description, price, type);
    const loadedData = useLoaderData()
    console.log(loadedData)
    const [slider,setSlider]=useState([])
    useEffect(()=>{
      fetch('/brands.json')
      .then(res =>res.json())
      .then(data=>setSlider(data))
    },[])

    const fetchItems = slider.filter(item => item.bName === bName)
    const products = loadedData.filter(product => product.bName === bName)


    return (
        <div>

          
            
             <h1 className="text-4xl text-center mt-4">Branded Items</h1>
             <div>
              {
                fetchItems.map(item => <BrandSlider key={item.brand} item={item}></BrandSlider>)
              }
             </div>
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
                                    <h2 className="text-xl font-serif mt-2 font-medium text-red-600">Rating:{product.rating}/5</h2>

                                </div>
                                <div className="card-actions justify-between">
                                    <Link to={`/details/${product._id}`}>
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