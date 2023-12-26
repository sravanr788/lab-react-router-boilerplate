import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Pagenotfound from '../Pagenotfound'

const Allroutes = () => {
  return (
    <div>
           <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </div>
  )
}

export default Allroutes