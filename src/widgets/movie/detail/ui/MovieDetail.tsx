import { useParams } from "react-router-dom"
import {
    useMovie, useMovieCredits, useSimilarMovies,
} from "@/entities/movie"
import { DetailedContent } from "@/shared/ui";
import { useTitle } from "@/shared/lib";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>()
    const movieId = id ? Number(id) : 0

    const { data: movie, isLoading } = useMovie(movieId)
    const { data: similarMovie } = useSimilarMovies(movieId)
    const { data: movieCredits } = useMovieCredits(movieId)

    useTitle(movie ? `${movie.title} (${movie.release_date?.slice(0, 4)})` : "Загрузка фильма...")

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!movie) {
        return <div className="py-10 text-center">Фильм не найден</div>;
    }

    return (
        <DetailedContent
            content={movie}
            isTV={false}
            similar={similarMovie}
            path="movie"
            credits={movieCredits}
        />
    );
};

export default MovieDetail;