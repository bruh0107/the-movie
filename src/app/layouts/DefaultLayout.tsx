import {AppHeader} from "@/widgets/layouts";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <AppHeader />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout