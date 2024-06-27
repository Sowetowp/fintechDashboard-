import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
    const [menuu, setMenuu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setMenuu(!window.matchMedia('(max-width: 1024px)').matches);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggle = () => {
        setMenuu(!menuu)
    }

    return (
        <>
            <Navbar prop={menuu} prop2={toggle} />
            <DashBody prop={menuu} />
        </>
    )
}

export default Dashboard