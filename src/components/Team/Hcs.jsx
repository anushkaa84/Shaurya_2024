import React from 'react'
import Cards from './Cards'
import { assets1 } from '../../assets/assets'

const Hcs = () => {
    return (
        <div className='min-h-screen w-full  flex justify-center items-center p-1 sm:p-4 lg:p-0 m-0'>
            <div className="w-full min-h-[90vh] max-w-8xl bg-[#F1DBBF]   rounded-2xl flex flex-col lg:flex-row justify-center m-3 p-2 sm:p-3 overflow-scroll">
                <div className="w-full lg:w-1/3 bg-white-500 flex flex-col order-1 lg:order-2 justify-center items-center p-2 sm:p-4 text-center">
                    <h1 className="text-custom-brown text-2xl sm:text-3xl lg:text-4xl font-kaushan mb-2 sm:mb-4 lg:mb-40 relative pb-2 sm:pb-4 inline-block">
                        <span className="relative z-10 tracking-widest">HEAD COORDINATORS</span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-brown mt-2 sm:mt-4"></span>
                    </h1>
                    <p className="text-slate-600 text-xs sm:text-sm lg:text-xl font-kaushan">The Operations and Communication Society is a student-run society that aims to provide students with a platform to enhance their communication and leadership skills. The society conducts various events and workshops throughout the year to help students develop their soft skills and become better communicators.</p>
                </div>            
                <div className="w-full lg:w-2/3 bg-custom-blue flex flex-wrap gap-2 order-2 lg:order-1 sm:gap-4 lg:gap-6 p-1 sm:p-2 lg:p-5 justify-center items-center rounded-3xl overflow-y-auto">
                   {assets1.map((item)=>{
                    return (
                        <Cards key={item.key}    img={item.value}/>
                    )
                   })}
                </div>
            </div>
        </div>
    )
}

export default Hcs