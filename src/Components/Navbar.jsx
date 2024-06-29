import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"
import cloud from "../assets/cloud-svgrepo-com.svg"
import moon from "../assets/night-moon-svgrepo-com.svg"
import day from "../assets/day-festival-light-2-svgrepo-com.svg"
import dp from "../assets/17.jpg"
import notif1 from "../assets/1.jpg"
import notif2 from "../assets/2.jpg"
import notif3 from "../assets/3.jpg"
import notif4 from "../assets/4.jpg"
import menu from "../assets/menu-dots-svgrepo-com.svg"
import menu2 from "../assets/menu-dots-svgrepo-com2.svg"
import plus from "../assets/add-svgrepo-com.svg"
import plus2 from "../assets/add-svgrepo-com2.svg"
import profileico from "../assets/profile-svgrepo-com (2).svg"
import inbox from "../assets/envelope-closed-svgrepo-com.svg"
import logout from "../assets/logout-svgrepo-com.svg"
import arrow from "../assets/arrow-sm-right-svgrepo-com.svg"
import "../Styles/Dashboard.css"

const Navbar = (props) => {
    const {prop, prop2} = props
    const [dark, setDark] = useState(false);
    const [profile, setProfile] = useState(false);
    const [notification, setNotification] = useState(false);
    const [chat, setChat] = useState(false);
    const [chats, setChats] = useState(true);
    const [home, setHome] = useState(false);
    const [alerts, setAlerts] = useState(false);

    const darkMode = () => {
        const newTheme = dark ? "light" : "dark";
        document.body.classList.add(newTheme);
        document.body.classList.remove(dark ? "dark" : "light");
        localStorage.setItem('theme', newTheme);
        setDark(!dark);
    };

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDark(systemPrefersDark)
        const theme = localStorage.getItem('theme');
        if (theme) {
            document.body.classList.add(theme);
            document.body.classList.remove(theme === "light" ? "dark" : "light");
            setDark(theme === "dark");
        }
    }, []);

    const toggleNotification = () => {
        setNotification(!notification);
    };

    const notifs = [
        {
            image: notif1,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif2,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif3,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif4,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif1,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif2,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif3,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        },
        {
            image: notif4,
            title: "Dr sultads Send you Photo",
            time: "29 July 2020 - 02:26 PM"
        }
    ]

    const messages = [
        {
            alphabet: "A",
            members: [
                {
                    image: notif1,
                    name: "Archie Parker",
                    status: "Kalid is online",
                    online: true
                },
                {
                    image: notif2,
                    name: "Alfie Mason",
                    status: "Taherah left 7 mins ago",
                    online: false
                },
                {
                    image: notif3,
                    name: "Byode Gabriel",
                    status: "Dimeji is online",
                    online: true
                },
                {
                    image: notif4,
                    name: "Adeniyi Abideen",
                    status: "Taherah left 30 mins ago",
                    online: false
                },
            ]
        },
        {
            alphabet: "B",
            members: [
                {
                    image: notif1,
                    name: "Archie Parker",
                    status: "Kalid is online",
                    online: true
                },
                {
                    image: notif2,
                    name: "Alfie Mason",
                    status: "Taherah left 7 mins ago",
                    online: false
                },
                {
                    image: notif3,
                    name: "Byode Gabriel",
                    status: "Dimeji is online",
                    online: true
                },
                {
                    image: notif4,
                    name: "Adeniyi Abideen",
                    status: "Taherah left 30 mins ago",
                    online: false
                },
            ]
        },
        {
            alphabet: "C",
            members: [
                {
                    image: notif1,
                    name: "Archie Parker",
                    status: "Kalid is online",
                    online: true
                },
                {
                    image: notif2,
                    name: "Alfie Mason",
                    status: "Taherah left 7 mins ago",
                    online: false
                },
                {
                    image: notif3,
                    name: "Byode Gabriel",
                    status: "Dimeji is online",
                    online: true
                },
                {
                    image: notif4,
                    name: "Adeniyi Abideen",
                    status: "Taherah left 30 mins ago",
                    online: false
                },
            ]
        },
        {
            alphabet: "D",
            members: [
                {
                    image: notif1,
                    name: "Archie Parker",
                    status: "Kalid is online",
                    online: true
                },
                {
                    image: notif2,
                    name: "Alfie Mason",
                    status: "Taherah left 7 mins ago",
                    online: false
                },
                {
                    image: notif3,
                    name: "Byode Gabriel",
                    status: "Dimeji is online",
                    online: true
                },
                {
                    image: notif4,
                    name: "Adeniyi Abideen",
                    status: "Taherah left 30 mins ago",
                    online: false
                },
            ]
        }
    ]
    return (
        <>
            <header className='w-full z-50 sticky top-0 bg-white dark:bg-blue-950 '>
                <section className='px-5 max-w-7xl w-full mx-auto py-5 flex items-center'>
                    <div className={`w-1/3 sm:w-1/2 flex items-center ${prop ? "justify-between" : "gap-8"}`}>
                        <a href='/' className="flex gap-3 flex-row items-center">
                            <img className='w-14' src={logo} alt="logo" />
                            {prop && <img className={`w-28 ${dark && "invert brightness-[10%]"} hidden lg:block`} src={logo2} alt="logo" />}
                        </a>
                        <div className='items-center gap-9 flex'>
                            <a className='lg:flex md:hidden'>
                                <label className={dark ? "buttons__burgerr w-5 h-5 sm:w-6 sm:h-5" : "buttons__burger w-4 h-4 sm:w-6 sm:h-5"} htmlFor="burger">
                                    <input onChange={()=>prop2()} type="checkbox" id="burger" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </a>
                            <div className='hidden lg:flex bg-slate-200 rounded-lg px-6 items-center gap-3 py-2 dark:bg-[rgb(17,26,56)]'>
                                <svg className="w-6" fill={dark ? "white" : "grey"} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>search</title> <path d="M30.885 29.115l-10.103-10.103c1.538-1.911 2.468-4.368 2.468-7.042 0-6.229-5.050-11.279-11.279-11.279s-11.279 5.050-11.279 11.279c0 6.229 5.050 11.279 11.279 11.279 2.674 0 5.13-0.93 7.063-2.485l-0.022 0.017 10.103 10.103c0.226 0.226 0.539 0.366 0.884 0.366 0.691 0 1.251-0.56 1.251-1.251 0-0.345-0.14-0.658-0.366-0.884l0 0zM3.25 12c0-4.832 3.918-8.75 8.75-8.75s8.75 3.918 8.75 8.75c0 4.832-3.918 8.75-8.75 8.75v0c-4.83-0.005-8.745-3.92-8.75-8.749v-0.001z"></path> </g></svg>
                                <input className='bg-transparent w-68 font-light outline-0 dark:text-white placeholder:dark:text-white' type="text" placeholder='Search here...' />
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 sm:w-1/2 flex justify-between pl-5 items-center">
                        <div className='bg-slate-200 items-center rounded-full dark:bg-[rgb(17,26,56)] hidden lg:flex'>
                            <div className='bg-[#0099FF] h-full flex items-center gap-3 py-1 rounded-full px-3'>
                                <img className='w-7' src={cloud} alt="" />
                                <span className='text-xl font-medium text-white'>21</span>
                            </div>
                            <span className='pr-4 pl-2 text-sm font-semibold dark:text-[#0099FF]'>Medan, IDN</span>
                        </div>
                        <a onClick={darkMode} className="bg-white shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center dark:bg-[rgb(17,26,56)]">
                            <img className='w-4' src={dark ? day : moon} alt="" />
                        </a>
                        <div className=''>
                            <a onClick={toggleNotification} className="bg-white shadow relative cursor-pointer rounded-[50%] h-[fit-content] p-2 flex items-center justify-center dark:bg-[rgb(17,26,56)]">
                                <svg className='w-4' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill={dark ? "white" : "#000000"} d="M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z" /><path fill={dark ? "white" : "#000000"} d="M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z" /><path fill={dark ? "white" : "#000000"} d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z" /></svg>
                                <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>12</span></sup>
                            </a>
                            {notification && <div className={`bg-white py-1 dark:bg-[rgb(17,26,56)] shadow mt-8 md:left-auto md:-ml-[17rem] left-0 rounded-md md:w-80 w-screen absolute z-20`}>
                                <div className='max-h-[50vh] overflow-y-scroll bestSeller'>
                                    {notifs?.map((noti, index) => (
                                        <div key={index} className='px-3'>
                                            <a className={`flex items-center py-3 gap-3 dark:border-gray-600 ${index !== 0 && "border-t"}`}>
                                                <img src={noti.image} alt="" className='w-14 h-14 rounded-lg' />
                                                <span>
                                                    <p style={{ wordBreak: "break-word" }} className='font-semibold text-md text-gray-700 dark:text-white'>{noti.title}</p>
                                                    <p style={{ wordBreak: "break-word" }} className='text-sm text-gray-500'>{noti.time}</p>
                                                </span>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <a className='flex cursor-pointer border-t border-solid text-[#0099FF] gap-4 py-3 justify-center rounded-b-md dark:border-gray-600'>See all notifications<img className='w-5' src={arrow} alt="" /></a>
                            </div>}
                        </div>
                        <a onClick={() => setChat(!chat)} className="bg-white cursor-pointer relative shadow rounded-[50%] h-[fit-content] p-2 flex items-center justify-center dark:bg-[rgb(17,26,56)]">
                            <svg className='w-4' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill={dark ? "white" : "#000000"} d="M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z" /><path fill={dark ? "white" : "#000000"} d="M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z" /></svg>
                            <sup className='absolute'><span className='px-[4px] ml-6 text-xs text-white bg-[#0099FF] rounded-full'>5</span></sup>
                        </a>
                        <div className=' inline-block'>
                            <a onClick={() => setProfile(!profile)} className='text-right cursor-pointer hidden flex-col dark:text-white md:flex'>
                                <span className='leading-tight'>Hello,<b>Franklin</b></span>
                                <span className='text-sm text-gray-500 dark:text-white'>super admin</span>
                            </a>
                            {profile && <div className={`bg-white right-0 dark:bg-[rgb(17,26,56)] dark:text-gray-300 shadow md:mt-7 mt-12 mr-1 min-w-40 rounded-md w-[max-content] absolute z-20 py-3`}>
                                <a className='flex gap-4 px-5 py-2 hover:bg-gray-100'><img className='w-5' src={profileico} alt="" />Profile</a>
                                <a className='flex gap-4 px-5 py-2 hover:bg-gray-100'><img className='w-5' src={inbox} alt="" />Inbox</a>
                                <a className='flex gap-4 px-5 py-2 hover:bg-gray-100'><img className='w-5' src={logout} alt="" />Logout</a>
                            </div>}
                        </div>
                        <a onClick={() => setProfile(!profile)}><img src={dp} className='rounded-[50%] cursor-pointer w-10' alt="" /></a>
                    </div>
                </section>
                {(profile || notification || chat) && <a onClick={() => { setProfile(false); setNotification(false); setChat(false) }} className='bg-[#80808024] absolute w-full h-screen top-0 left-0 right-0 z-10'></a>}
                <section className={`fixed right-0 h-screen top-0 z-40 w-[90%] md:w-[22rem]`} style={{ transform: chat ? "translateX(0%)" : "translateX(100%)", transition: "transform .7s ease" }}>
                    <div className='flex justify-around bg-[#0099FF] pt-5 '>
                        <a onClick={() => { setAlerts(false); setChats(false); setHome(true) }} className={`text-white text-base cursor-pointer font-semibold pb-3 ${home ? "border-b-2" : ""}`}>HOME</a>
                        <a onClick={() => { setAlerts(true); setChats(false); setHome(false) }} className={`text-white text-base cursor-pointer font-semibold pb-3 ${alerts ? "border-b-2" : ""}`}>ALERTS</a>
                        <a onClick={() => { setAlerts(false); setChats(true); setHome(false) }} className={`text-white text-base cursor-pointer font-semibold pb-3 ${chats ? "border-b-2" : ""}`}>CHAT</a>
                    </div>
                    <div className='flex dark:bg-blue-950 items-center justify-around bg-white py-2 '>
                        <button className='flex items-center dark:bg-blue-900 bg-gray-200 h-6 justify-center w-6 rounded-md'>
                            <img className='w-5' src={dark ? plus2 : plus} alt="" />
                        </button>
                        <span className='text-center'>
                            <p className='font-semibold text-sm dark:text-white'>Chat List</p>
                            <p className='text-xs text-gray-500'>Show All</p>
                        </span>
                        <button className='flex dark:bg-blue-900 items-center bg-gray-200 h-6 justify-center w-6 rounded-md'>
                            <img className='w-4' src={dark ? menu2 : menu} alt="" />
                        </button>
                    </div>
                    <div className='overflow-y-scroll bestSeller2 dark:bg-blue-950 max-h-[90vh] pb-14 bg-white'>
                        {messages.map((alp, index)=>(
                            <div key={index} className='relative'>
                                <p className='py-2 sticky top-0 z-20 dark:text-white dark:border-gray-700 font-bold pl-3 dark:bg-[rgb(17,26,56)] border-t bg-white'>{alp.alphabet}</p>
                                {alp.members.map((mem, ind)=>(
                                    <div key={ind} className='flex gap-3 items-center px-4 py-2 hover:dark:bg-[rgb(17,26,56)] dark:bg-blue-950 bg-white dark:border-gray-700 border-t'>
                                        <span className='relative'>
                                            <div className={`absolute z-10 w-3 h-3 border-2 border-white ${mem.online ? "bg-green-500" : "bg-red-500"} rounded-full bottom-0 right-0`}></div>
                                            <img className='w-12 rounded-full' src={mem.image} alt="" />
                                        </span>
                                        <div>
                                            <p className='font-semibold dark:text-white'>{mem.name}</p>
                                            <p className='text-sm text-gray-400'>{mem.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar