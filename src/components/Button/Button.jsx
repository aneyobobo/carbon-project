import React from 'react'

const Button = ({text,bgclr,onClick, disabled,navigate,onSubmit}) => {
  return (
    
    <button className={bgclr}  onClick={onClick} disabled={disabled} navigate={navigate} onSubmit={onSubmit} >
      {text}
    </button>
  )
}

export default Button
