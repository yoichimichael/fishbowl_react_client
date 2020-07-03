import React from 'react';

function Card(props){
  return (
    <li>
      {props.text}
      <input
         type="button"
         value="x"
         name={props.text}
         onClick={props.handleClick}
      />
    </li>
  )
};

export default Card