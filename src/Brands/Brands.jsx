import { Link, useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useState } from "react";


const Brands = () => {
    const cards =useLoaderData();
    
    const [items,setItems]=useState(cards)

     
    return (
       
        <div>
           
            <h2 className="text-center text-3xl font-bold mt-5 mb-5 "><span className="text-5xl text blue-400">O</span>ur <span className="text-red-500">Brands</span></h2>
            {
                 <div  className="grid grid-cols-1 md:grid-cols-3  gap-5 p-5">
                 {
                  items.map(b =><Link to={`/brands/${b.bName}`} key={b.bName}><Brand
                    
                     b={b}></Brand></Link>)
                  }
                 </div>
            }
        </div>
    );
};

export default Brands;