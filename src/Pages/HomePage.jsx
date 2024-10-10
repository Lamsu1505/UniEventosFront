import { BGHomeComponent } from "../components/BackGroundHomeComponent/BGHomeComponent";
import { TopBarComponent } from "../components/TopBar_Component/TopBarComponent";
import {CategoriesBarComponent} from "../components/CategoriesBarComponent/CategoriesBarComponent";

function HomePage() {
    return (
        <div>
            <BGHomeComponent>
                <TopBarComponent/>
                <CategoriesBarComponent/>
            </BGHomeComponent>
        </div>

    );
}

export { HomePage };
