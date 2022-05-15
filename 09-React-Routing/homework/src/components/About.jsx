import './About.css';
import React from 'react';

export default function About (props) {
    return (
        <div className='containOneCard'>
            <div className='cardOne'>
                <h2 className="titleAbout">About</h2>
                <div className="infoAbout">
                    <p>Esta <strong>Weather App</strong> fue realizada por la alumna Meyer Lucía en Mayo del 2022 dentro del cursado de la carrera “Desarrollo Full Stack” de la academia Soy Henry.
                        <br /><br />
                        Corresponde a una serie de Homeworks del Módulo 2, las cuales se basan en Desarrollo Frontend React 
                    </p>
                </div>
            </div>
        </div>
    )
}