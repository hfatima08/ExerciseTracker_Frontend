import React from 'react'

export default function HowItWorks() {
  return (
    <>

<h2 id="howItWorks"  class="text-3xl text-center font-bold dark:text-white  md:mt-[40px] mt-[40px]">How It Works</h2>
<hr class=" lg:w-32 w-[130px] mt-[10px] h-0.5 bg-[#BF6FFF] mx-auto border-0 md:mt-3 mb-[-40px]"/>
    <div class="flex flex-wrap justify-center items-center md:pt-[90px] py-[80px] "> 
    <div class="md:p-4 lg:w-1/3 md:w-full pb-20" >
  <div class="m-auto w-[300px] max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
    <div class="h-24 "></div>
    <div class="-mt-20 flex justify-center">
      <img class="h-[70px] rounded-full" src="/assets/images/exercise.png" />
    </div>
    <div class="mt-5 mb-1 px-3 text-center text-[#001AFF] text-2xl font-bold">PLAN</div>
    <div class="mb-5 px-3 text-center">measure your fitness, think & make a plan according to your strength.</div>
  </div>
</div>


<div class="md:p-4 lg:w-1/3 md:w-full pb-20" >
  <div class="m-auto w-[300px] max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
    <div class="h-24 "></div>
    <div class="-mt-20 flex justify-center ">
      <img class="h-[75px] pt-3" src="/assets/images/schedule.png" />
    </div>
    <div class="mt-5 mb-1 px-3 text-center text-[#001AFF] text-2xl font-bold">SCHEDULE</div>
    <div class="mb-5 px-3 text-center">Next, Create your activity card for an easy lookup of your workouts.</div>
  </div>
</div>


<div class="md:p-4 lg:w-1/3 md:w-full" >
  <div class="m-auto w-[300px] max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
    <div class="h-24 "></div>
    <div class="-mt-20 flex justify-center">
      <img class="h-[70px] " src="/assets/images/execution.png" />
    </div>
    <div class="mt-4 mb-1 px-3 text-center text-[#001AFF] text-2xl font-bold">EXECUTE</div>
    <div class="mb-3 px-3 text-center">Lastly, start the activities by following your schedule & maintain a healthy life.</div>
  </div>
</div>
</div>

    </>
  )
}
