import { createBrowserRouter } from "react-router";
import Error from "../Error";
import MainLayout from "../layout";
import ContactMe from "../Pages/ContactMe";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import AboutMe from "../Pages/AboutMe";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '',
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: 'about-me',
                        element: <AboutMe />
                    },
                    {
                        path: 'tech',
                        element: <Skills />
                    },
                    {
                        path: 'work',
                        element: <Projects />
                    },
                    {
                        path: 'get-in-touch',
                        element: <ContactMe />
                    }
                ]
            }
        ]
    }
])