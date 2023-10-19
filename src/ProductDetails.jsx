import { Link, useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const load = useLoaderData()
    return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
         <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={load.photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{load.name}</h2>
                <p>{load.description}</p>
                <h3><span className="text-lg">Price:</span><span className="text-2xl text-orange-400 font-serif">{load.price}</span></h3>
                <Link to={`/carts/${load._id}`} className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </Link>
            </div>
        </div>
       </div>
    );
};

export default ProductDetails;