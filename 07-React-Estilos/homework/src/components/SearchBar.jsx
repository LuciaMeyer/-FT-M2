import React from 'react';

/*props es una función onSearch */
export default function SearchBar(props) {
  return (
  <div>
    <input type="text" placeholder='Ciudad...'/>
    <button onClick={() => props.onSearch('Ciudad agregada')}>Agregar</button>
  </div>
  )
};

