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
import NewArrival from './Brands/NewArrival';
import Advertisement from './Home/Advertisement';
import Update from './BrandsNAme/Update';
import ProductDetails from './ProductDetails';
import AddToCart from './AddToCart';
import PrivateRoute from './PrivateRoute';


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
        element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path:'/brands/:bName',
        element:<PrivateRoute><Adidas></Adidas></PrivateRoute>,
        loader:()=>fetch(`http://localhost:5000/products`),
      },
     
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/newProduct',
        element:<PrivateRoute><NewArrival></NewArrival></PrivateRoute>
      },
      {
        path:'/advertisement',
        element:<PrivateRoute><Advertisement></Advertisement></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)

      },
      {
        path:'/carts',
        element:<PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
        loader:() => fetch('http://localhost:5000/carts')

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
