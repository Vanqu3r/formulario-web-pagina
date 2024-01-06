import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/formularioAcreditado.css";

const Finanzamiento = () => {
  const [obtenerDatosAcreditado, setDatosAcreditado] = useState([]);
  useEffect(() => {
    // Realiza la solicitud al servidor Node.js para obtener datos
    axios
      .get("http://localhost:8001/acreditado/datos")
      .then((response) => setDatosAcreditado(response.data))
      .catch((error) =>
        console.error("Error al obtener datos del servidor:", error)
      );
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Realizar la solicitud POST al servidor
    axios
      .post("http://localhost:8001/formulario/Financiamiento", data)
      .then((response) => {
        console.log(response.data); // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };
  const fechaActual = new Date();

  fechaActual.setDate(fechaActual.getDate() - 1);
  const nuevaFecha = fechaActual.toISOString().split("T")[0];
  return (
    <div className="formulario-container">
      <div className="formulario">
        <h2>Registro de Usuario</h2>
        <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div class="col-md-4">
            <select
              class="form-select form-select-lg "
              {...register("ID_Acreditado")}
              required
            >
              <option disabled selected>
                Razon Social
              </option>
              {obtenerDatosAcreditado.map((item) => (
                <option value={item.ID_Acreditado}>{item.Razon_Social}</option>
              ))}
            </select>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Esquema")}
              maxLength={45}
              required
              pattern="[a-zA-Z\s]+"
            ></input>
            <label class="asterisk">Esquema</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Convocatoria")}
              maxLength={45}
              required
              pattern="[a-zA-Z\s]+"
            ></input>
            <label class="asterisk">Convocatoria</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="number"
              id="floatingInput"
              class="form-control"
              placeholder=""
              min="0"
              {...register("Monto")}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Monto</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Plazos_Meses")}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Plazo en meses</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Periodo_de_gracia")}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Periodo de gracia en meses</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Tipo_de_garantia")}
              maxLength={45}
              required
              pattern="[a-zA-Z\s]+"
            ></input>
            <label class="asterisk">Tipo de Garantia</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("NoContrato")}
              maxLength={60}
              required
              pattern="[a-zA-Z\s-]+"
            ></input>
            <label class="asterisk">Numero de contrato</label>
          </div>
          <div class="col-md-4">
            <input
              class="form-select form-select-lg "
              type="date"
              id="fecha"
              max={nuevaFecha}
              {...register("Fecha_Elaboracion")}
              required
            ></input>
            <label class="asterisk">Fecha de elaboracion</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("CIE_a")}
              maxLength={19}
              required
              pattern="[a-zA-Z0-9]+"
            ></input>
            <label class="asterisk">CIE</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Referencia_Bancaria")}
              maxLength={45}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Referencia Bancaria</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Cuenta_Bancaria")}
              maxLength={45}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Cuenta Bancaria</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Dias_de_gracia_por_reflejo")}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Dias de gracia por reflejo</label>
          </div>
          <div class="form-floating  col-md-4">
            <input
              type="text"
              id="floatingInput"
              class="form-control"
              placeholder=""
              {...register("Condicionante_dias_de_retraso")}
              required
              pattern="[0-9]+"
            ></input>
            <label class="asterisk">Condiciones de dias de retraso</label>
          </div>
          <div>
            <input class="btn btn-primary" type="submit" value="Enviar"></input>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Finanzamiento;
