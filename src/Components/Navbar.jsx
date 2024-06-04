import React from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logo-text.png"

const Navbar = () => {
  return (
    <>
        <header className='w-screen sticky top-0'>
            <section className='max-w-7xl bg-blue-400 mx-auto'>
                <div className='w-1/2 bg-green-300'>
                    <a className="pl-2 flex flex-row items-center">
                        <img src={logo} alt="logo" />
                        <img src={logo2} alt="logo" />
                    </a>
                </div>
            </section>
        </header>
    </>
  )
}

export default Navbar