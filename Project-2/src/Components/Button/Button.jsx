import React from 'react'
import './Button.css'
function Button({isOutline,icon,text}) {
  return (
    <div>
        <button className={`${isOutline ? 'secondary-btn' : 'primary-btn'}`}>
            {icon}
            <span>{text}</span>
        </button>
       
    </div>
  )
}

export default Button