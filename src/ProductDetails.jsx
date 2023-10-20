import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const load = useLoaderData()
    const handelCart=()=>{
        fetch('http://localhost:5000/carts',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(load)
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data)
            if(data. insertedId){
                    Swal.fire({
                        title: 'Cart Add Success!',
                        text: 'Do you want add on Cart?',
                        icon: 'success',
                        confirmButtonText: 'Great Job'
                      })
                
            }
          })
    }
        
    return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
         <div className="card card-compact w-full bg-base-100  shadow-xl">
            <figure><img src={load.photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{load.name}</h2>
                <p>{load.description}</p>
                <h3><span className="text-lg">Product Type:</span><span className="text-2xl text-orange-400 font-serif">{load.type}</span></h3>
                <h3><span className="text-lg">Price:</span><span className="text-2xl text-orange-400 font-serif">{load.price}</span></h3>
                <Link  className="card-actions justify-center">
                    <button onClick={handelCart} className="btn btn-primary">Add to Cart</button>
                </Link>
            </div>
        </div>
       </div>
    );
};

export default ProductDetails;