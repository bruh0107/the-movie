import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";
import { ApprovedPage, HomePage, MoviePage, ProfilePage } from "@/pages";

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
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/movie/:id',
                element: <MoviePage />,
            }
        ]
    }
])