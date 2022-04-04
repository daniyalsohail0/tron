import React from 'react'

const VideoSec = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center py-4 w-5/6'>
            <h1 className='md:text-6xl text-3xl text-[#892CDC]'>
                The Mystery Truck.
            </h1>
            <p className='text-xl text-[#892CDC]'>Mint & reserve your mystery truck </p>
            <p className='text-white'>
                Stay connected to our <span className='text-[#892CDC] hover:cursor-pointer'>Discord</span> and <span className='text-[#892CDC] hover:cursor-pointer'>Youtube</span> channel for latest unveils. 
            </p>
            <p className='text-white'>
            There are total 7800 offered in IGO event out of which 6400 are common trucks contains ⭐️ Star cars.  
            </p>
            <p className='text-white'>
            1200 uncommon trucks contains ⭐️⭐️ Star cars & Race and 200 Rare trucks contains ⭐️⭐️⭐️ cars .
            </p>
        </div>
        <div className='flex justify-center items-center py-4 w-5/6'>
            <iframe className='md:w-[1024px] md:h-[520px] w-96 h-72 shadow-xl shadow-[#892CDC] rounded-xl' src="https://www.youtube.com/embed/HIbCq3RvUhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoSec