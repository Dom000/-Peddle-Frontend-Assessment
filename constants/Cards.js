import React from "react";

function Cards({ className, text1, text2 }) {
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold">{text1}</h1>
      <p className="text-sm ">{text2}</p>
    </div>
  );
}

export default Cards;
