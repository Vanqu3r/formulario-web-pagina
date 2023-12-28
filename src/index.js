// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import FormularioAcreditado from './componentes/formularioAcreditado'; 
import Header from './componentes/header'; 
import Button from './componentes/button'; 
import Acreditados from './componentes/acreditados'; 
import PerfilUsuario from './componentes/perfilUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Root = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<FormularioAcreditado />} />
        <Route path="/acreditados" element={<Acreditados />} />
        <Route path="/acreditado/usuario/:id" element={<PerfilUsuario />} />
      </Routes>
      <Button />
    </BrowserRouter>
    
    );
   
};

ReactDOM.render(<Root />, document.getElementById('root'));
