import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="../images/brand_logo.png" alt="Logo" />
                </div>
                <ul>
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className='Login'>Login</button>
            </nav>
        </div>
    )
}

export default Nav