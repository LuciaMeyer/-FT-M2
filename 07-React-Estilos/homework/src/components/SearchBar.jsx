import React from 'react';
import s from './SerchBar.module.css'

/*props es una función onSearch */
export default function SearchBar(props) {
  return (
  <div className={s.serchBar}>
    <input type="text" placeholder='Agregar ciudad...'/>
    <button onClick={() => props.onSearch('Ciudad agregada')}>✚</button>
  </div>
  )
};

