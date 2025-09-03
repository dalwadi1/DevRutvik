import { Button } from '@/components/ui/button'
import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
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
        <div className="w-full h-screen flex flex-1 flex-col p-10 rounded-3xl backdrop-blur-sm">
            {/* Hero section */}
            <div className="flex-1 flex flex-col gap-10 items-center justify-center">
                <div className='w-full'>
                    <h1 className="md:text-7xl text-2xl font-black bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent text-center">
                        Hi ! I’m{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Rutvik
                        </span>
                    </h1>
                    <p className="mt-3 text-white/90 text-center">
                        I'm a Frontend Developer • React.js based in Surat, Gujrat.
                    </p>
                    <div className="mt-6 flex gap-3 justify-center">
                        <Link
                            className="sm:px-5 sm:py-2 p-2 sm:text-sm text-xs rounded-sm text-white sm:font-medium
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            to="/work"
                        >
                            View Projects
                        </Link>

                        <button
                            onClick={handleDownloadAndPreview}
                            className="text-start sm:text-sm text-xs cursor-pointer sm:px-5 sm:py-2 p-2 rounded-sm sm:font-medium bg-white text-zinc-900">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* contact section - hamesha niche */}
            <div className="mt-auto hidden sm:flex items-center justify-between w-full lg:px-8 px-4">
                <div>
                    <h5 className="text-white">let's work together</h5>
                    <Link className="text-white">parmarrutvik1807@gmail.com</Link>
                    <p className="text-white">+91 8141971488</p>
                </div>
                <div className="flex items-end justify-center gap-2">
                    <Link>
                        <Instagram color="white" />
                    </Link>
                    <Link>
                        <Linkedin color="white" />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Home
