import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Addcar from './components/Addcar'
import Contact from './components/Contact'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
