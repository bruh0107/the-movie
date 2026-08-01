import { useParams } from "react-router-dom";
import { useAddToFavorite, useFavoriteMovies, useMovie } from "@/entities/movie";
import { AppButton, AppIcon } from "@/shared/ui";
import { useIsAuth } from "@/entities/account";
import { MovieInfo, MoviePoster } from "@/widgets/movie";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = id ? Number(id) : 0;

    const { data: movie } = useMovie(movieId);

    const { mutate: toggleFavorite, isPending } = useAddToFavorite();

    const { data: favoriteMovies } = useFavoriteMovies();
    const isAuth = useIsAuth();

    const isFavorite = favoriteMovies?.some((fav) => fav.id === movieId) ?? false;

    const handleFavoriteClick = () => {
        if (!movieId) return;

        toggleFavorite({
            media_type: 'movie',
            media_id: movieId,
            favorite: !isFavorite,
        });
    };

    return (
        <section className="py-10">
            <div className="main-container">
                <div className="flex gap-10">
                    <MoviePoster movie={movie} />
                    <div className="flex flex-col gap-10">
                        <article className="flex flex-col gap-4 text-xl">
                            <h2 className="text-4xl font-bold font-second">
                                {movie?.title} ({movie?.release_date?.slice(0, 4)})
                            </h2>
                            <p>{movie?.original_title} {movie?.adult && '18+'}</p>
                            <p className="max-w-[800px]">{movie?.overview}</p>
                        </article>

                        {isAuth && (
                            <article className="flex gap-3 text-xl">
                                <AppButton className="flex items-center gap-2">
                                    <AppIcon name="watchlist-eye" className="w-8" />
                                    Буду смотреть
                                </AppButton>

                                <AppButton
                                    onClick={handleFavoriteClick}
                                    disabled={isPending}
                                    className='flex items-center gap-2 transition-colors'
                                >
                                    <AppIcon name="heart" className={`w-8 ${isFavorite ? 'text-[#f26363]' : ''}`} />
                                    {isFavorite ? 'Убрать из избранного' : 'В избранное'}
                                </AppButton>
                            </article>
                        )}

                        <MovieInfo movie={movie} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;