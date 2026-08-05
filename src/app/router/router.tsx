import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@/app/layouts";
import { ApprovedPage, CatalogPage, HomePage, MoviePage, ProfilePage, TVPage } from "@/pages";
import { ProfileFavorite, ProfileWatchlist } from "@/widgets/profile";
import { FavoriteMovies, MovieCatalog, WatchlistMovies } from "@/widgets/movie";
import { TVCatalog } from "@/widgets/tv";
import { FavoriteTV } from "@/widgets/tv/favorite";
import { WatchlistTV } from "@/widgets/tv/watchlist";

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
                        element: <ProfileFavorite />
                    },
                    {
                        path: 'favorite',
                        element: <ProfileFavorite />,
                        children: [
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
])