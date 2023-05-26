import React from 'react'

export default function Hero() {
  return (
	<>
	<div className=" h-auto md:h-auto lg:h-[400px] bg-[#F6DDFF61] lg:px-10  md:mt-[50px] md:px-[90px] px-4 pt-20 items-center flex justify-center flex-col-reverse lg:flex-row md:flex-row md:gap-10 gap-10">
            <div className="xl:pt-15 w-full xl:w-1/2 relative lg:pb-0 md:pb-0 ">
			<h1 className="lexendFont my-2 text-gray-800 font-bold text-[33px] lg:text-[33px] md:text-[20px] xl:text-[33px]">
			Customize Activity Card
      </h1>

      <p className="basicFont mb-5 text-[#BF6FFF] font-medium">update, maintain & be healthy</p>
      
			</div>
                
            <div>
                <img src="/assets/images/ActivityImg.png" className="md:w-[100%] lg:w-[100%] md:mt-[-50px]" />
            </div>
        </div>

</>
  )
}
