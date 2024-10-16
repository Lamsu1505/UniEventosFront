import './CardEventoComponent.css';
import { useNavigate } from "react-router-dom";
import React from "react";

// Si la imagen está en la carpeta src
import circusMaximusPoster from './imgs/CIrcusMaximusPoster.jpg';
import calendar from "./imgs/calendar.svg";
import clock from "./imgs/clockImg.svg";

const CardEventoComponent = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    // Función para manejar el clic del botón al hacer hover
    const handleButtonClick = () => {
        // Navegar a otra página o realizar alguna acción
        navigate("/evento");
    };


    const TicketIcon = () => (
        <svg width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="ticket-icon">
            <path d="M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"/>
        </svg>
    );

    return (
        <div>
            <div className="card">
                <div className="contenedorImg">
                    <img src={circusMaximusPoster} className="card-img-top" alt="Circus Maximus Poster"/>
                </div>

                <div className="barraInfoConciertoCard">
                    <div className="infoFecha">
                        <img src={calendar} className="button-iconSearch"/>
                        <h5 className="fechaText">Septiembre, 15</h5>
                    </div>

                    <div className="infoHora">
                        <img src={clock} className="button-iconSearch"/>
                        <h5 className="fechaText">8:00 pm</h5>
                    </div>
                </div>

                <div className="contenedorInfo">
                    <div className="card-body">
                        <div className="nombreEvento">
                            <h5 className="card-title">Concierto Travis Scott</h5>
                        </div>

                        <p className="infoLugar">Bogotá: Coliseo MedPlus</p>

                    </div>

                    <button className="boton-hover">
                        <TicketIcon color="#000000"/> {/* Cambia el color aquí */}
                    </button>
                </div>

            </div>
        </div>
    );
};

export {CardEventoComponent};
