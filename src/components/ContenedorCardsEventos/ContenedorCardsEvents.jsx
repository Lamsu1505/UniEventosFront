import React, { useState, useEffect } from 'react';
import {CardEventoComponent} from "../CardEventoComponent/CardEventoComponent";

const CardGrid = () => {
    const [cards, setCards] = useState([]);

    // Realizamos el fetch al backend para obtener las cards
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('URL_DEL_BACKEND');
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    // Creamos el layout con 3 columnas
    const renderCards = () => {
        return cards.map((card, index) => (
            <div className="card" key={index}>
                {/* Contenido de cada card */}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
        ));
    };

    return (
        <div className="card-grid">
            {renderCards()}
            <CardEventoComponent/>
            <CardEventoComponent/>
            <CardEventoComponent/>
            <CardEventoComponent/>
            <CardEventoComponent/>

        </div>
    );
};

export default CardGrid;
