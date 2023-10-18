// import { Link,  useLocation,  useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// // import { AuthContext } from "./Provider/AuthProvider";
// // import swal from "sweetalert";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
// // import { ToastContainer, toast } from "react-toastify";
// import { FaEyeSlash,FaEye } from 'react-icons/fa';


import { Link } from "react-router-dom";





const Login = () => {
 

  
 
  

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

  }

    


  return (
    <div>
      
      <div className="hero">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
            <h1 className="text-2xl text-center pt-6 font-bold text-lime-800">LogIn Now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required />
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                  name="password"
                  placeholder="enter password"
                  className="input input-bordered"
                  required />
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gray-700 text-white">Login</button>
              </div>
            </form>
            <p className="text-center font-semibold text-xl mb-2">or</p>
                <div className="  mb-3">
                  <div className=" text-center gap-2 ">
                    
                    <button  className="btn w-80  text-black"> <FaGoogle ></FaGoogle>Login  with Google</button>
                  </div>
                  
                  <div className=" text-center gap-2">
                    
                    <button className="btn w-80  text-black">  <FaFacebook></FaFacebook>Login  with Facebook</button>
                  </div>
                 
                </div>
               

            <p className="p-5 pl-14">Do not have an account?<Link className="font-semibold  text-blue-800 pl-2 p-6" to='/register'>Register Now</Link></p>
           
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;