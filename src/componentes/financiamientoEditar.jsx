import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

const Finanzamiento = () => {
  const { id } = useParams();
  const [financiamiento, setfinanciamiento] = useState([]);
  const [acreditados, setUserAcreditados] = useState([]);

  const getAcreditados = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8001/acreditado/usuario/${id}`
      ); // Utiliza el ID dinámico en la URL
      setUserAcreditados(data);
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
    }
  };

  const getFinanciamiento = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8001/acreditado/usuario/finaciamiento/${id}`
      ); // Utiliza el ID dinámico en la URL
      setfinanciamiento(data);
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
    }
  };

  useEffect(() => {
    getAcreditados();
    getFinanciamiento();
  }, [id]); // Agrega 'id' como una dependencia para que se vuelva a ejecutar cuando cambie el ID

  const [obtenerDatosAcreditado, setDatosAcreditado] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Realizar la solicitud POST al servidor
    axios
      .post("http://localhost:8001/{/*CAMBIAR*/}}", data) //cambiar para que sea un update
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
        {financiamiento.map((Fuser, Findex) => (
          <form class="row g-3" onSubmit={handleSubmit(onSubmit)} key={Findex}>
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
                defaultValue={Fuser.Esquema}
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
                defaultValue={Fuser.Convocatoria}
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
                defaultValue={Fuser.Monto}
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
                defaultValue={Fuser.Plazos_Meses}
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
                defaultValue={Fuser.Periodo_de_gracia}
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
                defaultValue={Fuser.Tipo_de_garantia}
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
                defaultValue={Fuser.NoContrato}
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
                defaultValue={Fuser.Fecha_Elaboracion}
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
                defaultValue={Fuser.CIE}
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
                defaultValue={Fuser.Referencia_Bancaria}
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
                defaultValue={Fuser.Cuenta_Bancaria}
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
                defaultValue={Fuser.Dias_de_gracia_por_reflejo}
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
                defaultValue={Fuser.Condicionante_dias_de_retraso}
              ></input>
              <label class="asterisk">Condiciones de dias de retraso</label>
            </div>
            <div>
              <input
                class="btn btn-primary"
                type="submit"
                value="Enviar"
              ></input>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};
export default Finanzamiento;
