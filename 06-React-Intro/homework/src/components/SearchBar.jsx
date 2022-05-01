import React from 'react';

/*props es una función onSearch */
export default function SearchBar(props) {
  return (
  <div>
    <input type="text" placeholder='Ciudad'/>
    <button onClick={() => props.onSearch('Ciudad agregada')}>Agregar</button>
  </div>
  )
};

/* si le paso la definición de onSearch sin invocar me renderiza [objet Objet] que es el objeto por defecto del evento
si la invoco con una string sólo me lo ejecuta 1 vez y el botón no funciona más
cómo transformar la ejecución en una definiicón?
la envuelvo en otra función! */

