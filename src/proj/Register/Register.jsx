
import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { PacmanLoader } from 'react-spinners'
import { useNavigate } from "react-router-dom";


export default function Register() {

let navigate =useNavigate();

const [error, seterror] = useState(null)
const [Loding, setLoding] = useState(false)
async function Registerfun(values) {
setLoding(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).catch(
        (err)=>{
            setLoding(false)
           seterror(err.response.data.message)
        }
    )
  if (data.message === 'success') {
    setLoding(false)
    navigate('/login')
  }
}


    let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    let validationSchema = yup.object({
        name:yup.string().min(3,'minlength is 3').max(10,'max is 10').required('your name is required'),
        phone:yup.string().matches(phoneregex,'phone is valid').required('phone is required'),
        email:yup.string().email('email invalad').required('email is required'),
        password:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'passworrd start uppercace').required('passsword is required'),
        rePassword:yup.string().oneOf([yup.ref("password")]).required('rePasssword is required'),
    
    })




    let formik= useFormik({

        initialValues:{
            name:'',
            phone:'',
            email:'',
            password:'',
            rePassword:'',
        }, validationSchema,
        onSubmit:Registerfun,
    })
  return <>
  
  <div className="w-75 mx-auto py-5">
    {error !== null?<div className="alert alert-danger p-2">{error} </div>: '' }
    
    <h2>Register Now</h2>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className='mb-3 form-control' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.name && formik.touched.name? <div className="alert alert-danger p-2 mt-2">{formik.errors.name} </div>:'' }
 
      
        <label htmlFor="phone">phone</label>
        <input type="tel" className='mb-3 form-control'id='phone'name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
         
        {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger p-2 mt-2">{formik.errors.phone} </div>:'' }
    


        <label htmlFor="email">Email</label>
        <input type="email"className='mb-3 form-control' id='email'name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />


        {formik.errors.email && formik.touched.email? <div className="alert alert-danger p-2 mt-2">{formik.errors.email} </div>:'' }

        <label htmlFor="pass">password</label>
        <input type="password"className='mb-3 form-control'id='pass'name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
       
        {formik.errors.password && formik.touched.password? <div className="alert alert-danger p-2 mt-2">{formik.errors.password} </div>:'' }

        <label htmlFor="repass">rePassword</label>
        <input type="password"className='mb-3 form-control'id='repass'name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
  
        {formik.errors.rePassword && formik.touched.rePassword? <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword} </div>:'' }
     
      { Loding?<button type='button' className='btn btn-success text-center'> <PacmanLoader color="#36d7b7" /></button>:<button disabled={!(formik.isValid && formik.dirty ) } type='submit'className='btn btn-success'>Register</button>
      
      }  
    </form>
  </div>
  
  
  </>
}
