import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
    const [menuu, setMenuu] = useState(true);
    
    return (
        <>
            <Navbar />
            <DashBody/>
        </>
    )
}

export default Dashboard