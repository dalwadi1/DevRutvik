import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { vishalEnter } from "@/utils/images";

const projects = [
    {
        id: 1,
        title: "VISHAL ENTERPRICE",
        description:
            `I worked on a construction site management project for Vishal Enterprise during my time at Addon Webtech.
The project was built using React.js (frontend) and Node.js (backend). It included features like project details, service showcasing, contact forms, and responsive UI for better client interaction.
My contribution focused on developing the frontend with React, integrating APIs, and ensuring a clean, user-friendly design.`,
        image: '/images/vishalenterprice.png',
        tech: ["React", "Bootstrap", "Redux", 'Node', 'Mongodb'],
        demoLink: "https://pms.vrishal.in/",
        githubLink: "#",
    },
    {
        id: 2,
        title: "IndiaZona",
        description:
            `I contributed to the development of Indiazona, an e-commerce web application, while working at Addon Webtech.
The project was built using React.js (frontend) and Laravel (backend). It included features like product listings, search & filter, cart management, secure checkout, and responsive design for smooth shopping experience.
My role was mainly focused on frontend development with React, API integration with Laravel backend, and ensuring a clean.`,
        image: '/images/indiazona.png',
        tech: ["React", "Bootstrap", "Laravel"],
        demoLink: "https://indiazona.in/",
        githubLink: "#",
    },
    {
        id: 3,
        title: "Fashnova",
        description:
            `I am developing Fash Nova, a fashion-focused e-commerce web application, using React.js.
This project includes features like product catalog, search & filter, cart management, and responsive UI design. The goal is to create a modern and user-friendly shopping experience with clean layouts and smooth navigation.
This is my personal project where I am experimenting with React best practices and scalable frontend architecture.`,
        image: '/images/fashnova.png',
        tech: ["React", "Tailwind/css", "Shadcn ui"],
        demoLink: "https://fashnova-ecom.vercel.app/",
        githubLink: "#",
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto px-6 sm:py-8">
            <h4 className='lg:text-4xl sm:text-2xl text-xl text-white sm:pt-25 pt-20'>Project<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>s</span></h4>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 pt-5">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-5">
                            <h3 className="sm:text-2xl text-lg font-semibold mb-2 text-white">
                                {project.title}
                            </h3>
                            <div className="overflow-y-auto h-[20vh]">
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-indigo-600 px-2 py-1 rounded-full text-white"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 rounded-lg hover:opacity-90 transition"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
