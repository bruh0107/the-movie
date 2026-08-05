import { useParams } from "react-router-dom"
import {
    useMovie,
} from "@/entities/movie"
import { DetailedContent } from "@/shared/ui";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>()
    const movieId = id ? Number(id) : 0

    const { data: movie, isLoading } = useMovie(movieId)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!movie) {
        return <div className="py-10 text-center">Фильм не найден</div>;
    }

    return (
        <DetailedContent content={movie} isTV={false} />
    );
};

export default MovieDetail;