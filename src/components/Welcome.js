import React from 'react'
import { AiFillPlayCircle, AiOutlinePaperClip } from 'react-icons/ai'

const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-7xl text-center text-white tracking-widest uppercase text-extrabold m-4 p-4'>Racer's Utopia</h1>
            <p className='text-lg text-center text-white tracking-wide m-2 p-2'>A decentralised Play to Earn Racing Metaverse, NFT game on Binance Smart Chain.</p>
        </div>
        <div className='flex md:flex-row flex-col m-2 p-2'>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiFillPlayCircle /></div>
                <span className='px-2'>Mint A NFT Car</span>
            </button>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiOutlinePaperClip /></div>
                <span className='px-2'>Download Whitepaper</span>
            </button>
        </div>
    </div>
  )
}

export default Welcome