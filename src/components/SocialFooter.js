import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const SocialFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center md:p-28 p-8'>
        <h1 className='md:text-8xl text-3xl text-[#892CDC] text-center w-5/6'>Connect With Our Social Media</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 flex justify-center items-center p-4'>
            <button type='button' className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l m-2 px-6 py-2 rounded-xl'>
                <AiFillFacebook className='text-xl text-black' />
                <span className='text-lg font-bold px-1 text-black'>
                    Facebook
                </span>
            </button>
            <button type='button' className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l m-2 px-6 py-2 rounded-xl'>
                <AiFillInstagram className='text-xl text-black' />
                <span className='text-lg font-bold px-1 text-black'>
                    Instagram
                </span>
            </button>
            <button type='button' className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l m-2 px-6 py-2 rounded-xl'>
                <BsTwitter className='text-xl text-black' />
                <span className='text-lg font-bold px-1 text-black'>
                    Twitter
                </span>
            </button>
            <button type='button' className='flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l m-2 px-6 py-2 rounded-xl'>
                <SiDiscord className='text-xl text-black' />
                <span className='text-lg font-bold px-1 text-black'>
                    Discord
                </span>
            </button>
        </div>
    </div>
  )
}

export default SocialFooter