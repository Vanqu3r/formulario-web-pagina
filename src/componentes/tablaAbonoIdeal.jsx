import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom"; // Importa el hook useParams de React Router

const TablaAbonoIdeal = () => {
  const { id } = useParams();
  const [tablaAcreditado, setTablaAcreditado] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTablaAcreditadoAbono = async () => {
    try {
      const { data } = await Axios.get(
        `http://localhost:8001/acreditado/usuario/abonoIdeal/${id}`
      );
      console.log("datos", data);
      setTablaAcreditado(data);

      setLoading(false); // Marcar la carga como completa
    } catch (error) {
      console.error("Error al obtener acreditados:", error);
      setLoading(false); // Marcar la carga como completa incluso en caso de error
    }
  };

  useEffect(() => {
    getTablaAcreditadoAbono();
  }, [id]);

  return (
    <div>
      <h5 className="card-title">Abono Ideal</h5>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <table className="table table-striped mb-0">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col" className="fs-responsive">
                  NoPeriodo
                </th>
                <th scope="col" className="fs-responsive">
                  Monto_inicial
                </th>
                <th scope="col" className="fs-responsive">
                  Intereses
                </th>
                <th scope="col" className="fs-responsive">
                  Abono_al_Capital
                </th>
                <th scope="col" className="fs-responsive">
                  Pago
                </th>
                <th scope="col" className="fs-responsive">
                  Saldo_final
                </th>
                <th scope="col" className="fs-responsive">
                  Fecha_Pago
                </th>
              </tr>
            </thead>
            <tbody>
              {tablaAcreditado.map((usuario, indexT) => (
                <tr key={indexT}>
                  <td className="fs-responsive">{usuario.NoPeriodo}</td>
                  <td className="fs-responsive">
                    {Number(usuario.Monto_inicial.toFixed(2))}
                  </td>
                  <td className="fs-responsive">
                    {Number(usuario.Abono_al_Capital.toFixed(2))}
                  </td>
                  <td className="fs-responsive">
                    {Number(usuario.Intereses.toFixed(2))}
                  </td>
                  <td className="fs-responsive">
                    {Number(usuario.Pago.toFixed(2))}
                  </td>
                  <td className="fs-responsive">
                    {Number(usuario.Saldo_final.toFixed(2))}
                  </td>
                  <td className="fs-responsive">
                    {new Date(usuario.Fecha_Pago).toISOString().split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
      )}
    </div>
  );
};

export default TablaAbonoIdeal;
