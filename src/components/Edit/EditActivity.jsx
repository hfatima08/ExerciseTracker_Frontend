import React,{useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from '../../axios/api'
import {FaTimes} from 'react-icons/fa';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import { activitySchema } from '../../schema/activitySchema';
import DeleteModal from './DeleteModal';


Modal.setAppElement(document.getElementById('activities'));

export default function EditActivity() {
    const [data, setData] = useState(null)
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    // get id from url parameter
    const {id} = useParams();

    //modal css
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

  // edit modal open function
    function openModal() {
      setIsOpen(true);
    }
  
    //edit modal close function
    function closeModal() {
      setIsOpen(false);
    }


    //open delete modal function
    function showDeleteModal() { 
      setDeleteMessage("Are you sure you want to delete the Activity?")
      setDisplayConfirmationModal(true);
    };
   
    // Hide delete modal
    function hideConfirmationModal() {
      setDisplayConfirmationModal(false);
    };

    //get activity detail 
    useEffect(() => {
        if(id){
          getActivity(id);
        }
      },[id]);
  
     //form handling
     const {values, errors,touched, handleBlur, handleSubmit} = useFormik ({
      initialValues:{
       activityName: data && data.activityName,
       date: data && data.date.split('T')[0],
       duration: data && data.duration,
       description: data && data.description,

      },
      validationSchema: activitySchema,
     enableReinitialize: true, 
     
      onSubmit: (values,action) => {
         console.log(values)
         updateActivity(id,values)
         action.resetForm()
         closeModal();
      },
    });
  

  // back button
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  }

  //delete activity function
  const deleteActivity = async (id) => {
    const response = await axios.delete(`/deleteActivity/${id}`);
    
    if(response.status === 200){
      setDisplayConfirmationModal(false);
      navigate("/home");  
      toast.success("Activity Deleted!");
    } else{
        console.log("Activity Not Deleted")
    }
  }


  //get activity function
  const getActivity = async (id) => {
    const response = await axios.get(`/activity/${id}`);
    console.log(response);
    if (response.status === 200 ){
     setData(response.data);
    }
  }


  //update activity function
  const updateActivity = async (id,data) => {
    const response = await axios.put(`/updateActivity/${id}`,data);
    if(response.status === 200){
      navigate("/home");  
      toast.success("Activity Updated!");
    } else{
        console.log("Activity Not Updated!")
    }
  }
  
  return (
    <>
    <div className='container py-8 px-20' >
    <button onClick={handleGoBack} ><img src="/assets/images/backbtn.jfif" width="30px" className=" inline-flex items-center mr-3  "/> Go Back </button>
    <h2 className="text-3xl font-bold dark:text-white md:mt-[30px] mt-[40px]">ACTIVITY</h2>
<hr class=" lg:w-32 w-[130px] mt-[10px] h-0.5 bg-[#BF6FFF] border-0 lg:mb-[60px] mb-[40px] "/>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 md:gap-10">

<div> 
<h1 className='text-lg font-bold float-left mr-5'>Name: </h1>
<p  className='text-lg'>{data && data.activityName}</p>
</div>

<div>
<h1 className='text-lg font-bold float-left  mr-5'>Date: </h1>
<p  className='text-lg'>{data && data.date.split('T')[0]}</p>
  </div>

  <div> 
<h1 className='text-lg font-bold'>Description: </h1>
<p  className='text-lg  break-words'>{data && data.description}</p>
</div>

<div>
<h1 className='text-lg font-bold float-left mr-5'>Duration: </h1>
<p  className='text-lg'>{data && data.duration} minutes</p>
  </div>

<div></div>

<div>
<button
                type="submit"
                onClick={openModal}
                className="flex h-[45px] w-[150px] lg:w-[150px] md:mb-[10px] mb-[10px] mr-[10px] lg:mr-[10px] md:w-[170px] justify-center items-center rounded-full float-left  text-center  text-[17px] font-normal bg-[#039E4A]  text-white text-base">
                 Edit Activity        
            </button>

            <button
                type="submit"
                onClick= {showDeleteModal}
                className="flex h-[45px] w-[150px] lg:w-[150px] md:w-[170px] justify-center items-center rounded-full text-center  text-[17px] font-normal bg-[#D10606]  text-white text-base">
                 Delete Activity        
            </button>
</div>

  </div>
  </div>

{/* Delete confirmation modal */}
<DeleteModal showModal={displayConfirmationModal} confirmModal={()=>deleteActivity(id)} hideModal={hideConfirmationModal} message={deleteMessage}/>
 
{/* Modal Start */}
  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        >

           <div className='mb-2'>
            <h1 className='font-bold mt-2  heading'>
           
            Edit ACTIVITY
           </h1>
           <button onClick={closeModal} className='float-right lg:mt-[-20px] md:mt-[-20px] mt-[-20px]'><FaTimes  style={{color: "#545454",fontSize: '20px',float:"left"}} /></button>
          </div>
          <hr className='mb-4'/>
       
          <form  onSubmit={handleSubmit} >

          <select id="activityName" name="activityName" 
          onChange={e => setData({...data, activityName: e.target.value})}
          onBlur={handleBlur}
          value={values.activityName}
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
                  onChange={e => setData({...data, date: e.target.value})}
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
                  onChange={e => setData({...data, duration: e.target.value})}
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
                onChange={e => setData({...data, description: e.target.value})}
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
