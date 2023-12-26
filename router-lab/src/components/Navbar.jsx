import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        {/* 1st link  */}
        <Link to="/" style={{textDecoration : "none",color : "black"}}>
        <h1 style={{cursor : "pointer"}}>
            <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" /> Kalvium 
        </h1>
        </Link>
        
        <div style={{display : "flex" , gap : "10px"}}>
            {/* 2nd link  */}
        <Link to="/about" style={{textDecoration : "none",color : "black"}}>
            <h1 style={{cursor : "pointer"}}>About</h1>
        </Link>
        {/* 3rd link  */}
        <Link to="/contact" style={{textDecoration : "none",color : "black"}}>
            <h1 style={{cursor : "pointer"}}>Contact</h1>
        </Link>
        </div>
    </div>
  )
}

export default Navbar