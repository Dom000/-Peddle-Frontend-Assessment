import React from 'react'

function Btn({className,onClick,text}) {
  return (
    <div className={`  ${className}`}  onClick={onClick}>{text}</div>
  )
}

export default Btn;