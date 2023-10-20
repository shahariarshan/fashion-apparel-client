import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const ProductDetails = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  const load = useLoaderData()
  const handelCart = () => {
    fetch('http://localhost:5000/carts', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(load)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
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
    <div >
      
      <div className="hero min-h-screen bg-base-100 lg:px-28" data-aos="zoom-in-up">
  <div className="hero-content flex-col lg:flex-row">
  <figure><img src={load.photo} alt="" /></figure>
    <div>
    <h2 className="card-title">Product name:{load.name}</h2>
    <p className="mt-4"><span className="text-lg font-semibold mr-2">Description:</span>{load.description}</p>
    <h3><span className="text-lg mt-4">Product Type:</span><span className="text-2xl text-orange-400 font-serif">{load.type}</span></h3>
          <h3><span className="text-lg mt-4">Price:</span><span className="text-2xl text-orange-400 font-serif">{load.price}</span></h3>
          <Link className="card-actions justify-start mt-4 ">
            <button onClick={handelCart} className="btn btn-primary">Add to Cart</button>
          </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductDetails;