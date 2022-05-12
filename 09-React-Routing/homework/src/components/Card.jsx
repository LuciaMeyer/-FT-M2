import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="containCard">
        <button className='closeButton' onClick={onClose}>❌</button>
        <span className= 'cityName'>{name}</span>
        <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />       
        
        <div className='temp'> 
          <div className='textTemp'>
            <label>Min</label>
            <span>{min}°</span>
          </div>
          <div className='textTemp'>
            <label>Max</label>
            <span>{max}°</span>
          </div>       
     </div>
      </div>
    );
};
