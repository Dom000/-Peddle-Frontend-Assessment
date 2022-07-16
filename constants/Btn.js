import React from 'react'

function Btn({className,onClick,text}) {
  return (
    <button className={`  ${className}`}  onClick={onClick}>{text}</button>
  )
}

export default Btn;