import React from "react";

const Button = (props) => {
  const navStyle = {
    cursor: "pointer",
    fontSize: "1.3rem",
    margin: "2rem 0",
    textTransform: "uppercase",
    padding: ".7rem",

    border: " solid #e40b0b .15rem",
    borderRadius: "5px",
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.randomGif();
  };

  return (
    <div>
      <button onClick={handleClick} style={navStyle}>
        Random
      </button>
    </div>
  );
};
export default Button;
