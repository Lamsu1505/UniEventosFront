import React, { useEffect } from 'react';
import { TopBarComponentLoged } from "../../../components/TopBar_Component/TobBar_LogedComponent/TopBarComponentLoged";
import { CategoriesBarComponent } from "../../../components/CategoriesBarComponent/CategoriesBarComponent";
import { SearchBarComponent } from "../../../components/SearchBarComponent/SearchBarComponent";
import {CarouselComponent} from "../../../components/CarouselComponent/CarouselComponent";
import "./HomePage.css"
import {CardEventoComponent} from "../../../components/CardEventoComponent/CardEventoComponent";
import ContenedorCardsEvents from "../../../components/ContenedorCardsEventos/ContenedorCardsEvents";
import {
    TopBarComponentNotLoged
} from "../../../components/TopBar_Component/TopBar_NotLogedComponent/TopBarComponentNotLoged";

function HomePageNotLoged() {

    useEffect(() => {
        document.title = "Home - UniEventos"; // Cambia "My App" por el nombre de tu aplicación
    }, []);


    return (

        <div className="contenedorGeneral">

            <div className="contenedorTopBar">
                <TopBarComponentNotLoged/>
            </div>
            <div className="contenedorCategoriesBar">
                <CategoriesBarComponent/>
            </div>
            <div className="contenedorImgYBuscar">
                <CarouselComponent/>
                <SearchBarComponent/>
            </div>
            <div className="contenedorCartas">
                <div className="contenedorDivH2">
                    <div className="divH2">
                        <h2 className="textoH2">
                            Todos los eventos
                        </h2>
                    </div>
                </div>

                <ContenedorCardsEvents/>

            </div>

        </div>


    );
}

export {HomePageNotLoged};
