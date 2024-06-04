import React from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"

const Navbar = () => {
  return (
    <>
        <header className='w-screen sticky top-0'>
            <section className='max-w-7xl bg-blue-400 mx-auto py-5'>
                <div className='w-1/2 bg-green-300'>
                    <a className="pl-5 flex gap-3 flex-row items-center">
                        <img className='w-14' src={logo} alt="logo" />
                        <img className='w-28' src={logo2} alt="logo" />
                    </a>
                    <div>
                        <a href="" className='bg-white h-1'>j</a>
                    </div>
                </div>
            </section>
        </header>
    </>
  )
}

export default Navbar