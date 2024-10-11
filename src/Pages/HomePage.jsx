import { BGHomeComponent } from "../components/BackGroundHomeComponent/BGHomeComponent";
import { TopBarComponent } from "../components/TopBar_Component/TopBarComponent";
import {CategoriesBarComponent} from "../components/CategoriesBarComponent/CategoriesBarComponent";
import {CarouselComponent} from "../components/CarouselComponent/CarouselComponent";
import {SearchBarComponent} from "../components/SearchBarComponent/SearchBarComponent";

function HomePage() {
    return (
        <div>
            <BGHomeComponent>
                <TopBarComponent/>
                <CategoriesBarComponent/>
                <CarouselComponent/>
            </BGHomeComponent>
        </div>

    );
}

export { HomePage };
