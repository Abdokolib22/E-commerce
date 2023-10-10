
import axios from 'axios';
import { useFormik } from 'formik'
import React, {useContext, useState}  from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';

import { PacmanLoader } from 'react-spinners'


export default function Login() {
let {setUserToken} =useContext(UserContext)
let navigate =useNavigate();

const [error, seterror] = useState(null)
const [Loding, setLoding] = useState(false)
async function Loginfun(values) {
setLoding(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values).catch(
        (err)=>{
            setLoding(false)
           seterror(err.response.data.message)
        }
    )
  if (data.message === 'success') {
    setLoding(false)
    localStorage.setItem('usertoken',data.token)
    setUserToken(data.token)
    navigate('/')
  }
}

    let validationSchema = yup.object({
       
        email:yup.string().email('email invalad').required('email is required'),
        password:yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'passworrd start uppercace').required('passsword is required'),
    
    })




    let formik= useFormik({

        initialValues:{
            email:'',
            password:'',
        }, validationSchema,
        onSubmit:Loginfun,
    })
  return <>
  
  <div className="w-75 mx-auto py-5">
    {error !== null?<div className="alert alert-danger p-2">{error} </div>: '' }
    
    <h2>Login Now</h2>
    <form onSubmit={formik.handleSubmit}>
     
      


        <label htmlFor="email">Email</label>
        <input type="email"className='mb-3 form-control' id='email'name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />


        {formik.errors.email && formik.touched.email? <div className="alert alert-danger p-2 mt-2">{formik.errors.email} </div>:'' }

        <label htmlFor="pass">password</label>
        <input type="password"className='mb-3 form-control'id='pass'name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
       
        {formik.errors.password && formik.touched.password? <div className="alert alert-danger p-2 mt-2">{formik.errors.password} </div>:'' }
      { Loding?<button type='button' className='btn btn-success text-center'> <PacmanLoader color="#36d7b7" /></button>:
      
      <>
      <div className='d-flex align-items-center'>
 <button disabled={!(formik.isValid && formik.dirty ) } type='submit'className='btn btn-success mx-3 '>Login</button>
       <Link to={'/register'} className='btn btn-success' >Don't have account</Link>
      </div>
      
      </>
      }  
    </form>
  </div>
  
  
  </>
}

