import { useParams } from "react-router-dom"
import {
    useMovie,
} from "@/entities/movie"
import { MovieDetailButtons, MovieInfo, MoviePoster } from "@/widgets/movie"

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>()
    const movieId = id ? Number(id) : 0

    const { data: movie } = useMovie(movieId)

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

                        <MovieDetailButtons />

                        <MovieInfo movie={movie} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;