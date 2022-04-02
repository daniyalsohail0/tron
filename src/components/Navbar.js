import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsWallet } from 'react-icons/bs'

const Navbar = () => {

    const Links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Roadmap',
            link: '/'
        },
        {
            name: 'Whitepaper',
            link: '/'
        },
        {
            name: 'Audit',
            link: '/'
        },
        {
            name: 'Marketplace',
            link: '/'
        }
    ]

    const [open, setOpen] = useState(false);

  return (
    <div className='w-full top-0 left-0'>
        <div className='md:flex py-2 px-7 md:px-10 items-center justify-between'>
            <div className='tracking-widest text-white text-3xl font-mono font-semibold cursor-pointer flex items-center'>
                tron
            </div>
            <div onClick={() => setOpen(!open)} className='text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {
                    open ? <AiOutlineCloseCircle /> : <AiOutlineMenu />
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 transition-all duration-500 ease-in ${open ? 'top-0 opacity-100' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => 
                        <li key={link.name} className='md:ml-8 text-lg my-7 md:my-2'>
                            <p href={link.link} className='text-white tracking-wide cursor-pointer border-b-2 border-[#4C0070] hover:border-[#9A0680] duration-500 my-2'>{link.name}</p>
                        </li>
                    )
                }
                <button className='flex text-white tracking-wide bg-gradient-to-r from-teal-700 to-teal-900 hover:bg-gradient-to-l duration-500 ease-in rounded px-2 py-2 md:mx-10 my-2 md:my-0'>
                    <div className='pt-1 px-2 items-center'><BsWallet /></div>
                    <span className='px-2'>Connect Wallet</span>
                </button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar