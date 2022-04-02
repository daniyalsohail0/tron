import React from 'react'

const VideoSec = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-12 p-12'>
        <div className='flex flex-col justify-center items-start md:px-10'>
            <h1 className='text-white'>
                The <span className='text-teal-400'>Mystery</span> Truck.
            </h1>
            <p className='text-xl text-teal-500'>Mint & reserve your mystery truck </p>
            <p className='text-white'>
                Stay connected to our <span className='text-teal-400'>Discord</span> and <span className='text-teal-400'>Youtube</span> channel for latest unveils. 
            </p>
            <p className='text-white'>
            There are total 7800 offered in IGO event out of which 6400 are common trucks contains ⭐️ Star cars.  
            </p>
            <p className='text-white'>
            1200 uncommon trucks contains ⭐️⭐️ Star cars & Race and 200 Rare trucks contains ⭐️⭐️⭐️ cars .
            </p>
        </div>
        <div className='flex justify-center items-center py-4'>
            <iframe className='md:w-[560px] md:h-[315px] w-96 h-72 shadow-xl shadow-teal-400 rounded-xl' src="https://www.youtube.com/embed/HIbCq3RvUhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoSec