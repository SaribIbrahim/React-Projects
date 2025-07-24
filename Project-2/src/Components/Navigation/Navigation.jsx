import React from 'react'
import './Navigation.css'
function Navigation() {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src="../images/Logo-2.png" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navigation