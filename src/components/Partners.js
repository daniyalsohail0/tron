import React from 'react'

const Partners = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-teal-400 text-6xl uppercase'>Partners</h1>
        <div className='grid md:grid-cols-5 grid-cols-2 gap-4 md:p-8 p-4'>
            <div>
                <img src='./partners/binance.png' alt='' className='md:py-10' />
            </div>
            <div>
                <img src='./partners/blizzard.png' alt='' className='md:py-4' />
            </div>
            <div>
                <img src='./partners/cryptopotato.png' alt='' className='md:py-16' />
            </div>
            <div>
                <img src='./partners/game now.png' alt='' className='md:py-20' />
            </div>
            <div>
                <img src='./partners/krystalgo.png' alt='' className='md:py-20'/>
            </div>
            <div>
                <img src='./partners/marketwatch.png' alt='' className='md:py-20'/>
            </div>
            <div>
                <img src='./partners/oxbull.png' alt='' />
            </div>
            <div>
                <img src='./partners/microsoft.png' alt='' />
            </div>
            <div>
                <img src='./partners/steam.png' alt='' />
            </div>
            <div>
                <img src='./partners/xbox.png' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Partners