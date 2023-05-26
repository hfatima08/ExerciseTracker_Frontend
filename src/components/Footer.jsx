import React from 'react'

export default function Footer() {
  return (
   <>
    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5 " />
      <div class="sm:flex sm:items-center sm:justify-between mb-5 px-20">
          <span class="text-sm text-black font-semibold sm:text-center dark:text-gray-400">Copyrights © 2023 FITRACK. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
              <a href="#" >
                  <img  src="/assets/images/insta-logo.png" className='w-[43px] h-[43px]'/>
              </a>
              <a href="#" >
                  <img  src="/assets/images/facebook-logo.png" className='w-[35px] h-[52px] mt-[-4px]'/>
              </a>
          </div>
      </div>
   
   </>
  )
}
