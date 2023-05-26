import React from 'react'

export default function ActivityTypes() {
  return (
    <>

<div class="p-8 bg-[#F6DDFF61] ">
<h2 class="text-3xl text-center font-bold dark:text-white  md:mt-[30px] mt-[40px]">ACTIVITY TYPES</h2>
<hr class=" lg:w-32 w-[130px] mt-[10px] h-0.5 bg-[#BF6FFF] mx-auto border-0 lg:mb-[60px] mb-[40px] "/>

  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-4">
  
  <div class="flex flex-col justify-center items-center">
      <img class="h-[90px] lg:w-[100px]" src="/assets/images/run.png" />
      <br/>
      <div class="text-center text-2xl font-bold">RUN</div>
    </div>
   
    <div class="flex flex-col justify-center items-center">
      <img class="h-[90px] lg:w-[100px]" src="/assets/images/cycle.png" />
      <br/>
      <div class="text-center text-2xl font-bold">BICYCLE</div>
    </div>
   
   
    <div class="flex flex-col justify-center items-center">
      <img class="h-[90px] lg:w-[100px]" src="/assets/images/swim.png" />
      <br/>
      <div class="text-center text-2xl font-bold">SWIM</div>
    </div>
   
   
    <div class="flex flex-col justify-center items-center">
      <img class="h-[80px] lg:w-[100px]" src="/assets/images/walk.png" />
      <br/>
      <div class="text-center text-2xl font-bold">WALK</div>
    </div>
   
  
    <div class="flex flex-col justify-center items-center">
      <img class="h-[80px] lg:w-[100px]" src="/assets/images/ride.png" />
      <br/>
      <div class="text-center text-2xl font-bold">RIDE</div>
    </div>
   
    
    <div class="flex flex-col justify-center items-center">
      <img class="h-[90px] lg:w-[140px]" src="/assets/images/hike.png" />
      <br/>
      <div class="text-center text-2xl font-bold">HIKE</div>
    </div>
   
  </div>
</div>
        </>
  )
}
