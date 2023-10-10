import axios from "axios";
import { createContext } from "react";
// import {  useQuery } from "react-query";



export let CartContext = createContext();




 let headers={
      token : localStorage.getItem('usertoken')
    } 


    function addProduectCart(id){
        console.log(id);

      return  axios.post('https://ecommerce.routemisr.com/api/v1/cart',
        {
            productId : id
        },
        {
            headers:headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
  
    function gettAllCart(){
    return    axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            headers:headers
        }).then((response)=>response)
        .catch((err)=>err)
        }

    function deleteCart(id){

      return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
            headers:headers
        }
        ).then((response)=>response)
        .catch((error)=>error)
    }
    function updataCart(id , count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {count:count},{headers:headers}).then((response)=>response)
        .catch((error)=>error)
    }

export default function CartProduectProvider(props){

   

    return<CartContext.Provider value={{addProduectCart , gettAllCart , deleteCart , updataCart}}>
        {props.children}
    </CartContext.Provider>
}