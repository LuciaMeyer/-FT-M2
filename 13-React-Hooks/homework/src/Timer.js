import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';


const Timer = () => {

  const [segundos, setSegundos] = useState(0); // estado inicial 0 --> a los segundos los guardamos en un state para poder mutarlos
  const [activo, setActivo] = useState(false); // estado inicial en pausa --> usamos para llevar el control de nuestro boton de Inicio y Pausa
  const [tipo, setTipo] = useState('Contador'); // la App se inicia como contador --> cambia entre Contador y Cuenta Regresiva
 
  const myRef = useRef(null);

  function toggle() {
    setActivo(!activo);  // cuando se ejecute, cambia el state activo al valor contrario que tenga
  }

  function reset() { // cuando se ejecute resetear el state segundos a 0 y el state activo a false
    setSegundos(0);
    myRef.current.value = 0;
    setActivo(false);
  }

  function cambioTipo() { 
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  function agregaSegundos() {   
    let ref = myRef.current.value // current apunta al elemento de entrada de texto montado, me traigo el value
    setSegundos(Number(ref)) // lo paso a numero porque el estado lo recibe como string, para la resta hace '3'-1 = 2 pero para la suma '3'+1= '31'
}

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1); // empiezo a contar de a 1 cada 1 segundo, lo guardo en variable para poder frenarlo
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva') { // el intervalo ahora resta de a 1 cada 1 segundo
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') { // freno la cuenta cada un segundo, el intervalo del primer if
      clearInterval(intervalo); 
    }
    if (segundos <= 0 && tipo === 'Cuenta Regresiva') { // cuando llega a 0 en cuenta regresiva limpia el intervalo
      reset();
      myRef.current.value = 0;
      clearInterval(intervalo); 
    }
    return () => clearInterval(intervalo); // como estoy poniendo un return de una función dentro de un useEffect se ejecuta cuadno 
  }, [activo, segundos, tipo]);            // el componente se esté por desmontar, sirve para q si yo lo oculto al componente no siga contando


  return (
    <div className="app">
      <div className="time">{segundos}s</div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}>    
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>Reset</button>
      </div>
      <button className="button" onClick={cambioTipo}>{tipo}</button>
      {
      tipo === 'Cuenta Regresiva' &&
      <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>
      }
    </div>
  );
};

export default Timer;
