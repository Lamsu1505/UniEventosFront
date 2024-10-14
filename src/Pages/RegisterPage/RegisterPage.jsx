import {BgLog} from "../../components/BackGroundLogInComponent/BgLog";
import {RegisterComponent} from "../../components/Register_Component/RegisterComponent";
import {BGHomeComponent} from "../../components/BackGroundHomeComponent/BGHomeComponent";
import {LoginComponent} from "../../components/Login_Component/LoginComponent";
import {useEffect} from "react";

function RegisterPage() {
    useEffect(() => {
        document.title = "Register - UniEventos"; // Cambia "My App" por el nombre de tu aplicación
    }, []);

    return (

        <BgLog
            COMPONENT={RegisterComponent}
        />

    );
}

export {RegisterPage};