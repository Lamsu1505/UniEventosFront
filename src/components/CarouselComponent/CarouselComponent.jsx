import './CarouselComponent.css';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CarouselComponent = () => {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    // Lista de imágenes que se van a mostrar en el carrusel
    const images = [
        require('../CarouselComponent/imgs/circusMaximus.jpg'),
        require('../CarouselComponent/imgs/gtrImg.jpg')
    ];

    // Estado para controlar la imagen activa
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir a la siguiente imagen
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Función para ir a la imagen anterior
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // useEffect para cambiar la imagen automáticamente cada 2 segundos
    useEffect(() => {
        const interval = setInterval(handleNext, 4000); // Cambia de imagen cada 2 segundos

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []); // [] significa que el efecto se ejecuta solo una vez al montar el componente

    return (
        <div className="contenedorGeneralCarrusel">
            <div className="carousel-container">
                <div className="carousel slide" data-bs-touch="false">
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                            >
                                {index === currentIndex && (
                                    <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CarouselComponent };
