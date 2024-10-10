import {BgLog} from "../components/BackGroundLogInComponent/BgLog";
import {RegisterComponent} from "../components/Register_Component/RegisterComponent";
import {BGHomeComponent} from "../components/BackGroundHomeComponent/BGHomeComponent";
function RegisterPage() {
    return (

        <BGHomeComponent
            COMPONENT={RegisterComponent}
        />

    );
}

export {RegisterPage};