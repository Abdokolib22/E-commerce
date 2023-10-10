
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';

import React from 'react'
import Layout from './proj/Layout/Layout';
import Home from './proj/Home/Home';
import Cart from './proj/Cart/Cart';
import Wishlist from './proj/Wishlist/Wishlist';
import Products from './proj/Products/Products';
import Categories from './proj/Categories/Categories';
import Brands from './proj/Brands/Brands';
import Register from './proj/Register/Register';

import Login from './proj/Login/Login';
import UserContextProvider from './Context/UserContext';
import ProtectedRout from './proj/ProtectedRout/ProtectedRout';
import ProduectDetials from './proj/ProduectDetials/ProduectDetials';

import CartProduectProvider from './Context/CartContext';

import { Toaster } from 'react-hot-toast';
import Nonfound from './proj/Notfound/Nonfound';






let routers =createHashRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true ,element:<ProtectedRout><Home/></ProtectedRout>},
    {path:'cart',element:<ProtectedRout><Cart/></ProtectedRout>},
    {path:'wishlist',element:<ProtectedRout><Wishlist/></ProtectedRout>},
    {path:'products',element:<ProtectedRout><Products/></ProtectedRout>},
    {path:'categories',element:<ProtectedRout><Categories/></ProtectedRout>},
    {path:'brands',element:<ProtectedRout><Brands/></ProtectedRout>},
    {path:'produectdetials/:id',element:<ProtectedRout><ProduectDetials/></ProtectedRout>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'*',element:<Nonfound/>},
    // {path:'*',element:<ProtectedRout><Home/></ProtectedRout>},
  ]}
])



export default function App() {
 
  return <>


  <UserContextProvider>
 

<CartProduectProvider>
  <Toaster/>
       
   <RouterProvider router={routers}></RouterProvider>
</CartProduectProvider>
 


 

  </UserContextProvider>
  
  
  </> 




}

