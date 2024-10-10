import {BgLog} from "../components/BackGroundLogInComponent/BgLog";
import {RegisterComponent} from "../components/Register_Component/RegisterComponent";
import {BGHomeComponent} from "../components/BackGroundHomeComponent/BGHomeComponent";
import {LoginComponent} from "../components/Login_Component/LoginComponent";

function RegisterPage() {
    return (

        <BgLog
            COMPONENT={RegisterComponent}
        />

    );
}

export {RegisterPage};