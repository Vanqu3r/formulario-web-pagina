import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/acreditados.css';

import {Link } from 'react-router-dom';

const Acreditados = () => {
    const [acreditados, setUserAcreditados] = useState([]);

    const getAcreditados = async () => {
        try {
            const { data } = await Axios.get('http://localhost:8001/acreditado');
            setUserAcreditados(data);
        } catch (error) {
            console.error('Error al obtener acreditados:', error);
        }
    };

    const getAcreditadosById = async (userId) => {
        try {
            const { data } = await Axios.get(`http://localhost:8001/acreditado/usuario/${userId}`);
            setUserAcreditados(data);
        } catch (error) {
            console.error('Error al obtener acreditados por ID:', error);
        }
    };

    useEffect(() => {
        getAcreditados();
    }, []);

    return (
        <div className="Principal">
            <p>Acreditados</p>    
            
            <div className="table-container">
                <div className="table-responsive-lg p">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Razon_Social</th>
                            <th scope="col">Domicilio</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Fecha_Inicio_Operaciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {acreditados.map((user, index) => (
                            <tr key={index}>
                            <th>{user.ID_Acreditado}</th>
                            <th>
                                <Link
                                to={`/acreditado/usuario/${user.ID_Acreditado}`}
                                onClick={() => getAcreditadosById(user.ID_Acreditado)}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                {user.Razon_Social}
                                </Link>
                            </th>
                            <th>{user.Domicilio}</th>
                            <th>{user.Telefono}</th>
                            <th>{user.Fecha_Inicio_Operaciones}</th>
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
