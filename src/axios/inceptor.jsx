import React from 'react'
import axios from '../axios/api'
import { toast } from "react-toastify";


 function inceptor(navigate) {
  //Response Inntercept
    axios.interceptors.response.use((response)=> {
        return response
    }, async function(error){
        if(error.response.status === 403){
            navigate('/')
            toast.error("Your session has been expired!")
            localStorage.clear()
        }    else if(error.response.status === 401){
            navigate('/')
            toast.error("You may login first!")
        }
    })

    
// Request interceptor for API calls
const token = localStorage.getItem("token")
axios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
 }
export default inceptor
