import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'




export default function Cart() {


let {gettAllCart , deleteCart , updataCart} = useContext(CartContext);
const [cartDetils, setCartDetils] = useState(null)

async function updataCartProduect(id,count){
 let {data} = await updataCart(id,count)
 setCartDetils(data);
}


async function gettcart(){
let {data} =  await gettAllCart()
setCartDetils(data);
}

async function removeCart(id){
  console.log('helllo');
  let {data} =await deleteCart(id);
  setCartDetils(data);
  console.log(data);
}


useEffect(()=>{

  gettcart();

}, []
)

  return <>
  {cartDetils? <div className="container">
      <div className="bg-secondary-subtle py-3 my-3 mb-3">
   <div className='d-flex justify-content-between align-items-center py-3 '>
    <div>
    <h2 className='text-success'>show cart </h2>
    <h4 className='text-success'>total price:{cartDetils.data.totalCartPrice}</h4>
    </div>
    <div>
      <h4 className='text-success'>total number of items:{cartDetils.numOfCartItems}</h4>
    </div>
   </div>
 
      {cartDetils.data.products.map((product)=> <div key={product.product.id} className="row border-bottom border-light mx-1 py-2">
        <div className="col-md-1 ">
          <img src={product.product.imageCover} className='w-100 mb-5' alt="" />
        </div>
   
        <div className="col-md-11">
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h3 className='h5'>{product.product.title.split(" ").slice(0,3).join(' ')} </h3>
              <h3 className='h5 text-success'>{product.price}</h3>

            </div>
            <div>
              <button className='btn btn-outline-success p-2' onClick={()=> updataCartProduect(product.product.id , product.count +1) } >+</button>
              <span className='mx-2'>{product.count}</span>
              <button className='btn btn-outline-success p-2' onClick={()=> updataCartProduect(product.product.id , product.count -1) }  > -</button>
            </div>
         
          </div>   
          <button onClick={()=>removeCart(product.product.id)} className='btn p-0'><i class="fa-solid fa-trash text-danger"></i> Remove</button>
        </div>
      </div> )}
   
  </div>
  </div>


 :' بسم الله' }
  
  
  </>
}
