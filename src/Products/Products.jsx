import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const products =useLoaderData();
    return (
        <div>
        <h2 className="text-4xl font-serif font-bold text-center mt-3 mb-3">Fashionable Product</h2> 
       
        <div className="bg-white" >
           
          
          <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          {
            products.map(product =><Product key={products._id} product={product}></Product>)
           }
          </div>
          </div>
        </div>
    );
};

export default Products;