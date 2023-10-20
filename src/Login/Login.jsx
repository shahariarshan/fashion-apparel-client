import { Link,  useLocation,  useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import { FaEyeSlash,FaEye } from 'react-icons/fa';

import { AuthContext } from "../Provider/AuthProvider";





const Login = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  
  const {signIn, googleSign} = useContext(AuthContext)
  const location =useLocation()

  const handelGoogleSignIn=()=>{
    googleSign()
    .then(result=>{
      console.log(result.user)
      navigate(location?. state? location.state : '/')

    })
    .catch( error => {
      console.error(error)

    })
  }

  
  
  const [loginError,setLogInError]= useState('')
  const [show,setShow] =useState(false)
  const navigate = useNavigate();
  

  

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)



    signIn(email,password)
      .then(result => {
        console.log(result.user)
        e.target.reset();
        navigate(location?.state? location.state : '/')
      })
      .catch(error => {
        console.error(error)
        toast("Password invalid ,please try again ");
      })
  }


  return (
    <div>

      
      <div className="hero" data-aos="fade-down-right">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0   shadow-2xl bg-gray-200">
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
              </div>
              <div className="form-control">
                <label className="label">
                  <div className="flex relative">
                  <span className="label-text">Password</span>
                  <div  onClick={() => setShow(!show)} className="absolute mt-11 ml-56 lg:ml-72">
                    {show? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </div>
                  </div>
                </label>
                <input type={ show ? "password" :" text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-gray-700 text-white">Login</button>
              </div>
            </form>
            <p className="text-center font-semibold text-xl mb-2">or</p>
                <div className="  mb-3">
                  <div className=" text-center gap-2 ">
                    
                    <button onClick={handelGoogleSignIn} className="btn w-80  text-black"> <FaGoogle ></FaGoogle>Login  with Google</button>
                  </div>
                  <ToastContainer />
                 
                 
                </div>
                {
                  loginError && <p>{toast}</p>
                }

            <p className="p-5 pl-14">Do not have an account?<Link className="font-semibold  text-blue-800 pl-2 p-6" to='/register'>Register Now</Link></p>
           
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;