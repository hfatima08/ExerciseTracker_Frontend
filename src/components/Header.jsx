import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const name = localStorage.getItem("userName");
  const navigate = useNavigate();

  //logout function
  const logout = () =>{
      localStorage.clear();
      navigate("/")
      toast.success("User Logged-out Successfully!")
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  p-4">
  <Link to="/home"  className="flex items-center">
      <img src="/assets/images/logo.png" className="mr-3 md:ml-10 h-[57px] w-[55px]" alt="Fitrack Logo"/>
      <span className="self-center md:text-4xl text-4xl font-bold   pt-2 brandName">FITRACK</span>
  </Link>
  <div className="flex ">
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-default">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-2 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/home" className="block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 md:dark:text-[#BF6FFF]" aria-current="page">Home</Link>
      </li>
      <li>
        <HashLink to="/home#activities" smooth className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#BF6FFF] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Activities</HashLink>
      </li>
      <li>
      <button  type="button"  onClick={toggleDropdown}><img src='/assets/images/userIcon.png' class="w-[45%]"/></button>
 {isOpen && (
<div class=" absolute bg-white text-base z-1000 list-none divide-y divide-gray-100 rounded shadow my-4">
    <div class="px-4 py-3">
    <span class="block text-sm">@{name}</span>
    </div>
    <ul class="py-1" aria-labelledby="dropdown">
    <li>
        <button type="button" onClick={()=>logout()} class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign Out</button>
    </li>

    </ul></div>)}
      </li>
     
    </ul>
  </div>
  </div>
</nav> 

  )
}
