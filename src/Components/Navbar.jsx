import React from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"
import search from "../assets/search1-svgrepo-com.svg"
import cloud from "../assets/cloud-svgrepo-com.svg"
import moon from "../assets/night-moon-svgrepo-com.svg"
import day from "../assets/day-festival-light-2-svgrepo-com.svg"
import bell from "../assets/bell-svgrepo-com.svg"
import chat from "../assets/chat-line-square-svgrepo-com.svg"
import "../Styles/Dashboard.css"

const Navbar = () => {
    return (
        <>
            <header className='w-screen sticky top-0'>
                <section className='max-w-7xl bg-blue-400 mx-auto py-5 flex items-center'>
                    <div className='w-1/2 bg-green-300 flex items-center justify-between'>
                        <a className="pl-5 flex gap-3 flex-row items-center">
                            <img className='w-14' src={logo} alt="logo" />
                            <img className='w-28' src={logo2} alt="logo" />
                        </a>
                        <div className='flex items-center gap-3'>
                            <a href="" className=''>
                                <label class="buttons__burger" for="burger">
                                    <input type="checkbox" id="burger" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </a>
                            <div className='flex bg-slate-200 rounded-lg px-6 items-center gap-3 py-2'>
                                <img src={search} className="w-7" alt="" />
                                <input className='bg-transparent w-68 outline-0' type="text" placeholder='Search here...'/>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center bg-green-300">
                        <div className='bg-slate-300 flex items-center rounded-full'>
                            <div className='bg-[#0099FF] flex items-center gap-3 py-1 rounded-full px-3'>
                                <img className='w-7' src={cloud} alt="" />
                                <span className='text-xl font-medium text-white'>21</span>
                            </div>
                            <span className='pr-4 pl-2 text-white text-sm font-normal'>Medan, IDN</span>
                        </div>
                        <div className="bg-white shadow-none rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={moon} alt="" />
                        </div>
                        <div className="bg-white relative shadow-none rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={bell} alt="" />
                            <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>12</span></sup>
                        </div>
                        <div className="bg-white relative shadow-none rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={chat} alt="" />
                            <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>5</span></sup>
                        </div>
                        <a className='text-right flex flex-col'>
                            <span className='leading-tight'>Hello,<b>Franklin</b></span>
                            <span className='text-sm text-gray-500'>super admin</span>
                        </a>
                        <img src="" alt="" />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar