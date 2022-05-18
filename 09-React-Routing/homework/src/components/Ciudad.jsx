import './Ciudad.css';
import React, { useEffect, useState } from 'react';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

export default function Ciudad ({ match }){
    // recibo match y me guardo el id
    const id = match.params.id;
    // creo un estado inicial como undefined
    const [city, setCity] = useState(undefined);
    
    // uso useEffect para trabajar con busqueda al momento que se carga el componente
    useEffect(() => {
        // hago el llamado a la Api por ciudad, que va a ser 1
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(recurso => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min), // Math.round() retorna el valor de un número redondeado al entero más cercano.
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            // si la encuentra seteo al estado con la ciudad
            setCity(ciudad);
          } else {
            // si no la encuentra seteo el estado a null  
            setCity(null);
          }
        })
    }, [id]); // voy a escuchar cambios en el id
    console.log(city)

    // pregunto si el estado es undefined y le doy tiempo a que cargue
    // pregunto si el estado es null para que no rompa
    // si el estado esdiferente renderiza el componente
    return city === undefined ? (
        <h5 className='textProv'>Cargando...</h5>
    ) : city === null ? (
        <h5 className='textProv'>Ciudad no encontrada</h5>
    ) : (
        <div className="containOneCard">
                <div className="cardOne">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
        </div>     
    )
}


 