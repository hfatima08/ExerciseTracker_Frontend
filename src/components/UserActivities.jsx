import React,{useEffect,useState} from 'react'
import { FaRegClock ,FaRegCalendarAlt, FaTimes} from 'react-icons/fa';
import Modal from 'react-modal';
import { useFormik } from "formik";
import {activitySchema} from "../schema/activitySchema"
import axios from '../axios/api';
import { toast } from 'react-toastify';
import { useNavigate, Link} from 'react-router-dom';


  Modal.setAppElement(document.getElementById('activities'));

  //get activity data
  function getData(updateUI){
   return useAPI(
        '/activity',
        [],
        updateUI
      );
    }

export default function UserActivities() {
  const [updateUI, setUpdateUI] = useState(false);
  const {data } = getData(updateUI)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  //Modal open function
    function openModal() {
      setIsOpen(true);
    }
  
  //Modal close function
    function closeModal() {
      setIsOpen(false);
    }

//Modal css
    const customStyles = {
      content: {
        top: '57%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    // Form Handling
    const initialValues = {
        activityName:"",
        date:"",
        duration:"",
        description:""
     }
     
     const {values, errors,touched, handleBlur, handleSubmit, handleChange} = useFormik ({
         initialValues,
         validationSchema: activitySchema,
         onSubmit: (values,action) => {
            console.log(values)
            addProduct(values)
            action.resetForm()
            closeModal();
            getData();
         },
       });
       

       //Add product function
      const addProduct = async (data) => {
        const response = await axios.post("/addActivity", data);
        if(response.status === 201){
          toast.success("Activity Added!");
          setUpdateUI((prevState)=> !prevState)
        }
      }
     


  return (
   <>

{/* card layout */}
<div id="activities" class="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12" >
    <div className='lg:col-span-2 '></div>
    <div className='lg:col-span-8 md:col-span-4'>
   <h2 class="text-3xl  text-center font-bold dark:text-white  md:mt-[30px] mt-[40px] ">YOUR ACTIVITIES</h2>
<hr class=" lg:w-32 w-[130px] mt-[10px] h-0.5 bg-[#BF6FFF] mx-auto border-0 lg:mb-[20px]"/>
</div>
<div className=' flex justify-center items-center  lg:col-span-2  md:mt-5 md:mr-3'>
<button
                type="submit"
                onClick={openModal}
                className="flex h-[45px] w-[150px] lg:w-[150px] md:w-[270px] justify-center items-center rounded-full   text-center  text-[17px] font-normal bg-[#297FFF]  text-white text-base">
                 + Add Activity        
            </button>
            </div>
            </div>

            <div class="container p-8 grid grid-cols-1 gap-7  md:grid-cols-3 lg:grid-cols-4 " setUpdateUI={setUpdateUI}>
             
          {data.length > 0 ?
                data.sort(
                  (a, b) => new Date(a.date) - new Date(b.date)
                ).map((item, index) => {
                  return(
                <div className='flex flex-col justify-center' key={index}>
                <Link to={`/home/detail/${item._id}`}  class="block max-w-sm pb-5 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className='bg-[#F6DDFF61]'>
                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white p-5 ">{item.activityName}</h5>
                    </div>
                    <div className='px-6 py-3'>
                    <FaRegClock  style={{color: "#545454",fontSize: '25px',float:"left"}} />
                    <p class="font-normal text-gray-700 dark:text-gray-400 float-right">{item.duration} minutes</p>
                    </div>
                  
                    <div className='px-6 py-8'>
                    <FaRegCalendarAlt  style={{color: "#545454",fontSize: '25px',float:"left"}} />
                    <p class="font-normal text-gray-700 dark:text-gray-400 float-right">{item.date.split('T')[0]}</p>
                    </div>
                </Link>
                </div>
                  );
            }
          ):  <h3 class="text-3xl text-center lg:col-span-12  md:col-span-6 text-[#001AFF] font-bold dark:text-white md:mt-[30px] mt-[40px] "> No Activity Added!</h3>
                  
           }
            
            </div>


{/* Modal Start */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
    
        contentLabel="Example Modal">

           <div className='mb-2'>
            <h1 className='font-bold mt-2  heading'>
           ADD ACTIVITY
           </h1>
           <button onClick={closeModal} className='float-right lg:mt-[-20px]'><FaTimes  style={{color: "#545454",fontSize: '20px',float:"left"}} /></button>
          </div>
          <hr className='mb-4'/>
       
          <form  onSubmit={handleSubmit} >

          <select id="activityName" name="activityName" 
             onChange={handleChange}
             onBlur={handleBlur}
                    className="block w-full md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  >
               <option disabled value="null" selected>Select Activity *</option>
                <option value="Run">Run</option>
                <option value="Swim">Swim</option>
                <option value="Bicycle">Bicycle</option>
                <option value="Walk">Walk</option>
                <option value="Ride">Ride</option>
                <option value="Hike">Hike</option>
        </select>
        {errors.activityName && touched.activityName ? 
                 (<p className="w-full ml-[10px]  mt-1 text-[12px] text-[#FF0000] ">{errors.activityName}</p>) :null }
              
                <input
                  name="date"
                  type="date"
                  value={values.date}
                  min={new Date().toISOString().split('T')[0]}
                  max={"2030-01-01"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="date"
                  required
                  className="block mt-5 w-full md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  />
    {errors.date && touched.date ? 
                 (<p className="w-full ml-[10px]  mt-1 text-[12px] text-[#FF0000] ">{errors.date}</p>) :null }
              
                <input
                  name="duration"
                  type="number"
                  value={values.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  placeholder='enter duration *'
                  required
                  className="block mt-5 w-full md:px-4 px-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                  />
    {errors.duration && touched.duration ? 
                 (<p className="w-full ml-[10px] mt-1 text-[12px] text-[#FF0000] ">{errors.duration}</p>) :null }
              
                <textarea 
                id="description" 
                rows="3" 
                placeholder='enter description *'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block mt-5 w-full md:px-4 px-2 rounded-md border-0 py-2.5text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-[#BF6FFF] sm:text-sm sm:leading-6"
                />

{errors.description && touched.description ? 
                 (<p className="w-full ml-[10px] mt-1 text-[12px] text-[#FF0000] ">{errors.description}</p>) :null }
              

            <div className="flex">
              <button
                type="submit"
                className="flex w-32 justify-center rounded-full text-center py-2  mt-[10px] text-sm font-semibold bg-[#BF6FFF] text-white text-base"
              > Submit
              </button>
            </div>
          </form>
        
      </Modal>

   </>
   
  )
}

//get activity function that was called above
  function useAPI(url, initialState,updateUI){
    const [data, setData] = useState(initialState);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const getActivity = async() => {
        try{
          const response = await axios.get(url);
          if(response.status === 200){
            setData(response.data);
          }
        }catch(error){
          if (error instanceof SyntaxError) {
            setError(`something went wrong ${error.message}`);
          } else {
            setError(`An error occured, ${error.message}`);
          }
        } 
      } 

      getActivity();
      
    },[updateUI]);
  
    return {
      error,
      data,
    };
}
