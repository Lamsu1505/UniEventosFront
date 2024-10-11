import React from 'react';
import "./SearchBarComponent.css";


const SearchBarComponent = () => {

    return (
        <div className="contenedorSearch">
            <div className="search-bar">
                <div className="search-input">
                    <input type="text" placeholder="Buscar eventos o escenarios"/>
                </div>
                <button className="filter-button">
                    <span>Categorías</span>
                </button>
                <button className="filter-button">
                    <span>Fecha</span>
                </button>
                <button className="filter-button">
                    <span>Ciudad</span>
                </button>
            </div>
        </div>


    );
};


export {SearchBarComponent};