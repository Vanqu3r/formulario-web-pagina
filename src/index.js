// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import FormularioAcreditado from './componentes/formularioAcreditado'; 
import Header from './componentes/header'; 
import Button from './componentes/button'; 

const App = () => {
  return (
    <div>
      <Header /> 
      <FormularioAcreditado /> 
      <Button /> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
