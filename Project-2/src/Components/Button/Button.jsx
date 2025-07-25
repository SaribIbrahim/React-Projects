import React from 'react'
import './Button.css'
function Button({isOutline,icon,text,type = "button"}) {
  return (
    <div>
        <button className={`${isOutline ? 'secondary-btn' : 'primary-btn'}` } type={type}> 
            {icon}
            <span>{text}</span>
        </button>
       
    </div>
  )
}

export default Button