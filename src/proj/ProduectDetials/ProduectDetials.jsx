import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

import toast from 'react-hot-toast'



export default function ProduectDetials() {

  let {addProduectCart} = useContext(CartContext)

async function addCart(id){
  let response= await addProduectCart(id)
  if(response.data.status === 'success'){
    toast.success("Product added")
  }else{
    toast.error(' Product Not added')
  }
  console.log(data);
 }




  let {id} = useParams()

  function getProduectData(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  let {isLoading , isError , data} = useQuery('getProduectData', () => getProduectData(id) )

  console.log(data?.data.data);
  let dataD =data?.data.data
    return <>
    <h1>بسم الله</h1>
    {data?.data.data? <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img className='w-100' src={dataD.imageCover} alt="" />
        </div>
        
        <div className="col-md-8">
          <h2>{dataD.title}</h2>
          <p>{dataD.description}</p>

          <div className='d-flex justify-content-between'>

            <span>price :{dataD.price} EGP</span>
          <span><i class="fa-solid fa-star"></i>{dataD.ratingsAverage}</span>
          </div>
          
          <div onClick={()=> addCart(dataD.id)} className="btn btn-success w-100 text-white mt-4">add to cart</div>
        </div>
        
      </div>
    </div>
    
    :""}
    
    </>
}
