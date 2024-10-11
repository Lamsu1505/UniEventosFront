import React, { useEffect } from 'react';
import { BGHomeComponent } from "../../components/BackGroundHomeComponent/BGHomeComponent";
import { TopBarComponent } from "../../components/TopBar_Component/TopBarComponent";
import { CategoriesBarComponent } from "../../components/CategoriesBarComponent/CategoriesBarComponent";
import { CarouselComponent } from "../../components/CarouselComponent/CarouselComponent";
import { SearchBarComponent } from "../../components/SearchBarComponent/SearchBarComponent";

function HomePage() {
    useEffect(() => {
        document.title = "Home - UniEventos"; // Cambia "My App" por el nombre de tu aplicación
    }, []);

    return (

        <div className="contenedorGeneral">

            <div className="contenedorTopBar">
                <TopBarComponent/>
            </div>
            <div className="contenedorCategoriesBar">
                <CategoriesBarComponent/>
            </div>
            <div className="containerFotoAndSearch">
                <CarouselComponent/>
                <SearchBarComponent />
            </div>
        </div>


    );
}

export {HomePage};
