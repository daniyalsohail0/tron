import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl text-teal-400 py-7'>
            Features
        </h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-12 py-2'>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='border-2 border-teal-400 rounded shadow shadow-teal-400'>
                    <img src='./cars/1.jpg' alt='' />
                </div>
                <h3 className='text-white py-2'>
                    <span className='text-teal-400'>OWN</span> Collectibles
                </h3>
                <p className='text-white text-center'>
                Own cars, racetracks, car rentals, workshops, gas station
                </p>
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='border-2 border-teal-400 rounded shadow shadow-teal-400'>
                    <img src='./cars/4.jpg' alt='' />
                </div>
                <h3 className='text-white'>
                    Multiple Race Modes
                </h3>
                <p className='text-white text-center'>
                    <span className='text-teal-400'>PVE</span> – Various game modes against AI
                </p>
                <p className='text-white text-center'>
                    <span className='text-teal-400'>PVP</span> – Race against other players 
                </p>
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='border-2 border-teal-400 rounded shadow shadow-teal-400'>
                    <img src='./cars/6.jpg' alt='' />
                </div>
                <h3 className='text-white'>
                    Collect <span className='text-teal-400'>Rewards</span>
                </h3>
                <p className='text-white text-center md:py-1'>
                    Many valuable in-game rewards which you can trade on NFT Market place 
                </p>
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='border-2 border-teal-400 rounded shadow shadow-teal-400'>
                    <img src='./cars/9.jpg' alt='' />
                </div>
                <h3 className='text-white'>
                    Staking & Governance 
                </h3>
                <p className='text-white text-center py-3'>
                    Passive income by staking Ckey tokens
                </p>
            </div>
        </div>
    </div>
  )
}

export default Features