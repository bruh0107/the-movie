import { MovieCarousel } from "@/features/movie";
import { useNowPlayingMovies } from "@/entities/movie";

const NowPlayingMovies = () => {
    const { data: nowPlayingMovies } = useNowPlayingMovies()

    return (
        <MovieCarousel
            movies={nowPlayingMovies}
            title="Сейчас в кино!"
            description="Не пропустите то, что сейчас идет в кино. Сходите обязательно!"
            isRight={true}
        />
    )
}

export default NowPlayingMovies