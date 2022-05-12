import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
 
  return (
    <form className='serchBar'  onSubmit={(e) => {
      e.preventDefault(); // evita el comportamiento por defecto del form q es refrescar al submitear
      onSearch(city);
      setCity('')
    }}>
      <input
        className='inputText'
        type="text"
        placeholder="Buscar Ciudad..."
        value={city}
        onChange={event =>setCity(event.target.value)}
        // cada vez que se modifique el input dispara la función setCity
        // que cambia el estado, lo q se escribe se guarda en city
        // cuando se aprieta este botón de abajo el estado de city se lo paso a la función onSearch y dsp lo limpio
        />
      <input className='inputSub' type="submit" value="🔍︎" />
    </form>
  );
}

//✚
