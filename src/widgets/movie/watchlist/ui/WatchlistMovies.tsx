import { ListsList, ListsPagination } from "@/shared/ui";
import { useState } from "react";
import { useWatchlistMovies } from "@/entities/movie";

const WatchlistMovies = () => {
    const [page, setPage] = useState(1)
    const { data: watchlistMovies, isPlaceholderData, isLoading } = useWatchlistMovies(page)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!watchlistMovies) {
        return <div className="py-10 text-center">Фильмы не найдены</div>;
    }

    return (
        <>
            <ListsList contents={watchlistMovies} path="movie" />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={watchlistMovies}
            />
        </>
    )
}

export default WatchlistMovies