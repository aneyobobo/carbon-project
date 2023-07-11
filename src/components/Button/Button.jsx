import React from 'react'

const Button = ({text,bgclr}) => {
  return (
    <button className={bgclr}>
      {text}
    </button>
  )
}

export default Button
