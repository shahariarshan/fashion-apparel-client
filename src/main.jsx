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
import ErrorPage from './Error/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        loader:()=>fetch(`https://fashion-apparel-server-fs716ct58.vercel.app/products`),
      },
      {
        path:'/freshItems',
        element:<NewArrival></NewArrival>
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
        path:'/advertisement',
        element:<PrivateRoute><Advertisement></Advertisement></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) => fetch(`https://fashion-apparel-server-fs716ct58.vercel.app/products/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader:({params}) => fetch(`https://fashion-apparel-server-fs716ct58.vercel.app/products/${params.id}`)

      },
      {
        path:'/carts',
        element:<PrivateRoute><AddToCart></AddToCart></PrivateRoute>,
        loader:() => fetch('https://fashion-apparel-server-fs716ct58.vercel.app/carts')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
