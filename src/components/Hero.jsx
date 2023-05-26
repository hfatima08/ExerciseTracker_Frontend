import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Hero() {
  return (
	<>
	<div className=" h-auto md:h-auto lg:h-[620px] bg-[#F6DDFF61] lg:px-10 lg:pt-10 md:mt-[50px] md:px-[90px] px-4 pt-20 items-center flex justify-center flex-col-reverse lg:flex-row md:flex-row md:gap-28 gap-10">
            <div className="xl:pt-15 w-full xl:w-1/2 relative lg:pb-0 md:pb-0 lg:ml-20 lg:ml-20">
			<h1 className="lexendFont my-2 text-gray-800 font-bold text-[33px] lg:text-[33px] md:text-[20px] xl:text-[33px]">
			Maintain Your Fitness With
				Daily Activities
                            </h1>
                            <p className="basicFont mb-5 text-[#BF6FFF] font-medium">devise time for your body & mind!</p>
          <HashLink to="#howItWorks" smooth>
          <button
                type="submit"
                className="flex w-[150px] justify-center rounded-full text-center py-2.5 text-[17px] font-normal bg-[#BF6FFF] mb-10 text-white text-base"
          >
                 Let's Start  
                 </button>            
            </HashLink>
			</div>
                
            <div>
                <img src="/assets/images/home.png" className="md:w-[80%] lg:w-[90%] md:mt-[-50px]" />
            </div>
        </div>

</>
  )
}
