import { ListsList } from "@/widgets/movie";
import { useFavoriteMovies } from "@/entities/movie";
import { useState } from "react";
import { ListsPagination } from "@/shared/ui";

const ProfileFavoriteMovie = () => {
    const [page, setPage] = useState(1)
    const { data: favoriteMovies, isPlaceholderData } = useFavoriteMovies(page)

    return (
        <>
            <ListsList movies={favoriteMovies} />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                movies={favoriteMovies}
            />
        </>
    )
}

export default ProfileFavoriteMovie