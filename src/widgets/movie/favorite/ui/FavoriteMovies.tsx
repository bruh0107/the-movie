import { useState } from "react";
import { useFavoriteMovies } from "@/entities/movie";
import { ListsPagination } from "@/shared/ui";
import { ListsList } from "@/shared/ui";

const FavoriteMovies = () => {
    const [page, setPage] = useState(1)
    const { data: favoriteMovies, isPlaceholderData, isLoading } = useFavoriteMovies(page)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!favoriteMovies) {
        return <div className="py-10 text-center">Фильмы не найдены</div>;
    }

    return (
        <>
            <ListsList contents={favoriteMovies} path="movie" />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={favoriteMovies}
            />
        </>
    )
}

export default FavoriteMovies