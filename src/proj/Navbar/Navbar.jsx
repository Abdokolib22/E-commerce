import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
// import { CounterContext } from '../../Context/Context'
import { UserContext } from '../../Context/UserContext'


export default function Navbar() {
// let navgate =Navigate()

let navgate =useNavigate()
// let {counter} =useContext(CounterContext)
let {uesrToken, setUserToken} =useContext(UserContext)

function Logout() {
  localStorage.removeItem('uesrToken')
  setUserToken(null)
  navgate('/login')
   // navgate('/login')
}
  return<>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand text-success" to="#">
    <i class="fa-solid fa-cart-shopping"></i>fresh Cart</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
       {uesrToken !== null?
         <>
        <li class="nav-item">
          <Link class="nav-link" to="">Home </Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="cart">Cart</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="wishlist">Wish List</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="products">Products</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="categories">Catrgories</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="brands">Brands</Link>
        </li>
        
        </> :""
      }
      

      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
        <a class="nav-link" href=" "> <i class="fa-brands fa-facebook"></i></a>
        </li>
         
        <li class="nav-item">
        <Link class="nav-link" to=""> <i class="fa-brands fa-twitter"></i></Link>
        </li>
         
        <li class="nav-item">
        <a class="nav-link" href=""><i class="fa-brands fa-instagram"></i></a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href=""><i class="fa-brands fa-tiktok"></i></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href=""><i class="fa-brands fa-youtube"></i></a>
        </li>
          {uesrToken !==null? <li class="nav-item">
          <span class="nav-link cursor-pointer" onClick={()=>Logout()} >Logout</span>
        </li>:<>
           <li class="nav-item">
          <Link class="nav-link" to="register">Registe</Link>
        </li>
         
        <li class="nav-item">
          <Link class="nav-link" to="login">Login</Link>
        </li>
        </>
      
          }
       
         
       
      </ul>
    </div>
  </div>
</nav>
  
  </>
}
