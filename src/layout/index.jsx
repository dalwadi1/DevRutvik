import React from 'react'
import Header from '../components/Comman/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] min-h-screen">
            <Header />
            <Outlet />
        </div >
    )
}

export default MainLayout
