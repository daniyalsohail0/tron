import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-5xl tracking-widest m-2 p-2'>Features</h1>
        <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='flex flex-col bg-[#3E00FF] rounded m-2 p-2'>
                <h1 className='text-white text-4xl m-2 p-2'>Own Collectibles</h1>
                <p className='text-white text-xl m-2 p-2'>Own cars, racetracks, car rentals, workshops, gas station</p>
            </div>
            <div className='flex flex-col bg-[#3E00FF] rounded m-2 p-2'>
                <h1 className='text-white text-4xl m-2 p-2'>Multiple Race Modes</h1>
                <p className='text-white text-xl m-2 p-2'>PVE – Various game modes against AI</p>
                <p className='text-white text-xl m-2 p-2'>PVP – Race against other players </p>
            </div>
            <div className='flex flex-col bg-[#3E00FF] rounded m-2 p-2'>
                <h1 className='text-white text-4xl m-2 p-2'>Collect Rewards</h1>
                <p className='text-white text-xl m-2 p-2'>Many valuable in-game rewards which you can trade on NFT Market place </p>
            </div>
            <div className='flex flex-col bg-[#3E00FF] rounded m-2 p-2'>
                <h1 className='text-white text-4xl m-2 p-2'>Staking & Governance </h1>
                <p className='text-white text-xl m-2 p-2'>Passive income by staking Ckey tokens</p>
            </div>
        </div>
    </div>
  )
}

export default Features