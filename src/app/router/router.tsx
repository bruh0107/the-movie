import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";
import { ApprovedPage, HomePage, MoviePage, ProfilePage } from "@/pages";
import { ProfileFavoriteMovie, ProfileWatchlist } from "@/widgets/profile";
import CatalogPage from "@/pages/catalog/CatalogPage.tsx";

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
                element: <ProfilePage />,
                children: [
                    {
                        index: true,
                        element: <ProfileFavoriteMovie />
                    },
                    {
                        path: 'favorite',
                        element: <ProfileFavoriteMovie />
                    },
                    {
                        path: 'watchlist',
                        element: <ProfileWatchlist />
                    }
                ]
            },
            {
                path: '/movie/:id',
                element: <MoviePage />,
            },
            {
                path: '/movies',
                element: <CatalogPage />
            }
        ]
    }
])