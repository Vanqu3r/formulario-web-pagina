import React from 'react';
import '../css/header.css';

const header = () => {
    return (
        <div className="header-container">
            <div className="header-logo"></div>
            <div className="header-nombre">
                <div>
                    <p>SECRETARÍA DE HACIENDA</p>
                    <p className="small-text">SISTEMA DE CONTROL DE COBRANZA</p>
                </div>
                <button type="button" className="btn btn-outline-warning">Usuarios</button>
            </div>
        </div>
    );
};


export default header;
