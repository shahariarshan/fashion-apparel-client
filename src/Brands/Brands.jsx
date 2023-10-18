import { Link, useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useState } from "react";

const Brands = () => {
    const cards =useLoaderData();
    const [items,setItems]=useState(cards)

     
    return (
       
        <div>
            {
                 <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
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