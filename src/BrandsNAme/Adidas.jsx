import { useLoaderData, useParams } from "react-router-dom";


const Adidas = () => {
    const { bName, photo, name, description, type, price } = useParams()
    console.log(bName, photo, name, description, price, type);
    const loadedData = useLoaderData()
    console.log(loadedData)

    const products = loadedData.filter(product => product.bName === bName)


    return (
        <div>
            {
                products.map(product => <span key={product._id}  >

                    {/* <div className="lg:p-28 text-center text-2xl ">
                <h1 >Brand Name:{bName} </h1> 
                <h2>Product Name:{product.name}</h2>
                <h2>Product-Type:{product.type}</h2>
                <p>Description:{product.description}</p>
                <h1>Price:{product.price}</h1>
                <img src= alt="" />
                </div> */}
                    {/* <div className="card w-96 bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-5">
                        <figure><img src={product.photo} alt="" /></figure>
                        <div className="card-body">

                            
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.photo}  /></figure>
                        <div className="card-body">
                        <div className=" text-center text-2xl">
                                <p>Product Name:{product.name}</p>
                                <h2>Product-Type:{product.type}</h2>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>



                </span>)
            }

        </div>
    );
};

export default Adidas;