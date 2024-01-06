import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom"; // Importa el hook useParams de React Router
import "../css/perfilUsuario.css";
import TablaAbonoIdeal from "./tablaAbonoIdeal";
import TablaAbono from "./tablaAbono";
const PerfilUsuario = () => {
  const { register, handleSubmit } = useForm(); // primer formulario
  const { register: registerArchivos, handleSubmit: handleSubmitArchivos } =
    useForm(); // Segundo formulario

  const onSubmit = (data) => {
    // Realizar la solicitud POST al servidor
    Axios.post(
      "http://localhost:8001/acreditado/usuario/abono/nuevo/${id}",
      data
    )
      .then((response) => {
        console.log(data);
        console.log(response.data); // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  const onSubmitArchivos = (data) => {
    // Realizar la solicitud POST al servidor
    Axios.post(
      "http://localhost:8001/acreditado/usuario/documento/nuevo/${id}",
      data
    )
      .then((response) => {
        console.log(data);
        console.log(response.data); // Manejar la respuesta del servidor si es necesario
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
      });
  };

  const { id } = useParams(); // Obtiene el ID de la URL dinámica

  //llamar documentos de la base de datos
  const [acreditados, setUserAcreditados] = useState([]);
  const [financiamiento, setfinanciamiento] = useState([]);

  const getAcreditados = async () => {
    try {
      const { data } = await Axios.get(
        `http://localhost:8001/acreditado/usuario/${id}`
      ); // Utiliza el ID dinámico en la URL
      setUserAcreditados(data);
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
    }
  };

  const getFinanciamiento = async () => {
    try {
      const { data } = await Axios.get(
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

  return (
    <div>
      {acreditados.map((user, index) => (
        <div key={index}>
          <h1>{user.Razon_Social}</h1>
        </div>
      ))}
      <div className="d-flex">
        <div className="d-flex justify-content-between">
          <div className="container mt-4 float-start">
            <div
              className="card"
              style={{
                width: "180%",
                height: "25%",
              }}
            >
              <div className="card-body">
                {/*abonos*/}
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  <p className="mb-0">
                    <h5>Nuevo Abono</h5>
                  </p>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder=""
                      {...register("Pago")}
                    />
                  </div>
                  <div>
                    <label>Fecha de Abono</label>
                    <input type="date" {...register("Fecha_Pago")} />
                  </div>
                  <div>
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Enviar"
                    />
                  </div>
                  {financiamiento.map((Fuser, Findex) => (
                    <p key={Findex}>
                      <input
                        type="hidden"
                        {...register("ID_Financiamiento", {
                          value: Fuser.ID_Financiamiento,
                        })}
                      />
                    </p>
                  ))}
                </form>
                {/*fin abonos*/}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-5">
              <div
                className="card mb-4"
                style={{
                  width: "100%",
                  height: "30%",
                  overflow: "auto",
                }}
              >
                <div className="card-body">
                  {acreditados.map((user, index) => (
                    <div key={index}>
                      <p>Razon social: {user.Razon_Social}</p>
                      <p>Rfc: {user.RFC}</p>
                      <p>Municipio: {user.Municipio}</p>
                      <p>Domicilio: {user.Domicilio}</p>
                      <p>Colonia: {user.Colonia}</p>
                      <p>Telefono: {user.Telefono}</p>
                      <p>Correo_Electronico: {user.Correo_Electronico}</p>
                      <p>Municipio: {user.Municipio}</p>
                      <p>Camara_Organismo: {user.Camara_Organismo}</p>
                      <p>
                        Fecha_Inicio_Operaciones:{" "}
                        {
                          new Date(user.Fecha_Inicio_Operaciones)
                            .toISOString()
                            .split("T")[0]
                        }
                      </p>
                      <p>Sector: {user.Sector}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/*archivos*/}
              <div className="card mb-4">
                <div className="card-body">
                  <form
                    className="card-body"
                    onSubmit={handleSubmitArchivos(onSubmitArchivos)}
                  >
                    <p className="mb-0">
                      <h5>Documentos</h5>
                    </p>
                    <input
                      type="text"
                      placeholder="Nombre del documento"
                      {...registerArchivos("tipo_documento")}
                    />
                    <div>
                      <input type="file" {...registerArchivos("archivo")} />
                    </div>
                    <div>
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Enviar"
                      />
                    </div>
                    {/*cambiar esto*/}{" "}
                    {financiamiento.map((Fuser, Findex) => (
                      <input
                        type="hidden"
                        {...registerArchivos("ID_Acreditado", {
                          value: id,
                        })}
                      />
                    ))}
                  </form>
                  {/*fin de archivos*/}
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="card mb-4"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    overflow: "auto",
                  }}
                >
                  <TablaAbono />
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    overflow: "auto",
                  }}
                >
                  <TablaAbonoIdeal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
