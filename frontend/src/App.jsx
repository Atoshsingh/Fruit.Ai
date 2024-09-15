import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translator from './components/translator/Translator.jsx'
import FaQ from './components/Faq/FaQ.jsx'
import Chat from './components/chat/Chat.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from "./components/home/Home.jsx"
import Login from './components/login/Login.jsx'
import Signup from './components/signup/Signup.jsx';

function App() {

  const Routed = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/chat",
      element: <Chat />
    },
    {
      path: "/translator",
      element: <Translator />
    },
    {
      path: "/faq",
      element: <FaQ />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    //  { 
    //   path:"/",
    //   element:<Home/>,
    //   children:[
    //     {
    //       path:"/chat",
    //       element:<Chat/>
    //     },
    //     {
    //       path:"translator",
    //       element:<Translator/>
    //     },
    //     {
    //       path:"/faq",
    //       element:<FaQ/>
    //     },
    //     {
    //       path:"/about",
    //       element:<About/>
    //     },
    //   ]
    //  },
    //  {
    //   path:"/login",
    //   element:<Login/>
    // },
    // {
    //   path:"/signup",
    //   element:<Signup/>
    // },
  ])

  return (
    <>
      <RouterProvider router={Routed} />
      <Outlet />
    </>

  )
}

export default App
