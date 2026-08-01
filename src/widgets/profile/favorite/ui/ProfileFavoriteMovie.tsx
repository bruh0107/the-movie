import { ListsList } from "@/widgets/movie";
import { useFavoriteMovies } from "@/entities/movie";

const ProfileFavoriteMovie = () => {
    const { data: favoriteMovies } = useFavoriteMovies()

    return (
        <ListsList movies={favoriteMovies} />
    );
};

export default ProfileFavoriteMovie;