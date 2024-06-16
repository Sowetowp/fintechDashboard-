import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
    const [menuu, setMenuu] = useState(true);
    const toggle = ()=>{
        setMenuu(!menuu)
        alert("l")
    }

    return (
        <>
            <Navbar prop={menuu} prop2={toggle}/>
            <DashBody prop={menuu}/>
        </>
    )
}

export default Dashboard