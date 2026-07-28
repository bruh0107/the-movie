import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";
import { ApprovedPage, HomePage } from "@/pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/approved',
                element: <ApprovedPage />
            }
        ]
    }
])