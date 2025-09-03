import { aboutImage } from '@/utils/images'
import { Cake, Flag, Mail, MapPin, Phone, Settings } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import React from 'react'

const AboutMe = () => {
    const handleDownloadAndPreview = () => {
        const fileUrl = "/resume.pdf";

        const previewWindow = window.open(fileUrl, "_blank");

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Rutvik_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-6 sm:py-8'>
            <h4 className='lg:text-4xl sm:text-2xl text-xl text-white sm:pt-25 pt-20'>About <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Me</span></h4>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-2">
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className='rounded-full sm:h-full h-[30vh]' />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                    <div className='sm:pt-5'>
                        <p className='text-white lg:text-lg text-xs'>
                            I'm Rutvik Parmar, an India-based web designer and front-end developer focused on crafting clean, creative, and user-friendly experiences. I love building modern, powerful websites and applications that bring ideas to life.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className=''>
                            <p className='text-white flex gap-1 items-center sm:py-2 py-1 text-xs'><Cake size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Birthdate</span> : jul 2002</p>
                            <p className='text-white gap-1 flex items-center sm:py-2 py-1 text-xs'><Flag size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Nationality </span> : Indian</p>
                            <p className='text-white gap-1 flex items-center sm:py-2 py-1 text-xs'><Settings size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Experience </span> : 1 year</p>
                        </div>
                        <div>
                            <p className='text-white flex gap-1 items-center sm:py-2 text-xs py-1'><Phone size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Phone</span> : +91 8141971488</p>
                            <p className='text-white flex gap-1 items-center sm:py-2 text-xs py-1'><MapPin size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Address</span> : Surat, Gujrat</p>
                            <p className='text-white flex gap-1 items-center sm:py-2 text-xs py-1'><Mail size={16} /><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Email</span> : <span className='max-w-[12px]'>parmarrutvik1807@gmail.com</span></p>
                        </div>
                        <div className='py-2'>
                            <button
                                onClick={handleDownloadAndPreview}
                                className="text-start cursor-pointer sm:px-5 sm:py-2 p-2 rounded-sm sm:font-medium sm:text-sm text-xs bg-white text-zinc-900">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
