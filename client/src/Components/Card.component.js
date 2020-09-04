import React from 'react';

import '../Styles/card.style.css';

function Card(props){

  return(
    <div className="card-container">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default Card
