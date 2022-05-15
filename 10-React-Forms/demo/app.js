import React from 'react';
import { render } from 'react-dom';
import Controlled from './src/components/Controlled.jsx';
import Uncontrolled from './src/components/Uncontrolled.jsx';
import Ejemplo from './src/components/Ejemplo.jsx';
import DynamicInputs from './src/components/DynamicInputs.jsx';

render(<div>
    <h2>Ejemplo</h2>
    <Controlled/>
  </div>, document.getElementById('app'));
