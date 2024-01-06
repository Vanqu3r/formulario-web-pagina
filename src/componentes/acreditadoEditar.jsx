import React, { useState } from "react";
import Finanzamiento from "./financiamientoEditar";
import FormularioAcreditado from "./formularioEditar";

const SelectorComponente = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("A");

  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div>
      <div>
        <button
          class="btn btn-danger"
          variant="primary"
          onClick={() => handleSeleccion("A")}
          active={opcionSeleccionada === "A"}
        >
          Datos Acredido
        </button>{" "}
        <button
          class="btn btn-warning"
          variant="primary"
          onClick={() => handleSeleccion("B")}
          active={opcionSeleccionada === "B"}
        >
          Datos Financieros
        </button>
      </div>
      <div>
        {opcionSeleccionada === "A" ? <FormularioAcreditado /> : null}
        {opcionSeleccionada === "B" ? <Finanzamiento /> : null}
      </div>
    </div>
  );
};

const AcreditadoEditar = () => {
  return (
    <div>
      <h1>Acreditado Editar</h1>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <SelectorComponente />
      </div>
    </div>
  );
};

export default AcreditadoEditar;
