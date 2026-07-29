import { MovieCarousel } from "@/features/movie";
import { useTrendingMovies } from "@/entities/movie";

const TrendMovies = () => {
    const { data: trendMovies } = useTrendingMovies('week')

    return (
        <MovieCarousel
            movies={trendMovies}
            title="В тренде"
            description="Смотрите, то что сейчас популярно. Студии продолжают эксплуатировать вселенные-гиганты вроде «Дюны», «Аватара» и супергеройских франшиз!"
            isRight={false}
        />
    );
};

export default TrendMovies;