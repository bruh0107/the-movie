import { ListsList } from "@/widgets/movie";
import { useFavoriteMovies, useWatchlistMovies } from "@/entities/movie";

const MovieTabs = () => {
    const { data: watchlist } = useWatchlistMovies()
    const { data: favorite } = useFavoriteMovies()

    return (
        <div className="main-container">
            <ListsList movies={watchlist} />
            <ListsList movies={favorite} />
        </div>
    );
};

export default MovieTabs