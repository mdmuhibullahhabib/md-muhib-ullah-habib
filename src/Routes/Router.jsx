import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Main from '../Layouts/Main'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Skills from '../Pages/Skills'
import About from '../Pages/About'

const Router = createBrowserRouter([
    { 

        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/skills",
                element: <Skills></Skills>,
            },
            {
                path: "/projects",
                element: <Projects></Projects>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]

    }


])

export default Router;