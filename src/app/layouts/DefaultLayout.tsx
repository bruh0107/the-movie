import {AppHeader} from "@/widgets/layouts";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <AppHeader />
            <main>
                <div className="main-container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout