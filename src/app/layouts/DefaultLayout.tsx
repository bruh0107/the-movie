import {AppHeader} from "@/widgets/layouts";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout