import React from 'react';

/* el props es un objeto con propiedades max, min, name, img, onColse que tomo de data */ 
export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="clima" />
        </div>
    </div>
  )
};