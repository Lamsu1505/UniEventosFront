import './CategoriesBarComponent.css';
import {useNavigate} from "react-router-dom";
import houseSVG from "../CategoriesBarComponent/imgs/house.svg";
import  ticketImg from "../CategoriesBarComponent/imgs/ticketImg.svg";
import listImg from "../CategoriesBarComponent/imgs/listImg.svg";
import React from "react";


const CategoriesBarComponent = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación



    return (
        <div className="categorie-bar">


            <div className="categories-box">
                <button className="categorie">
                    <img src={houseSVG} className="button-icon"/>
                    <span className="categorieText">Inicio</span>
                </button>

                <button className="categorie">
                    <img src={listImg} className="button-icon"/>
                    <span className="categorieText">Todos los eventos</span>
                </button>

                <button className="categorie">
                    <img src={ticketImg}  className="button-icon"/>
                    <span className="categorieText">Conciertos</span>
                </button>

            </div>
        </div>
    );
};

export {CategoriesBarComponent};