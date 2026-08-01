import { Link, useLocation } from "react-router-dom";

const MovieTabs = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isFavoriteActive = currentPath === '/profile/favorite' || currentPath === '/profile';
    const isWatchlistActive = currentPath === '/profile/watchlist';

    return (
        <div className="flex gap-5 mb-10 text-xl">
            <Link
                to="/profile/favorite"
                className={`p-3 rounded-md ${isFavoriteActive ? 'bg-second' : ''}`}
            >
                Избранные фильмы
            </Link>

            <Link
                to="/profile/watchlist"
                className={`p-3 rounded-md ${isWatchlistActive ? 'bg-second' : ''}`}
            >
                Буду смотреть
            </Link>
        </div>
    );
};

export default MovieTabs;