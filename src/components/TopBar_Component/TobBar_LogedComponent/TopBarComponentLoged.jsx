import React, { useState } from 'react';
import "../TopBarComponent.css";
import carro from "../imgs/carroCompras.svg";
import user from "../imgs/user.svg";
import { useNavigate } from 'react-router-dom';
import logOutImg from "../imgs/logOutImg.svg";
import settingImg from "../imgs/settingImg.svg";
import history from "../imgs/historyImg.svg";


const TopBarComponentLoged = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú desplegable

    // Función para manejar la redirección a la página de registro
    const handleMyAccount = () => {
        navigate('/MyAccount'); // Redirige a la página de registro
    };

    const handleCarrito = () => {
        navigate('/login'); // Redirige a la página de registro
    };

    // Función para alternar la visibilidad del menú desplegable
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="top-bar">
            <div className="logo">
                <span className="logo-text">UE</span>
                <span className="app-name">UniEventos</span>
            </div>

            <div className="actions">
                {/* Botón de usuario con menú desplegable */}
                <div className="user-menu">
                    <button className="action-button" onClick={toggleMenu}>
                        <img src={user} alt="Agregar Usuario" className="button-icon1" />
                        <span>Andres Perez</span>
                    </button>

                    {/* Menú desplegable */}
                    {isMenuOpen && (
                        <ul className="dropdown-menu">
                            <div className="contenedorMenuDesplegado">
                                <img src={settingImg} alt="Agregar Usuario" className="button-icon2"/>
                                <li><a href="" onClick={handleMyAccount}>Mi cuenta</a></li>
                            </div>

                            <div className="contenedorMenuDesplegado">
                                <img src={history} alt="Agregar Usuario" className="button-icon2"/>
                                <li><a onClick={handleCarrito}>Mis boletos</a></li>
                            </div>

                            <div className="contenedorMenuDesplegado">
                                <img src={logOutImg} alt="Agregar Usuario" className="button-icon2"/>
                                <li><a onClick={handleCarrito}>Cerrar sesion</a></li>
                            </div>
                        </ul>
                    )}
                </div>

                <button className="action-button" onClick={handleCarrito}>
                    <img src={carro} alt="Carrito" className="button-icon1"/>
                </button>
            </div>
        </div>
    );
};

export { TopBarComponentLoged };
