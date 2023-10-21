import { Link } from "react-router-dom";
import { FaBackward } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";




const AddProducts = () => {

    <Helmet>
    <title>
    Fashion and Apparel| Product Add
    </title>
</Helmet>

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const bName = form.bName.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, bName, type, description, price, rating, photo }

        console.log(newProduct);

        fetch('https://fashion-apparel-server-fs716ct58.vercel.app/products',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId
                ){
                    Swal.fire({
                        title: 'Product add Success!',
                        text: 'Want to add Product',
                        icon: 'success',
                        confirmButtonText: 'Great Job'
                      })
                
            }
          })


    }
    return (

        
      <div className="bg-stone-500  lg:p-12">
          <div className=" p-7 ">
           
           <Link to='/' className="flex btn btn-secondary">
          <FaBackward className="text-2xl text-black"></FaBackward>
           <span  className="text-orange-400 font-serif text-xl ml-3">Go to home</span>
          </Link>
          
          
       <h2 className="text-3xl font-extrabold text-center mt-5">Add a Product</h2>
       <form onSubmit={handleAddProduct} className="mt-5" >
           
           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Product Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 lg:lg:ml-4">
                   <label className="label">
                       <span className="label-text">Brand Name</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="bName" placeholder="Brand Name" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
          


           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Type</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 lg:ml-4">
                   <label className="label">
                       <span className="label-text">Description</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
         


           <div className="md:flex mb-8">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text">Price</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                   </label>
               </div>
               <div className="form-control md:w-1/2 lg:ml-4">
                   <label className="label">
                       <span className="label-text">Rating</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
          

          
           <div className="mb-8">
               <div className="form-control w-full">
                   <label className="label">
                       <span className="label-text">Photo URL</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                   </label>
               </div>
           </div>
           <input type="submit" value="Add Product" className="btn bg-lime-700 w-full" />

       </form>
   </div>
      </div>
    );
};

export default AddProducts;