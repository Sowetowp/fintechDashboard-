import React from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"
import search from "../assets/search1-svgrepo-com.svg"
import cloud from "../assets/cloud-svgrepo-com.svg"

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
                    <div className="w-1/2 flex item-center">
                        <div>
                            <div className='bg-[#0099FF]'>
                                <img className='w-4' src={cloud} alt="" />
                                <span>21</span>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Navbar