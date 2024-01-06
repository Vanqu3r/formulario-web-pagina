// index.js
import React from "react";
import ReactDOM from "react-dom";
import FormularioAcreditado from "./componentes/formularioAcreditado";
import Header from "./componentes/header";
import Button from "./componentes/button";
import Finanzamiento from "./componentes/finanzamiento";
import Acreditados from "./componentes/acreditados";
import PerfilUsuario from "./componentes/perfilUsuario";
import AcreditadoEditar from "./componentes/acreditadoEditar";
import NotFound from "./componentes/notFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FormularioAcreditado />} />
        <Route path="/acreditados" element={<Acreditados />} />
        <Route path="/acreditado/usuario/:id" element={<PerfilUsuario />} />
        <Route path="/acreditado/finanzamiento" element={<Finanzamiento />} />
        <Route path="/acreditado/editar/:id" element={<AcreditadoEditar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
