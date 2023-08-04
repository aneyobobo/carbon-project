import React from 'react'

const Button = ({text,bgclr,onClick, disabled,navigate}) => {
  return (
    
    <button className={bgclr}  onClick={onClick} disabled={disabled} navigate={navigate}>
      {text}
    </button>
  )
}

export default Button
