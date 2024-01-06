import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/acreditados.css";

import { Link } from "react-router-dom";

const Acreditados = () => {
  const [acreditados, setUserAcreditados] = useState([]);

  const getAcreditados = async () => {
    try {
      const { data } = await Axios.get("http://localhost:8001/acreditado");
      setUserAcreditados(data);
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
    }
  };

  const getAcreditadosById = async (userId) => {
    try {
      const { data } = await Axios.get(
        `http://localhost:8001/acreditado/usuario/${userId}`
      );
      setUserAcreditados(data);
    } catch (error) {
      console.error("Error al obtener acreditados por ID:", error);
    }
  };

  useEffect(() => {
    getAcreditados();
  }, []);

  return (
    <div className="Principal">
      <h2>Acreditados</h2>

      <div className="table-container">
        <div className="table-responsive-lg p">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Razon_Social</th>
                <th scope="col">Domicilio</th>
                <th scope="col">Telefono</th>
                <th scope="col">Fecha_Inicio_Operaciones</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {acreditados.map((user, index) => (
                <tr key={index}>
                  <td>
                    <Link
                      to={`/acreditado/usuario/${user.ID_Acreditado}`}
                      onClick={() => getAcreditadosById(user.ID_Acreditado)}
                      style={{ textDecoration: "none", color: "#7a252d" }}
                    >
                      {user.Razon_Social}
                    </Link>
                  </td>
                  <td>{user.Domicilio}</td>
                  <td>{user.Telefono}</td>
                  <td className="fs-responsive">
                    {
                      new Date(user.Fecha_Inicio_Operaciones)
                        .toISOString()
                        .split("T")[0]
                    }
                  </td>
                  <td>
                    <Link
                      to={`/acreditado/editar/${user.ID_Acreditado}`}
                      onClick={() => getAcreditadosById(user.ID_Acreditado)}
                      style={{ textDecoration: "none", color: "#7a252d" }}
                    >
                      <button class="btn btn-success">Editar</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Acreditados;
