import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"
import search from "../assets/search1-svgrepo-com.svg"
import cloud from "../assets/cloud-svgrepo-com.svg"
import moon from "../assets/night-moon-svgrepo-com.svg"
import day from "../assets/day-festival-light-2-svgrepo-com.svg"
import bell from "../assets/bell-svgrepo-com.svg"
import chat from "../assets/chat-line-square-svgrepo-com.svg"
import dp from "../assets/17.jpg"
import "../Styles/Dashboard.css"

const Navbar = () => {
    const [dark, setDark] = useState(false)
    const darkMode = () => {
        document.body.classList.add("light");
        localStorage.setItem('theme', `${dark ? "dark" : "light"}`);
    }

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        if(theme){
            document.body.classList.add(theme)
        }
        theme === "dark" && setDark(true)
    },[])
    return (
        <>
            <header className='w-screen sticky top-0 dark:bg-blue-950 '>
                <section className='max-w-7xl mx-auto py-5 flex items-center'>
                    <div className='w-1/2 flex items-center justify-between'>
                        <a onClick={darkMode} className="pl-5 flex gap-3 flex-row items-center">
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
                                <img src={search} className="w-6" alt="" />
                                <input className='bg-transparent w-68 font-light outline-0' type="text" placeholder='Search here...' />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-around items-cente">
                        <div className='bg-slate-200 flex items-center rounded-full'>
                            <div className='bg-[#0099FF] h-full flex items-center gap-3 py-1 rounded-full px-3'>
                                <img className='w-7' src={cloud} alt="" />
                                <span className='text-xl font-medium text-white'>21</span>
                            </div>
                            <span className='pr-4 pl-2 text-sm font-semibold'>Medan, IDN</span>
                        </div>
                        <div className="bg-white shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={moon} alt="" />
                        </div>
                        <div className="bg-white relative shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={bell} alt="" />
                            <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>12</span></sup>
                        </div>
                        <div className="bg-white relative shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={chat} alt="" />
                            <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>5</span></sup>
                        </div>
                        <a className='text-right flex flex-col'>
                            <span className='leading-tight'>Hello,<b>Franklin</b></span>
                            <span className='text-sm text-gray-500'>super admin</span>
                        </a>
                        <img src={dp} className='rounded-[50%] w-10' alt="" />
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar