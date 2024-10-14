import './CardEventoComponent.css';
import { useNavigate } from "react-router-dom";
import React from "react";

// Si la imagen está en la carpeta src
import circusMaximusPoster from './imgs/CIrcusMaximusPoster.jpg';

const CardEventoComponent = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    return (
        <div>
            <div className="card">
                <div className="contenedorImg">
                    <img src={circusMaximusPoster} className="card-img-top" alt="Circus Maximus Poster"/>
                </div>

                <div className="barraInfoConciertoCard">
                    <div className="infoFecha">

                    </div>

                    <div className="infoHora">

                    </div>
                </div>

                <div className="card-body">
                <h5 className="card-title">Travis Scott</h5>
                    <p className="infoLugar">Bogota: Coliseo MedPlus</p>
                </div>

            </div>
        </div>
    );
};

export { CardEventoComponent };
