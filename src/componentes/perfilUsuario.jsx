import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom'; // Importa el hook useParams de React Router
import '../css/acreditados.css';

const PerfilUsuario = () => {
    const [acreditados, setUserAcreditados] = useState([]);
    const { id } = useParams(); // Obtiene el ID de la URL dinámica

    const getAcreditados = async () => {
        try {
            const { data } = await Axios.get(`http://localhost:8001/acreditado/usuario/${id}`); // Utiliza el ID dinámico en la URL
            setUserAcreditados(data);
        } catch (error) {
            console.error('Error al obtener acreditados:', error);
        }
    };

    useEffect(() => {
        getAcreditados();
    }, [id]); // Agrega 'id' como una dependencia para que se vuelva a ejecutar cuando cambie el ID

    return (
        <div>
            {acreditados.map((user, index) => (
                <p key={index}>{user.Razon_Social}</p>
            ))}
        </div>
    );
};

export default PerfilUsuario;
