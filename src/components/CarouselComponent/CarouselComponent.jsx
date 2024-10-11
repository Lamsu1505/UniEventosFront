import './CarouselComponent.css';
import React from "react";
import circusMaximus from "../CarouselComponent/imgs/circusMaximus.jpg";
import {SearchBarComponent} from "../SearchBarComponent/SearchBarComponent";



const CarouselComponent = () => {
    return (
        <div className="prueba">
            <div className="contenedor">
                <img src={circusMaximus} className="imgCircus"/>
            </div>
        </div>

    );
};

export {CarouselComponent};