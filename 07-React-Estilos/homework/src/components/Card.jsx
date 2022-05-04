import React from 'react';
import s from './Card.module.css'

/* el props es un objeto con propiedades max, min, name, img, onColse que tomo de data */ 
export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}> 
      <button className={s.closeButton} onClick={props.onClose}>❌</button>
      <span className={s.cityName}>{props.name}</span>
      <div>       
        <label>Min</label>
        <span>{props.min}</span>
      </div>
      <div>
        <label>Max</label>
        <span>{props.max}</span>
      </div>    
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="clima" />   
    </div>
  )
};