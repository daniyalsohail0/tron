import React from 'react'
import { Carousel } from 'react-bootstrap'

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-6xl text-3xl text-[#892CDC] py-7'>
            Features
        </h1>
        <div className='w-7/8 md:w-3/4 rounded-lg p-4'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="./cars/1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className='md:text-6xl text-xl font-[Barbatrick] text-[#892CDC]'>Own Collectibles</h3>
                    <p className='text-xl text-sm uppercase font-bold font-mono tracking-wide'>Own cars, racetracks, car rentals, workshops, gas station</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="./cars/5.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className='md:text-6xl text-xl font-[Barbatrick] text-[#892CDC]'>Multiple Race Modes</h3>
                    <p className='text-xl text-sm uppercase font-bold font-mono tracking-wide m-0 p-0'>PVE – Various game modes against AI</p>
                    <p className='text-xl text-sm uppercase font-bold font-mono tracking-wide m-0 p-0'>PVP – Race against other players </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./cars/3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='md:text-6xl text-xl font-[Barbatrick] text-[#892CDC]'>Collect Rewards</h3>
                    <p className='text-xl text-sm uppercase font-bold font-mono tracking-wide'>Many valuable in-game rewards which you can trade on NFT Market place.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./cars/4.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className='md:text-6xl text-xl font-[Barbatrick] text-[#892CDC]'>Staking & Governance</h3>
                    <p className='text-xl text-sm uppercase font-bold font-mono tracking-wide'>Passive income by staking Ckey tokens</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}

export default Features