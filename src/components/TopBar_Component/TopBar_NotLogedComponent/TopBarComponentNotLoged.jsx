
import React from 'react';
import "../TopBarComponent.css";
import addUser from "../imgs/addUser.svg"
import user from "../imgs/user.svg"
import { useNavigate } from 'react-router-dom';

const TopBarComponentNotLoged = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    // Función para manejar la redirección a la página de registro
    const handleCreateAccount = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    // Función para manejar la redirección a la página de inicio de sesión
    const handleLogin = () => {
        navigate('/login'); // Redirige a la página de inicio de sesión
    };


    return (
        <div className="top-bar">
            <div className="logo">
                <span className="logo-text">UE</span>
                <span className="app-name">UniEventos</span>
            </div>

            <div className="actions">

                <button className="action-button" onClick={handleCreateAccount}>
                    <img src={addUser} alt="Agregar Usuario" className="button-icon1"/>
                    <span>Registrarse</span>
                </button>

                <button className="action-button" onClick={handleLogin}>
                    <img src={user} alt="Agregar Usuario" className="button-icon1"/>
                    <span>Iniciar sesión</span>
                </button>
            </div>

        </div>


    );
};


export {TopBarComponentNotLoged};
