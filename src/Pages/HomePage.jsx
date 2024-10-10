import {BGHomeComponent} from "../components/BackGroundHomeComponent/BGHomeComponent";
import {TopBarComponent} from "../components/TopBar_Component/TopBarComponent"

function HomePage() {
    return (
        <BGHomeComponent
            COMPONENT={TopBarComponent}
        />

    );
}

export {HomePage};