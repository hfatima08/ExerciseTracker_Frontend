import React,{useContext,useEffect,useState} from 'react'
// import {userContext} from '../../context/userContext'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ActivityTypes from '../components/ActivityTypes'
import Footer from '../components/Footer'
import UserActivities from '../components/UserActivities'
import axios from '../axios/api'
import {useNavigate, Link} from 'react-router-dom'
import { toast } from "react-toastify";
import inceptor from '../axios/inceptor'


export default function Home() {

  const navigate = useNavigate();
  const [ran,setRan] = useState(false);
  

  {/* only run setup once */}
  if(!ran){
     inceptor(navigate);
     setRan(true);
  }

  useEffect(()=>{
    (async function() {
     await axios.get("/protected")
    })()
  },[])

  // const {user} = useContext(userContext)
  return (
    <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <ActivityTypes/>
    <UserActivities/>
    <Footer/>
    {/* {user? (<h2>Hi, {user.name}!</h2>) : <p>no user</p>} */}
    </>
  )
}
