import React from 'react'
import { BsFillGiftFill, BsFillArrowUpRightSquareFill } from 'react-icons/bs'

const Countdown = () => {
  return (
    <div className='flex flex-col md:justify-between justify-center items-center pb-16'>
        <div className='md:w-3/4 md:p-8 p-4'>
            <h1 className='md:text-5xl text-3xl text-center text-[#892CDC] tracking-wide py-4'>NFT Car Racing on Binance Smart Chain </h1>
            <p className='text-white tracking-wide my-4'>Racer’s Utopia is a cutting edge blockchain based NFT racing game which allows players to craft a racing career by participating in races with their top performing cars in PVE mode and compete against other players in PVP mode. By competing in these racing modes, players will be able to earn in-game rewards & Carkey/ Ckey token. </p>
        </div>
        <div className='md:w-3/4 md:p-4'>
          <h1 className='md:text-7xl text-3xl text-center text-[#892CDC] tracking-wide py-4'>ILO EVENT</h1>
          <div className='flex flex-col justify-center items-center bg-[#79018C] my-4 p-2 rounded h-[450px]'>
            <h2 className='md:text-xl text-lg uppercase text-white'>JOIN ILO EVENT ON PINKSALE</h2>
            <div>
                <table className='text-center'>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Days</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Hours</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Mins</th>
                  <th className='text-white text-xl px-2 py-4 uppercase italic'>Secs</th>
                  <tr>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-[Barbatrick] text-white'>12:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-[Barbatrick] text-white'>13:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-[Barbatrick] text-white'>14:</td>
                    <td className='md:text-8xl text-3xl px-2 py-4 font-[Barbatrick] text-white'>15</td>
                  </tr>
                </table>
            </div>
          </div>
          <div className='flex justify-center items-center gap-2'>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-[#892CDC] to-[#52057B] hover:bg-gradient-to-r duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                    <div className='pt-1 px-2 items-center'><BsFillArrowUpRightSquareFill /></div>
                    <span className='px-2'>Whitelist</span>
                </button>
                <button className='flex text-white tracking-wide bg-gradient-to-l from-[#892CDC] to-[#52057B] hover:bg-gradient-to-r duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>                      <div className='pt-1 px-2 items-center'><BsFillGiftFill /></div>
                    <span className='px-2'>Airdrop</span>
                </button>
          </div>
        </div>
    </div>
  )
}

export default Countdown