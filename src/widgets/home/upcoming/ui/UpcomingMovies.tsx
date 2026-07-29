import { MovieCarousel } from "@/features/movie";
import { useUpcomingMovies } from "@/entities/movie";

const UpcomingMovies = () => {
    const { data: upcomingMovies } = useUpcomingMovies()

    return (
        <MovieCarousel
            movies={upcomingMovies}
            title="Предстоящее"
            description="Готовьте попкорн и свободный вечер!"
            isRight={false}
        />
    );
};

export default UpcomingMovies;