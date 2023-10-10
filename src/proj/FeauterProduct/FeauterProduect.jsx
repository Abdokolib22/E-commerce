import axios from 'axios'
import React, { useContext} from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

import style from './FeauterProduct.module.css'


export default function FeauterProduect() {

let {addProduectCart} = useContext(CartContext)

async function addCart(id){
  let response= await addProduectCart(id)
  if(response.data.status === 'success'){
    toast.success( "Product  added")
  }else{
    toast.error("Product Not added")
  }
  console.log(data);
 }

 
function getFeauterProduect(){
  return  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}



let {isLoading , data } =useQuery('FeauterProduect',getFeauterProduect,{
    enabled:true
})

  return <>
  {
    isLoading?<div className={style.Fea}>
     <PacmanLoader color="#36d7b7"  />
    </div>: <div className="container py-3">
       
    <div className="row">
        {
            data?.data.data.map((produect)=><div key={produect.id} className='col-md-2'>
                <Link to={`/produectdetials/${produect._id}`}>
 <div className="produect px-3 py-3 cursor-pointer">
                    <img className='w-100' src={produect.imageCover} alt="" />
                    <span className='text-success '>{produect.category.name}</span>
                    <h3 className='h6'>{produect.title.split(" ").slice(0,2).join}</h3>
                    <div className='d-flex justify-content-between mt-2 align-items-center'>
                        <span>{produect.price}EGP</span>
                        <span><i class="fa-solid fa-star"></i>{produect.ratingsAverage}</span>
                    </div>
                
                </div>

                </Link>
                   <div onClick={()=> addCart(produect.id)} className="btn text-align-center text-white btn-success mt-2">add to cart </div>
            </div>)
        }
    </div>
  </div>
  }
 
  </>
}
