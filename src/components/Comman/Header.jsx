import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const Header = () => {
    const location = useLocation()
    const [showManu, setShowManu] = useState(false)

    useEffect(() => {
        setShowManu(false)
    }, [location])
    return (
        <div className='flex flex-col gap-2'>
            <nav className="fixed top-3 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="sm:text-xl sm:font-bold text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Rutvik.dev
                    </h1>
                    <ul className="hidden sm:flex space-x-8 text-white/80 font-medium">
                        <li className="hover:text-white transition hover:underline"><Link to="/">Home</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/about-me">About</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/tech">Skills</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/work">Projects</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/get-in-touch">Contact</Link></li>
                    </ul>
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center justify-center gap-1 sm:py-2 px-1 text-sm rounded-sm cursor-pointer text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90'>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=parmarrutvik1807@gmail.com&su=Hiring Inquiry&body=Hi Rutvik,"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                Hire Me
                            </a>
                        </div>
                        <div className='md:hidden' onClick={() => setShowManu(!showManu)}>
                            {showManu ? <X color='white' size={25} /> : <Menu color='white' size={25} />}
                        </div>
                    </div>
                </div>
            </nav>
            {
                showManu && <nav className="fixed sm:hidden top-20 -mt-2 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
                    <ul className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text sm:hidden flex max-w-7xl mx-auto gap-2 items-center justify-between flex-col py-2 text-white/80 font-medium ">
                        <li className="hover:text-white transition hover:underline"><Link to="/">Home</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/about-me">About</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/tech">Skills</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/work">Projects</Link></li>
                        <li className="hover:text-white transition hover:underline"><Link to="/get-in-touch">Contact</Link></li>
                    </ul>
                </nav>
            }
        </div>

    )
}

export default Header
