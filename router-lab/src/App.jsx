import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound'
import Allroutes from './components/Routes/Allroutes'
const App = () => {
  return (
    <div>
      <Navbar />
      {/* perform routing  */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes> */}
      <Allroutes />
    </div>
  )
}

export default App