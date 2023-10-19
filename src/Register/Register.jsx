// import { useContext, useState } from "react";


// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import swal from "sweetalert";
// import { Link } from "react-router-dom";
// import { FaEyeSlash,FaEye } from 'react-icons/fa';
// import { AuthContext } from "../Provider/AuthProvider";
// // import { Helmet } from "react-helmet-async";





// const Register = () => {
  
            




//   const handleRegister = e => {
//     e.preventDefault();
//     console.log(e.currentTarget);
//     const form = new FormData(e.currentTarget);
//     const name = form.get('name')
//     const email = form.get('email')
//     const password = form.get('password')
//     const terms = form.get('terms')
//     console.log(email, password, name,terms)





//     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {

//       alert("Minimum eight characters, at least one letter, one number and one special character");
//     }
//     if(!terms){
//       alert("Please Accept Our Terms and Conditions");
//     }
//     else {
//     //   setRegError('')

//       if (email) {
//         userCreate(email, password)
//           .then(result => {
//             console.log(result.user)
           
//           })

//           .catch(error => console.error(error))

//         toast("Create Account Successfully , Please Login")
       

//       }



//     }


    






//   return (
//     <div>
    

//       <div className="hero min-h-screen  bg- from-emerald-200 ">

//         <div className="hero-content flex-col lg:flex-row-reverse ">

//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
//             <h1 className="text-2xl text-center pt-6 font-bold text-lime-800">Register Now!</h1>
//             <form onSubmit={handleRegister} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Your Full Name :</span>
//                 </label>
//                 <input type="text"
//                   name="name"
//                   placeholder="Your name"
//                   className="input input-bordered"
//                   required />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email :</span>
//                 </label>
//                 <input type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="input input-bordered"
//                   required />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                  <div className="flex relative">
//                  <span className="label-text">Password<small className="pl-2 text-blue-500">
//                   (Minimum eight characters, at least one letter, one number and one special character) </small>:</span>
                 
//                  </div>
//                 </label>
//                 <input 
//                   name="password"
//                   placeholder="Password"
//                   className="input input-bordered"
//                   required />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//                <div className="pt-3">
//                <input type="checkbox" 
//                name="terms"
//                />
//                <label htmlFor="" className="text-red-600 font-medium"> Accept our Terms and Conditions </label>
//                </div>

               
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-gray-700 text-white">
//                   Create An Account
//                 </button>

//               </div>
//             </form>
//             <p className="p-5 text-center">Have An account?<Link className="font-semibold text-blue-800 pl-2 p-6" to='/login'>Login Now</Link></p>

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Register;


import { useContext, useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { FaEyeSlash,FaEye } from 'react-icons/fa';
import { AuthContext } from "../Provider/AuthProvider";






const Register = () => {
  
  const { userCreate } = useContext(AuthContext)
  const [regError,setRegError]=useState('')
  const [show,setShow] =useState(false)



  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const terms = form.get('terms')
    console.log(email, password, name,terms)





    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {

      swal("Minimum eight characters, at least one letter, one number and one special character");
    }
    if(!terms){
      toast("Please Accept Our Terms and Conditions");
    }
    else {
      setRegError('')

      if (email) {
        userCreate(email, password)
          .then(result => {
            console.log(result.user)
           
          })

          .catch(error => console.error(error))

        toast("Create Account Successfully , Please Login")
       

      }



    }


    userCreate(email, password)
      .then(result => {
        
        console.log(result.user)
        e.target.reset();
       

      })
      .catch(error => {
        console.error(error)
      })
  }







  return (
    <div>
    

      <div className="hero min-h-screen  bg- from-emerald-200 ">

        <div className="hero-content flex-col lg:flex-row-reverse ">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
            <h1 className="text-2xl text-center pt-6 font-bold text-lime-800">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Full Name :</span>
                </label>
                <input type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required />
              </div>

              <div className="form-control">
                <label className="label">
                 <div className="flex relative">
                 <span className="label-text">Password<small className="pl-2 text-blue-500">
                  (Minimum eight characters, at least one letter, one number and one special character) </small>:</span>
                 <div onClick={() => setShow(!show)} className="absolute pt-16 ml-60 lg:ml-72">
                 { show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                 
                 </div> 
                 </div>
                </label>
                <input type={show? 'password':"text"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
               <div className="pt-3">
               <input type="checkbox" 
               name="terms"
               />
               <label htmlFor="" className="text-red-600 font-medium"> Accept our Terms and Conditions </label>
               </div>

                <ToastContainer />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-700 text-white">
                  Create An Account
                </button>

              </div>
            </form>
            <p className="p-5 text-center">Have An account?<Link className="font-semibold text-blue-800 pl-2 p-6" to='/login'>Login Now</Link></p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Register;