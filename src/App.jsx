import {Routes, Route,createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import ProtectedRoute from './ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react'
// import { UserContext } from '../context/userContext'
import { ToastContainer } from 'react-toastify';
import AddEdit from './pages/AddEdit'
import NotFound from './pages/NotFound'
// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.withCredentials = true ;


const UserContext = createContext()

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/home',
    element: <ProtectedRoute />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: '/home/detail/:id',
        element: <AddEdit />,
      },
    ]
  },
  {
    path:'*',
    element:<NotFound/>
  }
  
]);

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState("false");
  return (
    <>
    {/* <UserContext> */}
    <ToastContainer position="top-center"/>
    <RouterProvider router={routes} />
  
      {/* </UserContext> */}
    </>
  )
}

export default App
