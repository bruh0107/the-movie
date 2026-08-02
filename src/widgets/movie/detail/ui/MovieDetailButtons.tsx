import { AppButton, AppIcon } from "@/shared/ui";
import {
    useAddToFavorite,
    useAddToWatchlist,
    useMovieAccountStates,
} from "@/entities/movie";
import { useParams } from "react-router-dom";
import { useIsAuth } from "@/entities/account";

const MovieDetailButtons = () => {
    const { id } = useParams<{ id: string }>()
    const movieId = id ? Number(id) : 0

    const { data: accountStates } = useMovieAccountStates(movieId);

    const { mutate: toggleFavorite, isPending: pendingFavorite } = useAddToFavorite(movieId)
    const { mutate: toggleWatchlist, isPending: pendingWatchlist } = useAddToWatchlist(movieId)

    const isAuth = useIsAuth()

    const isFavorite = accountStates?.favorite ?? false;
    const isWatchlist = accountStates?.watchlist ?? false;

    const handleFavoriteClick = () => {
        if (!movieId) return;

        toggleFavorite({
            media_type: 'movie',
            media_id: movieId,
            favorite: !isFavorite,
        });
    };

    const handleWatchlistClick = () => {
        if (!movieId) return;

        toggleWatchlist({
            media_type: 'movie',
            media_id: movieId,
            watchlist: !isWatchlist,
        });
    };

    return (
        isAuth && (
            <article className="flex gap-3 text-xl">
                <AppButton
                    onClick={handleWatchlistClick}
                    disabled={pendingWatchlist}
                    className="flex items-center gap-2"
                >
                    <AppIcon
                        name={isWatchlist ? 'check' : 'watchlist-eye'}
                        className={`w-8 ${isWatchlist ? 'text-[#54a15e]' : ''}`}
                    />
                    {isWatchlist ? 'В очереди на просмотр' : 'Буду смотреть'}
                </AppButton>

                <AppButton
                    onClick={handleFavoriteClick}
                    disabled={pendingFavorite}
                    className='flex items-center gap-2 transition-colors'
                >
                    <AppIcon name="heart" className={`w-8 ${isFavorite ? 'text-[#f26363]' : ''}`} />
                    {isFavorite ? 'Убрать из избранного' : 'В избранное'}
                </AppButton>
            </article>
        )
    )
}

export default MovieDetailButtons;