import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export default function Categories() {


  function getCat(limt,page,keyword){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`,
    {
      limt,
      page,
      keyword,
    })
  }

let {data}=useQuery("getCat",getCat)





console.log(data?.data.data);
  return <>
  
  <div className="container py-4">
    <div className="row">
      {
        data?.data.data.map((Cat)=> <div key={Cat._id} className=' col-md-4 mb-5 '>
          <Link>
  <div className='border border-success border-2 position-relative'>
            <img src={Cat.image} className='w-100' height={300} alt="" />
          <div className='bg-white w-100 text-center py-3 text-success h2' > {Cat.name} </div>
          </div>
          </Link>
           </div> )
      }
    </div>
  </div>
  
  </>
}
