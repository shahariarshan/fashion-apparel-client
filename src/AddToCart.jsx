import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";




const AddToCart = () => {
  useEffect(()=>{
    Aos.init();
  },[])
    const cardDataLoad =useLoaderData()
    const [carts,setCarts]=useState(cardDataLoad)

    const handelDelete= id =>{
        // make user confirmed to delete
        console.log(id);
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
         
            fetch(`http://localhost:5000/carts/${id}`,{
              method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              if(data.deletedCount >0){
                   Swal.fire(
              'Deleted!',
              'Your cart has been deleted.',
              'success'
            )
            // remove the cart from UI
            const remainingCarts=carts.filter(cart=>cart._id!==id);
            setCarts(remainingCarts);
               }
            })
          }
        })


      
    }

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-24 pt-7" data-aos="zoom-in-up">
          
          {
            carts.map(dataLoad => <div key={dataLoad._id} className="card card-compact  bg-gray-300 shadow-xl ">
            <figure><img className="p-7" src={dataLoad.photo} /></figure>
           <div >
           <div className="card-body ">
                <div className=" text-center">
                    <p><span className="text-xl font-serif  text-red-600"></span><span className="font-medium"><span className="text-2xl">{dataLoad.bName}</span></span></p>
                    <p><span className="text-xl font-serif font-medium text-red-600">Product Name:</span>{dataLoad.name}</p>
                    <h2 className="mt-2" ><span className="text-xl font-serif font-medium text-red-600">dataLoad-Type:</span>{dataLoad.type}</h2>
                    <h2 className="mt-2"><span className="text-xl font-serif font-medium text-red-600">Price:</span>{dataLoad.price}</h2>
                    <div className="rating mt-2">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>

                </div>
                <button onClick={()=>handelDelete(dataLoad._id)} className="btn btn-secondary">Delete</button>
                
            </div>
           </div>
        </div>)
          }
        </div>
    );
};

export default AddToCart;