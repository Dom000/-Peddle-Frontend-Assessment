import React from 'react'

function Btn({className,onClick,text}) {
  return (
    <div className={`  ${className}`}  onClick={onClick}><pre>{text}</pre></div>
  )
}

export default Btn;