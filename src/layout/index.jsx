import React from 'react'
import Header from '../components/Comman/Header'
import { Outlet } from 'react-router'
import SplashCursor from '@/animation/SplashCursor'

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">

            <SplashCursor />
            <Header />
            <Outlet />
        </div >
    )
}

export default MainLayout
