import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card1">
        <button className='closeButton' onClick={onClose}>❌</button>
        
        <Link to={`/ciudad/${id}`}>
          <span className= 'cityName'>{name}</span>       
        </Link>
        
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
