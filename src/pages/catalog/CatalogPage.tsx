import { Outlet } from "react-router-dom";
import { useTitle } from "@/shared/lib";

const CatalogPage = () => {
    useTitle("Каталог")

    return (
        <div className="main-container">
            <Outlet />
        </div>
    )
}

export default CatalogPage