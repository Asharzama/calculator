import React from "react";

const Buttons = (props) => {
  const { value, onClick,style } = props;
  return <button onClick={()=>onClick(value)} style ={style}>{value}</button>;
};

export default Buttons;
