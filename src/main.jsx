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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
