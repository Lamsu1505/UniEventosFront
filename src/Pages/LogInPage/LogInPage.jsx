import {BgLog} from "../../components/BackGroundLogInComponent/BgLog";
import {LoginComponent} from "../../components/Login_Component/LoginComponent";
import {useEffect} from "react";

function LogInPage() {

    useEffect(() => {
        document.title = "LogIn - UniEventos"; // Cambia "My App" por el nombre de tu aplicación
    }, []);
    return (

        <BgLog
            COMPONENT={LoginComponent}
        />

    );
}

export {LogInPage};