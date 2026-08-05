import { useState } from "react";
import { ListsList, ListsPagination } from "@/shared/ui";
import { useWatchlistTV } from "@/entities/tv";

const WatchlistTV = () => {
    const [page, setPage] = useState(1)
    const { data: watchlistMovies, isPlaceholderData, isLoading } = useWatchlistTV(page)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!watchlistMovies) {
        return <div className="py-10 text-center">Фильмы не найдены</div>;
    }

    return (
        <>
            <ListsList contents={watchlistMovies} path="tv" />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={watchlistMovies}
            />
        </>
    )
}

export default WatchlistTV