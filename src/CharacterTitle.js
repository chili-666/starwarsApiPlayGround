import React from "react";
import { render } from "react-dom";

function CharacterTitle(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.name}</h2>
      <p>Year of Birth: {props.birth}</p>
    </div>
  );
}

export default CharacterTitle;
