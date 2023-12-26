
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../css/formularioAcreditado.css';

const FormularioAcreditado = () => {

    const {register,handleSubmit} = useForm();

   const onSubmit = (data) => {
        // Realizar la solicitud POST al servidor
        axios.post('http://localhost:8001/formulario', data)
            .then(response => {
                console.log(response.data); // Manejar la respuesta del servidor si es necesario
            })
            .catch(error => {
                console.error('Error al enviar datos:', error);
            });
    }

    return (
        <div className="formulario-container">
          <div className="formulario">  
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label>RFC con Homoclave</label>
                    <input type="text" {...register('nombre')}></input>
                </div>
                <div>
                    <label>Nombre o razón socia</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Nombre o razón socia</label>
                    <input type="text"></input>
                </div> 
                <div>
                    <label>Núm de Empleados</label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Fecha de inicio de operaciones</label>
                    <input type="date"></input>
                </div> 
                <div>
                    <label>Telefono</label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Telefono WhastApp</label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>CURP</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Descripción de la actividad económica</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Cámara u Organismo Empresarial al que está inscrito</label>
                    <select></select>
                </div>
                <div>
                    <label>Correo electrónico de Contacto</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Confirme su Correo electrónico</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Sector</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Estado Civil</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Grupo Vulnerable</label>
                    <select></select>
                </div>
                <div>
                    <label>Discapacidad</label>
                    <select></select>
                </div>
                <input type="submit" value="Enviar"></input>                                  
            </form>
            </div>  
        </div>
    );
};

export default FormularioAcreditado;
