import React from 'react';
import Card from './Card';

/* porps es un objeto que contiene el arreglo cities de ciudades

props = {cities: [Londres, Cairns, Denver];}
*/
export default function Cards(props) {
  // si no tengo props por algun motivo se rompe el sitio, por eso el iff
  if(!props.cities) {
    return <h3>No hay ciudades disponibles</h3>
  }
  return (
    <>
    {
      props.cities.map(c =>
      <Card
        key={c.id}
        max={c.main.temp_max}
        min={c.main.temp_min}
        name={c.name}
        img={c.weather[0].icon}
        onClose={() => alert(c.name)}     
      />)     
    }
    </>
  )
};