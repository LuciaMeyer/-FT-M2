import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Ciudad from '../components/Ciudad';
import Header from '../components/Header'

// let url = 'https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png' // logo Henry
const apiKey = '4ae2636d8dfbdc3044bede63951a019b'


export default function App() {
  const [cities, setCities] = useState([]); //  array de ciudades inicialmente vacío


  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
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
        // hacer la validación si la ciudad ya esta en el arreglo min 41 de Franco
        // prevState = [] -->  al arreglo anterior le sumo la nueva ciudad
        setCities(prevState => [...prevState, ciudad]);
        // console.log(ciudad)
      } else {
        alert("Ciudad no encontrada");
      }
    })
  }

  // con filer() devuelvo un nuevo arreglo con las ciudades que no tengan el id del parametro
  // que es el que quiero eliminar
  function onClose(id){ 
    setCities(prevState => prevState.filter(c => c.id !== id));
  }

  // recibe un id y con el find busca en el arreglo ciudades el id que coincida
  // usa el parseInt por si el match lo tiene como string
  // si no lo encuentra el find retorna undefined
  function onFilter(ciudadId) {
    let ciudad = cities.find (c => c.id === parseInt(ciudadId));
    return ciudad;
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <div className='contain'>
            <Nav onSearch={onSearch}/>
            <Cards cities={cities} onClose={onClose}/>
          </div>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        
        {/* <Route
          path='/ciudad/:id'
          // estoy haciendo destructuring para usar solo el match, sino podría poner render={(props)}
          render={ ({ match }) => <Ciudad city = {onFilter(match.params.id)} /> } 
        >
        </Route> */}
        <Route path='/ciudad/:id' component={Ciudad}/>

      </Switch>
    </div>
  );
}
