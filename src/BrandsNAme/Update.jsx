import { FaBackward } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Update = () => {
    useEffect(()=>{
        Aos.init();
      },[])
    const loadData = useLoaderData();
    console.log(loadData);
    const  { name, bName, type, description,_id, price, rating, photo } =loadData
    const handelUpdateCard = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const bName = form.bName.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updateProduct = { name, bName, type, description, price, rating, photo }

        console.log(updateProduct);

        fetch(`https://fashion-apparel-server-fs716ct58.vercel.app/products/${_id}`,{
            method:"PUT",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(updateProduct)
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0
                ){
                    Swal.fire({
                        title: 'Update Success!',
                        text: 'Do you want to Update?',
                        icon: 'success',
                        confirmButtonText: 'Great Job'
                      })
                
            }
          })
        }

    return (
        <div className="bg-stone-500 lg:p-12" data-aos="zoom-in-right">
            <div className=" p-7 ">

                <Link to='/' className="flex btn btn-secondary">
                    <FaBackward className="text-2xl text-black"></FaBackward>
                    <span className="text-orange-400 font-serif text-xl ml-3">Go to home</span>
                </Link>
                <h2 className="text-3xl font-extrabold text-center mt-5">Update Product</h2>
                <form onSubmit={handelUpdateCard} className="mt-5" >

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name}  placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:lg:ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="bName" defaultValue={bName}  placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price}  placeholder="Price"  className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="btn bg-lime-700 w-full" />

                </form>
            </div>
        </div>
    );
};

export default Update;