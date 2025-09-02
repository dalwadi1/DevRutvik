import { EllipsisVertical } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import React from 'react'

const Resume = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 sm:py-8'>
            <h4 className='md:text-4xl text-3xl text-white sm:pt-25 pt-20 py-2'>My <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>resume</span></h4>

            <div className='w-full flex items-center justify-center'>
                <Tabs defaultValue="account" className="w-full flex items-center justify-center">
                    <TabsList className='bg-transparent'>
                        <TabsTrigger value="account" className='cursor-pointer bg-transparent text-white text-xl data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:shadow-none'>Experience</TabsTrigger>
                        <EllipsisVertical />
                        <TabsTrigger value="password" className='cursor-pointer bg-transparent text-white text-xl data-[state=active]:bg-transparent data-[state=active]:underline data-[state=active]:shadow-none'>Education</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className='w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3'>
                            <div className='rounded-sm bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-5 gap-2'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-white'>Internship</h4>
                                    <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>June 2024/Jan 2025</Badge>
                                </div>
                                <div className='flex items-start justify-center flex-col gap-1'>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Company</span>: Picode</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Duration </span>: June 2024 – Jan 2025 (5 Months)</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Role </span>: MERN Stack Intern</p>
                                </div>
                                <p className='text-white text-sm py-2'>I completed my internship at Picode, where I learned the basics of the MERN Stack (MongoDB, Express.js, React.js, Node.js). During this training, I gained hands-on experience in building full-stack web applications, understanding how frontend and backend work together, and improving my skills in JavaScript and React.js.</p>
                            </div>
                            <div className='rounded-sm bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-5 gap-2'>
                                <div className='flex items-center justify-between'>
                                    <h4 className='text-white'>Experience</h4>
                                    <Badge variant="outline" className='p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>June 2024/Jan 2025</Badge>
                                </div>
                                <div className='flex items-start justify-center flex-col gap-1'>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Company</span>: Addon Webtech</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Duration </span>: June 2024 – Jan 2025 (5 Months)</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Role </span>: Frontend Developer (React.js)</p>
                                </div>
                                <p className='text-white text-sm py-2'>I worked as a Frontend Developer (React.js) at Addon Webtech for one year, where I was responsible for developing and maintaining responsive web applications. During my time there, I created reusable components, integrated REST APIs, and managed state using Redux. I collaborated closely with backend developers and designers to deliver efficient and user-friendly solutions. This experience helped me improve my skills in React.js, JavaScript, and modern frontend development practices, while also learning to optimize performance and ensure cross-browser compatibility.</p>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="password" className='w-full'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3'>
                            <div className='rounded-sm bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-5 gap-2'>
                                <div className='flex items-start justify-center flex-col gap-1'>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>12th Commerce</span>: P.V. Doshi School, Botad</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Duration </span>: Completed in Jun 2015</p>
                                </div>
                                <p className='text-white text-sm py-2'>I completed my 12th standard in Commerce stream from P.V. Doshi School, Botad in March 2015. This phase of my education gave me a strong base in commerce and logical thinking, which helped me in problem-solving and decision-making.</p>
                            </div>
                            <div className='rounded-sm bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-5 gap-2'>
                                <div className='flex items-start justify-center flex-col gap-1'>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Bachelor of Computer Applications (BCA)</span>: Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Duration </span>:Completed in 2022</p>
                                </div>
                                <p className='text-white text-sm py-2'>After completing my school education, I pursued my Bachelor of Computer Applications (BCA) from MKBU, which I completed in 2022. During this course, I learned the fundamentals of computer science, programming, and web technologies that shaped the foundation of my development career.</p>
                            </div>
                            <div className='rounded-sm bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] p-5 gap-2'>
                                <div className='flex items-start justify-center flex-col gap-1'>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Master of Computer Applications (MCA)</span>: Veer Narmad South Gujarat University (VNSGU)</p>
                                    <p className='text-white text-sm'><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Duration </span>: Completed in 2024</p>
                                </div>
                                <p className='text-white text-sm py-2'>To enhance my technical expertise, I completed my Master of Computer Applications (MCA) from VNSGU in 2024. This program helped me gain in-depth knowledge of advanced programming, software development, and practical project implementation, with a focus on modern technologies such as React.js and the MERN stack.</p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Resume
