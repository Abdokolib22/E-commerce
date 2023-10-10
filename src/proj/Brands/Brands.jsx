import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'






export default function Brands() {
 
 function getBrand(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
 }

 let {data} = useQuery("getBrand",getBrand)
 console.log(data?.data.data);
 
 return <>
  
  <div className="container py-4">
    <div className="row">
      {
        
        data?.data.data.map((brand)=> <div className='col-md-2 mb-5 '>
            <Link>
  <div className='border border-black border-1 position-relative'>
            <img src={brand.image} className='w-100'  alt="" />
          <div className='bg-white w-100 text-center py-3  h6' > {brand.name} </div>
          </div>
          </Link>

        </div> )
      }
    </div>
  </div>
  
  </>
}
