import React from 'react'
import { BsFillGiftFill, BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Countdown = () => {
  return (
    <div className='flex md:flex-row flex-col md:justify-between justify-center items-center'>
        <div className='md:w-1/2 md:p-8'>
            <h1 className='text-white text-4xl tracking-wide py-4'>NFT Car Racing on Binance Smart Chain </h1>
            <p className='text-white tracking-wide my-4'>Racer’s Utopia is a cutting edge blockchain based NFT racing game which allows players to craft a racing career by participating in races with their top performing cars in PVE mode and compete against other players in PVP mode. By competing in these racing modes, players will be able to earn in-game rewards & Carkey/ Ckey token. </p>
        </div>
        <div className='md:w-1/2 md:p-4'>
          <h1 className='text-white text-4xl my-4'>Countdown</h1>
          <div className='flex justify-center items-center bg-[#3E00FF] my-4 rounded'>
                <button className='flex text-white tracking-wide bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                    <div className='pt-1 px-2 items-center'><BsFillArrowUpRightSquareFill /></div>
                    <span className='px-2'>Whitelist</span>
                </button>
                <button className='flex text-white tracking-wide bg-gradient-to-r from-[#79018C] to-[#4C0070] hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>                      <div className='pt-1 px-2 items-center'><BsFillGiftFill /></div>
                    <span className='px-2'>Airdrop</span>
                </button>
          </div>
        </div>
    </div>
  )
}

export default Countdown