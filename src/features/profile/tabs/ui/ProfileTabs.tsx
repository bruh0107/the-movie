import { Link, useLocation } from "react-router-dom"

const ProfileTabs = () => {
    const location = useLocation()
    const currentPath = location.pathname

    const isFavoriteMoviesActive = currentPath === '/profile/favorite/movies' || currentPath === '/profile'
    const isWatchlistMoviesActive = currentPath === '/profile/watchlist/movies'
    const isFavoriteTVActive = currentPath === '/profile/favorite/tv'
    const isWatchlistTVActive = currentPath === '/profile/watchlist/tv'

    return (
        <div className="flex gap-5 mb-10 text-xl">
            <Link
                to="/profile/favorite/movies"
                className={`p-3 rounded-md ${isFavoriteMoviesActive ? 'bg-second' : ''}`}
            >
                Избранные фильмы
            </Link>

            <Link
                to="/profile/watchlist/movies"
                className={`p-3 rounded-md ${isWatchlistMoviesActive ? 'bg-second' : ''}`}
            >
                Буду смотреть (фильмы)
            </Link>

            <Link
                to="/profile/favorite/tv"
                className={`p-3 rounded-md ${isFavoriteTVActive ? 'bg-second' : ''}`}
            >
                Избранные сериалы
            </Link>

            <Link
                to="/profile/watchlist/tv"
                className={`p-3 rounded-md ${isWatchlistTVActive ? 'bg-second' : ''}`}
            >
                Буду смотреть (сериалы)
            </Link>
        </div>
    )
}

export default ProfileTabs;