import React, {useState} from 'react'
import axios from '../axios/api'
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaAngleRight } from 'react-icons/fa';
import { useFormik } from "formik";
import {userSchema} from "../schema/userSchema"

export default function Register() {

const navigate = useNavigate();
// const [data,setData] = useState({
//   name: '',
//   email:'',
//   password:''
// })

// const handleChange = ({ currentTarget: input}) => {
//   setData({...data,[input.name]:input.value});
// }


  const registerUser = async (data) => {
    //  e.target.preventDefault();
    const{name, email,password} = data;
    try{
      const {data} = await axios.post('/register',{name, email, password})
      if(data.error){
        toast.error(data.error);
    } else{
      navigate('/');
      toast.success("User Account Created Successfully!")
    }
   
   
    } catch (error) {
      console.log(error);
    }
 
  }

const initialValues = {
   name:"",
   email:"",
   password:""
   
}

const {values, errors,touched, handleBlur, handleSubmit, handleChange} = useFormik ({
    initialValues,
    validationSchema: userSchema,
    onSubmit: (values,action) => {
      console.log(values)
      registerUser(values);
      action.resetForm()
    },
  });



  return (
    <>
    <div className="loginBg h-fitContent   flex justify-center">
              <div className="box md:flex md:justify-center px-4 py-10 lg:px-4 m-auto my-5 mx-5 md:mt-10 h-auto">
          
              <div className="md:mx-7 md:w-full   ">
              <img
               className="md:mx-auto ml-10 md:h-20 md:w-auto w-[65px] float-left"
              src="public/assets/images/logo.png"
              alt="Fitrack Logo"
            />
            <h2 className=" md:text-5xl text-4xl font-bold  pt-5 brandName">
             FITRACK
            </h2>
          <img
              className=" md:mt-5 md:h-[70%] md:w-[100%] w-[85%] mx-5 md:mx-0"
              src="public/assets/images/regimg.png"
              alt="Registration vector image"
            />
          </div>
          
          <div className="sm:mx-3 sm:w-full sm:max-w-sm  ">   
         <div>
       
         <div className=" mt-10 md:max-w-md ">
       <h2 className=" text-3xl text-center font-bold mx-auto mt-10 heading">
             SIGN UP
            </h2>
          <p className="text-md text-center text-[#BF6FFF] font-medium">come, let’s mantain your fitness!</p>
            <br/>
  
            <form className=" flex flex-col items-center justify-center" onSubmit={handleSubmit}>
      
            <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    autoComplete="name"
                    placeholder='Name *'
                    required
                    className=" w-[85%] md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  />
                  {errors.name && touched.name ? 
                 (<p className="w-[80%] mt-1 text-[12px] text-[#FF0000] ">{errors.name}</p>) :null }
              
                  <input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    autoComplete="email"
                    placeholder='Email *'
                    required
                    className=" mt-5 w-[85%] md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  />
                   {errors.email && touched.email ? 
                 (<p className="w-[80%] mt-1 text-[12px] text-[#FF0000] ">{errors.email}</p>) :null }
              
                  <input
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    autoComplete="current-password"
                    placeholder='Password *'
                    required
                    className=" mt-5  md:px-4  w-[85%] px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  />   
                  {errors.password && touched.password ? 
                 (<p className="w-[80%] mt-1 text-[12px] text-[#FF0000] ">{errors.password}</p>) :null }
              
  
              <div className="flex justify-center">
                  
                <button
                  type="submit"
                  className="flex w-32 mt-5 justify-center rounded-full text-center py-2 text-sm font-semibold bg-[#BF6FFF] text-white text-base"
                  
                >
                  continue <FaAngleRight style={{color: "#ffffff",  fontSize: '15px', marginTop:'4px', marginLeft:'7px'}} />
                 
                </button>
              </div>
            </form>
  
            <p className="md:mt-6 mt-5 text-center text-sm font-semibold text-gray-900 ">
              Already have an account?{' '}
              <Link to='/' className="font-semibold leading-6  text-[#BF6FFF] font-medium hover:text-[#743A98]" >
                Sign In
              </Link>
            </p>
            </div>
  
          </div>
          </div>
        </div>
  
        </div>
     </>
  )
}
 