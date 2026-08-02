import { useWatchlistMovies } from "@/entities/movie";
import { ListsList } from "@/widgets/movie";
import { ListsPagination } from "@/shared/ui";
import { useState } from "react";

const ProfileWatchlist = () => {
    const [page, setPage] = useState(1)
    const { data: watchlist, isPlaceholderData } = useWatchlistMovies(page)

    return (
        <>
            <ListsList movies={watchlist} />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                movies={watchlist}
            />
        </>
    );
};

export default ProfileWatchlist;