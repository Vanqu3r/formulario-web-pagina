import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';

import { useParams, Link } from 'react-router-dom'; // Importa el hook useParams de React Router
import '../css/perfilUsuario.css';

const PerfilUsuario = () => {

   const {register,handleSubmit} = useForm();

   const onSubmit = (data) => {
        // Realizar la solicitud POST al servidor
        Axios.post('http://localhost:8001/formulario', data)
            .then(response => {
                console.log(response.data); // Manejar la respuesta del servidor si es necesario
            })
            .catch(error => {
                console.error('Error al enviar datos:', error);
            });
    }



    const [acreditados, setUserAcreditados] = useState([]);
    const [tablaAcreditado,setTablaAcreditado] = useState([]);
    const [tablaAbono,setTablaAbono] = useState([]);

    const { id } = useParams(); // Obtiene el ID de la URL dinámica

    const getAcreditados = async () => {
        try {
            const { data } = await Axios.get(`http://localhost:8001/acreditado/usuario/${id}`); // Utiliza el ID dinámico en la URL
            setUserAcreditados(data);
        } catch (error) {
            console.error('Error al obtener acreditados:', error);
        }
    };

    const getTablaAcreditadoAbono = async () => {
        try {
            const { data } = await Axios.get(`http://localhost:8001/acreditado/usuario/abonoIdeal/${id}`); // Utiliza el ID dinámico en la URL
            setTablaAcreditado(data);
        } catch (error) {
            console.error('Error al obtener acreditados:', error);
        }
    };

    const getTablaAbono = async () => {
        try {
            const { data } = await Axios.get(`http://localhost:8001/acreditado/usuario/abono/${id}`); // Utiliza el ID dinámico en la URL
            setTablaAbono(data);
        } catch (error) {
            console.error('Error al obtener acreditados:', error);
        }
    };

    useEffect(() => {
        getAcreditados();
        getTablaAcreditadoAbono();
        getTablaAbono();
    }, [id]); // Agrega 'id' como una dependencia para que se vuelva a ejecutar cuando cambie el ID

    return (
        <div>
            {acreditados.map((user, index) => (
                <p key={index}>{user.Razon_Social}</p>
            ))
            }
           

    <div className="d-flex justify-content-between"> 
            <div className="card" >
                <form class="row g-3" onSubmit={handleSubmit(onSubmit)} >
                        <div class="col-md-5"   >
                            <label >Cantidad a abonar</label>
                            <input type="number"  class="form-control" placeholder="$$$"  {...register('Pago')}></input>
                        </div>
                        <div  class="col-md-5">
                            <label>Fecha de Abono</label>
                            <input type="date" {...register('Fecha_Pago')}></input>
                        </div>
                        <div >
                            <input type="submit" value="Enviar"></input>  
                        </div> 
                </form>
            </div>


            
            <div className="d-flex justify-content-end"> 
            <div className="card" style={{ width: '40rem', height: '40rem', overflowX: 'auto', overflowY: 'auto' }}>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" className="fs-6">NoPeriodo</th>
                                        <th scope="col" className="fs-6">Monto_inicial</th>
                                        <th scope="col" className="fs-6">Intereses</th>
                                        <th scope="col" className="fs-6">Abono_al_Capital</th>
                                        <th scope="col" className="fs-6">Pago</th>
                                        <th scope="col" className="fs-6">Saldo_final</th>
                                        <th scope="col" className="fs-6">Fecha_Pago</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tablaAcreditado.map((usuario, indexT) => (
                                        <tr key={indexT}>
                                            <td className="fs-6">{usuario.NoPeriodo}</td>
                                            <td className="fs-6">{usuario.Monto_inicial}</td>
                                            <td className="fs-6">{usuario.Intereses}</td>
                                            <td className="fs-6">{usuario.Abono_al_Capital}</td>
                                            <td className="fs-6">{usuario.Pago}</td>
                                            <td className="fs-6">{usuario.Saldo_final}</td>
                                            <td className="fs-6">{usuario.Fecha_Pago}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            </div>

            <div className="d-flex justify-content-end"> 
            <div className="card" style={{ width: '40rem', height: '40rem', overflowX: 'auto', overflowY: 'auto' }}>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" className="fs-6">NoPeriodo</th>
                                        <th scope="col" className="fs-6">Monto_inicial</th>
                                        <th scope="col" className="fs-6">Intereses</th>
                                        
                                        <th scope="col" className="fs-6">Pago</th>
                                        <th scope="col" className="fs-6">Saldo_final</th>
                                        <th scope="col" className="fs-6">Fecha_Pago</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tablaAbono.map((usuario, indexT) => (
                                        <tr key={indexT}>
                                            <td className="fs-6">{usuario.NoPeriodo}</td>
                                            <td className="fs-6">{usuario.Monto_inicial}</td>
                                            <td className="fs-6">{usuario.Intereses}</td>
                                            
                                            <td className="fs-6">{usuario.Pago}</td>
                                            <td className="fs-6">{usuario.Saldo_final}</td>
                                            <td className="fs-6">{usuario.Fecha_Pago}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            </div>

            </div>
            </div>
             
    );
};

export default PerfilUsuario;
