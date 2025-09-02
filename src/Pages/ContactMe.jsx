import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactMe = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 flex items-center justify-center'>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-1'>
                <div className='flex flex-col items-start justify-center p-2 lg:pt-10 md:pt-14 pt-20'>
                    <h4 className='md:text-2xl text-xl text-white'>Get in<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> touch</span></h4>
                    <div className='py-3'>
                        <h4 className='text-white'>Address</h4>
                        <p className='text-white'>127 | Ameedhara Society Nana Varachha,Surat-395006</p>
                    </div>
                    <div className='py-3'>
                        <h4 className='text-white'>Email</h4>
                        <p className='text-white'>parmarrutvik1807@gmail.com</p>
                    </div>
                    <div className='py-3'>
                        <h4 className='text-white'>Mobile No</h4>
                        <p className='text-white'>+91 8141971488</p>
                    </div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-start p-1'>
                    <h4 className='md:text-2xl text-xl text-white text-start py-2'>Send Me A<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> Message</span></h4>

                    <div className='p-2 w-full'>
                        <div className='flex sm:flex-row flex-col items-center justify-between gap-2'>
                            <div className='w-full'>
                                <Input type='text' placeholder="Name" className='text-white' />
                            </div>
                            <div className='w-full'>
                                <Input type='email' placeholder="Email" className='text-white' />
                            </div>
                        </div>
                        <div className='py-5'>
                            <Textarea className='w-full text-white' type='text' placeholder="Message" />
                        </div>
                        <div className='py-2'>
                            <button className="text-start cursor-pointer sm:px-5 sm:py-2 p-2 rounded-xl sm:font-medium bg-white text-zinc-900">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
