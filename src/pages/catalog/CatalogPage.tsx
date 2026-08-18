import { Outlet } from "react-router-dom";

const CatalogPage = () => {
    return (
        <div className="main-container">
            <Outlet />
        </div>
    )
}

export default CatalogPage