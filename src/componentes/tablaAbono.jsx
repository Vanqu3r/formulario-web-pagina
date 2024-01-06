import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const TablaAbono = () => {
  const { id } = useParams();
  const [tablaAbonos, setTablaAbono] = useState([]);

  const getTablaAbono = async () => {
    try {
      const { data } = await Axios.get(
        `http://localhost:8001/acreditado/usuario/abono/${id}`
      );
      setTablaAbono(data);
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
    }
  };

  useEffect(() => {
    getTablaAbono();
  }, [id]);

  return (
    <div>
      <h5 className="card-title">Abonos reales</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="fs-6">
              NoPeriodo
            </th>
            <th scope="col" className="fs-6">
              Monto_inicial
            </th>
            <th scope="col" className="fs-6">
              Intereses
            </th>
            <th scope="col" className="fs-6">
              Pago
            </th>
            <th scope="col" className="fs-6">
              Saldo_final
            </th>
            <th scope="col" className="fs-6">
              Fecha_Pago
            </th>
          </tr>
        </thead>
        <tbody>
          {tablaAbonos.map((usuario, indexT) => (
            <tr key={indexT}>
              <td className="fs-6">{usuario.NoPeriodo}</td>
              <td className="fs-6">{usuario.Monto_inicial}</td>
              <td className="fs-6">{usuario.Intereses}</td>
              <td className="fs-6">{usuario.Pago}</td>
              <td className="fs-6">{usuario.Saldo_final}</td>
              <td className="fs-responsive">
                {new Date(usuario.Fecha_Pago).toISOString().split("T")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAbono;
