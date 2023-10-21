import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { useEffect, useState } from "react";


const Navbar = () => {


  const [theme, setTheme] = useState('light')
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const handelTheme = () => {
    setTheme(theme === "dark" ? "Light" : "dark")
  }

  

  const { user, logOut } = useContext(AuthContext)
  const handelSignOut = () => {
    logOut()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  }



  const navLink = <>
    <li className="font-medium text-slate-950"><NavLink to='/'> Home</NavLink></li>
    <li className="font-medium text-slate-950"><NavLink to='/addProducts'>Add Products</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/carts'>Add Cart</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/freshItems'>New Items</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/advertisement'>Advertisement</NavLink> </li>
    <div className="form-control">
            <label className="label cursor-pointer">
             
              <input onClick={handelTheme} type="checkbox" className="toggle" checked />
            </label>
          </div>



  </>



  return (
    <div className="navbar h-24 rounded-xl  bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <img className=" w-16 lg:w-24 text-black " src="https://i.ibb.co/GnnDc1S/images-removebg-preview-1.png" alt="" />
        <div className="ml-3">
          <h2 className="text-xl lg:text-3xl font-semibold  font-mono  ">Fa<span className="text-red-400 font-mono">sh</span>ion
            <br />
            <p className="text-xl lg:text-3xl font-semibold  font-mono ">Ap<span className="from-blue-950">pe</span>ar</p>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <>
              <div className="dropdown dropdown-bottom lg:dropdown-end">
                <label tabIndex={0} className="btn">Profile</label>
                <ul tabIndex={0} className="dropdown-content z-[1] card card-compact w-28 p-2 shadow bg-primary text-primary-content">
                  <div className="overflow-x-hidden">
                    <li ><span className="">{user?.email}</span></li>
                    <li className="mx-auto"> <img className="rounded-full" src={user?.photoURL} alt="" /></li>
                  </div>
                </ul>
              </div>


              <button onClick={handelSignOut} className="btn bg-green-600 text-white">Sign Out</button>
            </>
            :
            <Link to='/login'>
              <button className="btn  bg-green-600 text-white"> Login</button>
            </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;