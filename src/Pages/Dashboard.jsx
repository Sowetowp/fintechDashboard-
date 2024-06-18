import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import DashBody from '../Components/DashBody'

const Dashboard = () => {
    const [menuu, setMenuu] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
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