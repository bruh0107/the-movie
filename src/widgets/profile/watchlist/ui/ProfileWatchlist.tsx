import { useWatchlistMovies } from "@/entities/movie";
import { ListsList } from "@/widgets/movie";

const ProfileWatchlist = () => {
    const { data: watchlist } = useWatchlistMovies()

    return (
        <ListsList movies={watchlist} />
    );
};

export default ProfileWatchlist;