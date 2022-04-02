import React from 'react'
import { AiFillPlayCircle, AiOutlinePaperClip, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'


const Welcome = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div>
            <h1 className='text-7xl text-center text-white tracking-widest uppercase text-extrabold p-8'>Racer's Utopia</h1>
            <p className='text-lg text-center text-white tracking-wide m-2 p-2'>A decentralised Play to Earn Racing Metaverse, NFT game on Binance Smart Chain.</p>
        </div>
        <div className='flex md:flex-row flex-col m-2 p-2'>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-teal-700 to-teal-900 hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiFillPlayCircle /></div>
                <span className='px-2'>Mint A NFT Car</span>
            </button>
            <button className='flex text-white tracking-wide bg-gradient-to-r from-teal-700 to-teal-900 hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-4 md:my-0 m-2'>
                <div className='pt-1 px-2 items-center'><AiOutlinePaperClip /></div>
                <span className='px-2'>Download Whitepaper</span>
            </button>
        </div>
    </div>
  )
}

export default Welcome