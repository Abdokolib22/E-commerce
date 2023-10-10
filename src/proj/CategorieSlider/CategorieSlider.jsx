import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

import Slider from "react-slick";
export default function CategorieSlider() {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 1
        }
    


function getCate(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}

let {data} =useQuery("getCate",getCate)
console.log(data); 

  return <>
  {data?.data.data ? 
    <Slider {...settings}>
        {data?.data.data.map((cat)=> <img className='w-100' height={200} src={cat.image} alt="" /> )}
    </Slider>

  :''}
  
  </>
}
