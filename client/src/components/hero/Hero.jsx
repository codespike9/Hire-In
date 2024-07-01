import React from 'react'

const Hero = () => {
    return (
        <div className='flex'>
            <div className=" px-5 pt-10 md:pt-28 lg:pt-32 md:px-10 text-black md:w-1/2">
                <h1 className='text-5xl md:text-5xl font-heading font-semibold'>
                    Get desired job from the largest companies
                </h1>
                <p className='font-display mt-10'>Find jobs at any level of experience in a variety of industries at our 130k remote and local job listings.</p>

                <div className="flex gap-4 my-10 items-center">
                    <div className="py-2 px-2 bg-black flex gap-2 text-white rounded">
                        <i class="fa-brands fa-apple text-md md:text-3xl"></i>
                        <div className=''>
                            <div className='hidden xl:flex text-xs  font-display w-auto'>Download on the</div>
                            <div className='text-md font-display'>App Store</div>
                        </div>
                    </div>

                    <div className="py-2 px-2 bg-black flex gap-2 text-white rounded">
                        <i class="fa-brands fa-google-play text-md md:text-3xl text-blue-400"></i>
                        <div className=''>
                            <div className='hidden xl:flex text-xs  font-display w-auto'>Download on the</div>
                            <div className='text-md font-display'>Google Play</div>
                        </div>
                    </div>

                    <div className='mx-16'>
                        <i class="hidden lg:flex fa-solid fa-virus lg:text-7xl"></i>
                    </div>
                </div>

            </div>
            <div className='md:w-1/2 hidden md:flex justify-between lg:px-16 pt-16'>
                <img src="../../public/test.png" className=' lg:inline-block sm:h-[50vh] lg:h-[70vh] flex flex-0 justify-end' alt="hero-img" />

                <div className="hidden xl:flex flex-col gap-3 ">
                    <div className="p-6 bg-purple-300 rounded-xl flex flex-col gap-2 justify-center items-center"><div className="bg-blue-500 px-2 py-1 rounded"><i class="fa-regular fa-building text-white"></i></div><span className='font-semibold'>10,000</span><span className='text-gray-500 text-xs'>Companies</span></div>
                    <div className="p-6 bg-purple-300 rounded-xl flex flex-col gap-2 justify-center items-center"><div className="bg-yellow-300 px-2 py-1 rounded"><i class="fa-regular fa-star text-white"></i></div><span className='font-semibold'>5 Star</span><span className='text-gray-500 text-xs'>Reviews Customer</span></div>
                </div>
            </div>
        </div>
    )
}

export default Hero