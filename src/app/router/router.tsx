import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";
import { ApprovedPage, HomePage, MoviePage, ProfilePage, TVPage } from "@/pages";
import { ProfileFavoriteMovie, ProfileWatchlist } from "@/widgets/profile";
import CatalogPage from "@/pages/catalog/CatalogPage.tsx";
import { MovieCatalog } from "@/widgets/movie";
import { TVCatalog } from "@/widgets/tv";

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
                path: '/catalog',
                element: <CatalogPage />,
                children: [
                    {
                        path: 'movies',
                        element: <MovieCatalog />
                    },
                    {
                        path: 'tv',
                        element: <TVCatalog />
                    }
                ]
            },
            {
                path: '/movie/:id',
                element: <MoviePage />,
            },
            {
                path: '/tv/:id',
                element: <TVPage />
            }
        ]
    }
])