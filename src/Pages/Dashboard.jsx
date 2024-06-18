import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
    const [menuu, setMenuu] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggle = ()=>{
        setMenuu(!menuu)
    }

    return (
        <>
            <Navbar prop={menuu} prop2={toggle}/>
            <DashBody prop={menuu}/>
        </>
    )
}

export default Dashboard