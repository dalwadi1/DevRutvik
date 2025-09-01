import React from 'react'

const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-center
      bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl">
                <h1 className="text-5xl font-black bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Hi, I’m Rutvik
                </h1>
                <p className="mt-3 text-white/90">Frontend Developer • React.js</p>
                <div className="mt-6 flex gap-3 justify-center">
                    <a className="px-5 py-2 rounded-xl text-white font-medium
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        View Projects
                    </a>
                    <a className="px-5 py-2 rounded-xl font-medium bg-white text-zinc-900">
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
