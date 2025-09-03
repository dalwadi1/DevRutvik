import React from 'react'
import { Progress } from "@/components/ui/progress"
import { Badge } from '@/components/ui/badge'

const Skills = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 sm:py-8'>
            <h4 className='lg:text-4xl sm:text-2xl text-xl text-white sm:pt-25 pt-20'>Skill<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>s</span></h4>
            <div className='w-full flex items-center justify-center'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 py-5 w-full'>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>Html/css</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>88%</Badge>
                        </div>
                        <Progress value={88} className='bg-white' />
                    </div>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>Tailwind/css</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>95%</Badge>
                        </div>
                        <Progress value={95} className='bg-white' />
                    </div>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>JavaScript</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>80%</Badge>
                        </div>
                        <Progress value={80} className='bg-white' />
                    </div>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>React.js</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>89%</Badge>
                        </div>
                        <Progress value={89} className='bg-white' />
                    </div>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>Node.js</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>50%</Badge>
                        </div>
                        <Progress value={50} className='bg-white' />
                    </div>
                    <div className='p-5 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-sm border shadow-sm'>
                        <div className='flex items-center justify-between mb-2'>
                            <p className='text-white p-3'>Laravel</p>
                            <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>50%</Badge>
                        </div>
                        <Progress value={50} className='bg-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
