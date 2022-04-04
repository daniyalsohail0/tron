import React from 'react'

const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-8 pb-8'>
        <div className='py-12'>
            <h1 className='md:text-8xl text-6xl text-[#892CDC] text-center'>
                The Executive Team
            </h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-12 py-4'>
            <div className='w-72 h-60 border-black border-2 bg-black'>
                <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                    Liam
                </h1>
                <p className='text-white px-4'>
                    CEO / Founder
                </p>
            </div>
            <div className='w-72 h-60 border-black border-2 bg-black'>
                <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                    Theo
                </h1>
                <p className='text-white px-4'>
                    Game Designer
                </p>
            </div>
            <div className='w-72 h-60 border-black border-2 bg-black'>
                <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                    Amelia
                </h1>
                <p className='text-white px-4'>
                    CFO / Fintech Expert
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 py-4'>
            <div className='w-72 h-60 border-black border-2 bg-black'>
                <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                    Avinach
                </h1>
                <p className='text-white px-4'>
                    CMO
                </p>
            </div>
            <div className='w-72 h-60 border-black border-2 bg-black'>
                <h1 className='text-[#892CDC] text-3xl px-4 py-2 uppercase'>
                    Weisheng
                </h1>
                <p className='text-white px-4'>
                    Graphic design head 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team