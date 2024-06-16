import React, { useReducer } from 'react'

const drops = {
    dashboard: false,
    cms: false,
    apps: false,
    charts: false,
    bootstrap: false,
    plugins: false,
    widget: false,
    form: false,
    table: false,
    pages: false
}
const dropReducer = (state, action) => {
    switch (action.type) {
        case "dashboard":
            return Object.keys(state).reduce((acc, cuu)={
                acc[cuu]: 
            }, {})
        default:
            return state
    }
}

const DashBody = () => {
    const [drop, dispatch] = useReducer(dropReducer, drops)

    return (
        <>
            <main className='w-full bg-white dark:bg-blue-950'>
                <section className='max-w-7xl w-full mx-auto'>
                    <div className='w-[22%] py-3'>
                        <a className='flex justify-around flex-wrap items-center group'>
                            <span className="flex items-center gap-5">
                                <svg className='w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="rgb(107 114 128)" className='group-hover:stroke-[#0099FF]' strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"></path> </g></svg>
                                <p className='text-slate-500 group-hover:text-[#0099FF] font-semibold'>Dashboard</p>
                            </span>
                            <svg className='w-3 group-hover:fill-[#0099FF]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.413 223.413" fill="rgb(107 114 128)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <polygon className='group-hover:fill-[#0099FF]' fill="rgb(107 114 128)" points="57.179,223.413 51.224,217.276 159.925,111.71 51.224,6.127 57.179,0 172.189,111.71 "></polygon> </g> </g> </g> </g></svg>
                            <div className='w-full py-2 hidden'>
                                <a className='block hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md' href="">Profile</a>
                                <a className='block hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md' href="">Email</a>
                                <a className='block hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md' href="">Calendar</a>
                                <a className='block hover:text-[#0099FF] text-center text-gray-500 py-[0.3rem] text-md' href="">Shop</a>
                            </div>
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default DashBody