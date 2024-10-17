import React, { useEffect } from 'react';
import {TopBarComponentLoged} from "../../components/TopBar_Component/TobBar_LogedComponent/TopBarComponentLoged";
import {CategoriesBarComponent} from "../../components/CategoriesBarComponent/CategoriesBarComponent";
import "./AccountPage.css"
import {
    InfoPersonalMyAccountComponent
} from "../../components/InfoPersonalMyAccountComponent/InfoPersonalMyAccountComponent";

function AccountPage() {

    useEffect(() => {
        document.title = "Home - UniEventos"; // Cambia "My App" por el nombre de tu aplicación
    }, []);


    return (

        <div className="contenedorGeneral">

            <div className="contenedorTopBar">
                <TopBarComponentLoged/>
            </div>
            <div className="contenedorCategoriesBar">
                <CategoriesBarComponent/>
            </div>
           <div className="contenedorMiCuenta">
               <h1 className="h2MiCuenta">
                   Mi cuenta
               </h1>
           </div>
            <div className="contenedorPrincipalMyAccount">
                <InfoPersonalMyAccountComponent/>
            </div>

        </div>


    );
}

export {AccountPage};
