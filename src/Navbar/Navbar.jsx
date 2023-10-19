import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
    <li className="font-medium text-slate-950"><NavLink  to='/'> Home</NavLink></li>
    <li className="font-medium text-slate-950"><NavLink to='/addProducts'>Add Products</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/addCart'>Add Cart</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/newProduct'>New Arrivals</NavLink> </li>
    <li className="font-medium text-slate-950"><NavLink to='/advertisement'>Advertisement</NavLink> </li>
   


  </>



    return (
        <div className="navbar h-24 rounded-xl bg-gray-200">
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
  <div  className="ml-3">
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
  <Link to='/login' className="navbar-end">
    <a className="btn">Log In</a>
  </Link>
</div>
    );
};

export default Navbar;