import React from 'react'

const Button = ({text,bgclr,onClick}) => {
  return (
    <button className={bgclr}  onClick={onClick} >
      {text}
    </button>
  )
}

export default Button
