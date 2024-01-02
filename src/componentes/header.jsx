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
                <div class="dropdown me-1">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                    Menu
                    </button>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/">Inicio</a></li>
                    <li><a class="dropdown-item" href="/acreditados">Acreditados</a></li>
                    <li><a class="dropdown-item" href="/acreditado/finanzamiento">Finanzamiento</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default header;
