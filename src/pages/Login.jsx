import React, {useEffect, useState} from 'react'
import axios from '../axios/api'
import { useNavigate, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaAngleRight } from 'react-icons/fa';
import { useFormik } from "formik";
import {loginSchema} from "../schema/loginSchema"
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../redux/slice'; 

export default function Login() {

  const navigate = useNavigate();

  //redux variables
  // const isLoggedIn = useSelector((state) => state.isLoggedIn)
  // const dispatch = useDispatch()

  //check if user is logged-in
    useEffect(()=>{
      const isLogin = localStorage.getItem("isLoggedIn")
      if(isLogin){
        navigate("/Fitrack/home")
      }
    },[])
 

  //User Login Function
  const loginUser = async (data) => {
    // e.target.preventDefault();
    const {email, password} = data;
    try{
      const {data} = await axios.post('/login',{email, password});
      if(data.error){
        toast.error(data.error);
      } else {
        localStorage.setItem('token',data.token)
        localStorage.setItem('isLoggedIn',true)
        localStorage.setItem('userName',data.user.name)
        // dispatch(setIsLoggedIn());
        navigate('/home');
        toast.success("User Logged-in Successfully!")      
      }
    } catch(error) {
      console.log(error)
    }
  
  }


 //handle form using formik
  const initialValues = {
    email:"",
    password:""
 }
 

 const {values, errors,touched, handleBlur, handleSubmit, handleChange} = useFormik ({
     initialValues,
     validationSchema: loginSchema,
     onSubmit: (values,action) => {
       console.log(values)
       loginUser(values)
       action.resetForm()
     },
   });
 
  

  return (
    <>
    <div className="loginBg h-fitContent flex justify-center">
            <div className="box md:flex md:justify-center px-4 py-10 lg:px-4 md:my-10  my-5 mx-5 md:mt-10 h-auto">
            <div className="md:mx-7 md:w-full md:max-w-sm  ">
          <img
            className="md:mx-auto ml-10 md:h-20 md:w-auto w-[65px] float-left"
            src="assets/images/logo.png"
            alt="Fitrack Logo"
          />
        <h2 className=" md:text-5xl text-4xl font-bold md:mt-5 pt-5 md:pt-0 brandName">
           FITRACK
          </h2>
       <div>
     
     <div className="md:mt-7 mt-10">
     <h2 className=" text-3xl text-center font-bold mx-auto mt-5 heading">
           SIGN IN
          </h2>
        <p className="text-md text-center text-[#BF6FFF] font-medium"> create your workout plan </p>
          <br/>
          <form  onSubmit={handleSubmit}>
        
                <input
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Email *'
                  required
                  className="block w-full px-2 md:px-4 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                />
             {errors.email && touched.email ? 
                 (<p className="w-[80%] mt-1 text-[12px] text-[#FF0000] ">{errors.email}</p>) :null }
              
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  placeholder='Password *'
                  required
                  className="block w-full  mt-5 md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                />
                {errors.password && touched.password ? 
                 (<p className="w-[80%] mt-1 text-[12px] text-[#FF0000] ">{errors.password}</p>) :null }
              

            <div className="flex justify-center">
                
              <button
                type="submit"
                className="flex w-32 justify-center  mt-5 rounded-full text-center py-2 text-sm font-semibold bg-[#BF6FFF] text-white text-base"
              >
                continue <FaAngleRight style={{color: "#ffffff",  fontSize: '15px', marginTop:'4px', marginLeft:'7px'}} />
               
              </button>
            </div>
          </form>

          <p className="md:mt-6 mt-5 text-center text-sm font-semibold text-gray-900 ">
            New User?{' '}
            <Link to='/register' className="font-semibold leading-6  text-[#BF6FFF] font-medium hover:text-[#743A98]" >
              Sign Up
            </Link>
          </p>
          </div>
        </div>
 
        </div>

        <div className="md:mt-10 mt-13 md:max-w-md max-w-full">
        <img
            className="h-full w-[1100px]"
            src="public/assets/images/loginImg.png"
            alt="Login Vector Image"
          />
        </div>
      </div>
      </div>
     
   </>
    
  
  )
}
