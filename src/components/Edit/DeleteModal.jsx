import React from 'react'
import Modal from 'react-modal';
import { ModalBody, ModalHeader } from 'reactstrap';

const DeleteModal = ({ showModal, hideModal, confirmModal,  message }) => {

    
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
    return (
<Modal
       isOpen={showModal}
       style={customStyles}
       >

<div className='mb-2'>
   <h1 className='font-bold mt-2 '>
   Delete Confirmation
  </h1>
 </div>
 <hr className='mb-4'/>
 <div >{message}</div>

<div className='pt-5 float-right'>
 <button   
 className="flex h-[33px] w-[90px]  justify-center items-center  text-center float-left mr-10px text-[17px] font-normal "
 onClick={()=>hideModal()}>
           Cancel
 </button>
 <button  
 className="flex h-[33px] w-[90px]  justify-center items-center rounded-full text-center  text-[17px] font-normal bg-[#D10606]  text-white text-base"
 onClick={() => confirmModal() }>
           Delete
</button>

</div>
</Modal>
    )
}


 
export default DeleteModal;