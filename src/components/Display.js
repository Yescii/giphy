import React from "react";

export default function Display(props) {
  return (
    <div>
      <img src={props.gif.image_url} alt={props.gif.alt} />
    </div>
  );
}
