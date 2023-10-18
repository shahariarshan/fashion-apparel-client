import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import AddProducts from './Add Products/addProducts';
import Adidas from './BrandsNAme/Adidas';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,

        loader:()=>fetch('/brands.json')
      },
     
      {
        path:'/addProducts',
        element:<AddProducts></AddProducts>
      },
      {
        path:'/brands/:bName',
        element:<Adidas></Adidas>,
        loader:()=>fetch(`http://localhost:5000/products`),
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
