import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const SocialFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-2xl font-bold'>Connect With Our <span className='text-teal-300'>Social Media</span></h1>
        <div className='grid grid-cols-2 md:grid-cols-4 flex justify-center items-center p-4'>
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