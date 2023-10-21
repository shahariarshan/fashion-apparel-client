import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";




const AddToCart = () => {
  <Helmet>
    <title>
      Fashion and Apparel| Home
    </title>
  </Helmet>
  useEffect(() => {
    Aos.init();
  }, [])
  const cardDataLoad = useLoaderData()
  const [carts, setCarts] = useState(cardDataLoad)

  const handelDelete = id => {
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

        fetch(`https://fashion-apparel-server-fs716ct58.vercel.app/carts/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              // remove the cart from UI
              const remainingCarts = carts.filter(cart => cart._id !== id);
              setCarts(remainingCarts);
            }
          })
      }
    })



  }


  return (
    <div className=" lg:px-24 pt-7 space-y-6" data-aos="zoom-in-up">

      {
        carts.map(dataLoad => <div key={dataLoad._id} className="card card-compact  bg-gray-300 shadow-xl ">

          <div >


            <div className="overflow-x-auto ">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>

                    </th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>

                {/* row 4 */}
                <tr>
                  <th>

                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={dataLoad.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{dataLoad.bName}</div>
                        <div className="text-sm opacity-50">{dataLoad.type}</div>
                      </div>
                    </div>
                  </td>
                  <p><span ></span>{dataLoad.name}</p>
                  <td>{dataLoad.price}</td>
                  <button onClick={() => handelDelete(dataLoad._id)} className="btn btn-secondary">X</button>
                </tr>

                {/* foot */}

              </table>
            </div>


          </div>
        </div>)
      }
    </div>
  );
};

export default AddToCart;