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
        document.body.classList.add(`${!dark ? "dark" : "light"}`);
        document.body.classList.remove(`${dark ? "dark" : "light"}`);
        localStorage.setItem('theme', `${!dark ? "dark" : "light"}`);
        setDark(!dark)
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        document.body.classList.add(theme)
        document.body.classList.remove(`${theme === "light" ? "dark" : "light"}`)
        setDark(theme === "dark" ? true : false)
    }, [])
    return (
        <>
            <header className='w-screen sticky top-0 dark:bg-blue-950 '>
                <section className='max-w-7xl mx-auto py-5 flex items-center'>
                    <div className='w-1/2 flex items-center justify-between'>
                        <a className="pl-5 flex gap-3 flex-row items-center">
                            <img className='w-14' src={logo} alt="logo" />
                            <img className={`w-28 ${dark && "invert brightness-[10%]"}`} src={logo2} alt="logo" />
                        </a>
                        <div className='flex items-center gap-3'>
                            <a href="" className=''>
                                <label className={dark ? "buttons__burgerr" : "buttons__burger"} htmlFor="burger">
                                    <input type="checkbox" id="burger" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </a>
                            <div className='flex bg-slate-200 rounded-lg px-6 items-center gap-3 py-2 dark:bg-[rgb(17,26,56)]'>
                                <svg className="w-6" fill={dark ? "white" : "grey"} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>search</title> <path d="M30.885 29.115l-10.103-10.103c1.538-1.911 2.468-4.368 2.468-7.042 0-6.229-5.050-11.279-11.279-11.279s-11.279 5.050-11.279 11.279c0 6.229 5.050 11.279 11.279 11.279 2.674 0 5.13-0.93 7.063-2.485l-0.022 0.017 10.103 10.103c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM3.25 12c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75c0 4.832-3.918 8.75-8.75 8.75v0c-4.83-0.005-8.745-3.92-8.75-8.749v-0.001z"></path> </g></svg>
                                <input className='bg-transparent w-68 font-light outline-0 dark:text-white placeholder:dark:text-white' type="text" placeholder='Search here...' />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-around items-cente">
                        <div className='bg-slate-200 flex items-center rounded-full'>
                            <div className='bg-[#0099FF] h-full flex items-center gap-3 py-1 rounded-full px-3'>
                                <img className='w-7' src={cloud} alt="" />
                                <span className='text-xl font-medium text-white'>21</span>
                            </div>
                            <span className='pr-4 pl-2 text-sm font-semibold dark:text-[#32b6fd]'>Medan, IDN</span>
                        </div>
                        <a onClick={darkMode} className="bg-white shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center">
                            <img className='w-4' src={dark ? day : moon} alt="" />
                        </a>
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