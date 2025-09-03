import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { vishalEnter } from "@/utils/images";

const projects = [
    {
        id: 1,
        title: "VISHAL ENTERPRICE",
        description:
            "A fully responsive e-commerce app with product search, filter, cart and payment integration.",
        image: '/images/vishalenterprice.png',
        tech: ["React", "Bootstrap", "Redux", 'Node', 'Mongodb'],
        demoLink: "https://pms.vrishal.in/",
        githubLink: "#",
    },
    {
        id: 2,
        title: "IndiaZona",
        description:
            "A personal portfolio website with animations, dark mode and smooth navigation.",
        image: '/images/indiazona.png',
        tech: ["React", "Bootstrap", "Laravel"],
        demoLink: "https://indiazona.in/",
        githubLink: "#",
    },
    {
        id: 3,
        title: "Face Nova",
        description:
            "A modern dashboard with charts, analytics and user management system.",
        image: '/images/fashnova.png',
        tech: ["React", "Tailwind/css", "Shadcn ui"],
        demoLink: "https://fashnova-ecom.vercel.app/",
        githubLink: "#",
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto px-6 sm:py-8">
            <h4 className='md:text-4xl text-3xl text-white sm:pt-25 pt-20'>Project<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>s</span></h4>
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
                            <h3 className="text-2xl font-semibold mb-2 text-white">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                {project.description}
                            </p>

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
