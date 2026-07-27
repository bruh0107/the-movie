import { useTrendingMovies } from "@/entities/movie/queries/movie.queries.ts";
import { MovieBannerItem } from "@/features/movie";

const MovieBannerList = () => {
    const { data: trendMovies } = useTrendingMovies("day")

    const sliceTrendMovies = trendMovies?.slice(0, 3)

    const CARD_POSITION = [
        "z-2 top-17.5 right-50",
        "z-3 -top-12.5 -right-2.5",
        "z-1 -top-40 -right-52.5"
    ]

    return (
        <div className="relative min-h-75">
            {
                sliceTrendMovies?.map((movie, index) => (
                    <MovieBannerItem
                        key={movie.id}
                        movie={movie}
                        className={CARD_POSITION[index]}
                    />
                ))
            }
        </div>
    );
};

export default MovieBannerList;