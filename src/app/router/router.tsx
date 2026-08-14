import { ApprovedPage, CatalogPage, HomePage, MoviePage, ProfilePage, TVPage } from "@/pages";
import { FavoriteMovies, MovieCatalog, WatchlistMovies } from "@/widgets/movie";
import { ProfileFavorite, ProfileWatchlist } from "@/widgets/profile";
import { TVCatalog, FavoriteTV, WatchlistTV } from "@/widgets/tv";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";

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
                        element: <Navigate to="favorite/movies" replace />
                    },
                    {
                        path: 'favorite',
                        element: <ProfileFavorite />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="movies" replace />
                            },
                            {
                                path: 'movies',
                                element: <FavoriteMovies />
                            },
                            {
                                path: 'tv',
                                element: <FavoriteTV />
                            }
                        ]
                    },
                    {
                        path: 'watchlist',
                        element: <ProfileWatchlist />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="movies" replace />
                            },
                            {
                                path: 'movies',
                                element: <WatchlistMovies />
                            },
                            {
                                path: 'tv',
                                element: <WatchlistTV />
                            }
                        ]
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
]);