import { getStorageUrl } from "@/shared/utils"
import { Link } from "react-router-dom"
import { AppButton } from "@/shared/ui"
import type { Movie } from "@/entities/movie"
import { type FC, useState } from "react"

interface Props {
    movie: Movie
}

const MovieItem: FC<Props> = (props) => {
    const {
        movie
    } = props

    const [hoveredMovieId, setHoveredMovieId] = useState(0)

    return (
        <div
            key={movie.id}
            className="group relative w-100 h-130 shrink-0 overflow-hidden"
            onMouseEnter={() => setHoveredMovieId(movie.id)}
            onMouseLeave={() => setHoveredMovieId(0)}
        >
            <img
                src={movie.poster_path ? getStorageUrl(movie.poster_path) : '/no-poster.png'}
                className={`size-full object-cover transition-all duration-300 rounded-2xl
                                ${hoveredMovieId === movie.id ? 'brightness-20' : ''}`}
                alt={`slider ${movie.id}`}
            />

            <div className={`absolute inset-0 flex justify-between flex-col opacity-0 
                            transition-opacity duration-300 text-white p-4
                            ${hoveredMovieId === movie.id ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-xl font-second font-bold text-center px-4 drop-shadow-lg">
                    { movie.title } ({movie.release_date.slice(0, 4)})
                </h1>
                <p className='text-xl line-clamp-8'>
                    {movie.overview ? movie.overview : 'Описания у фильма нет. Посмотрите и узнайте о чем он!'}
                </p>

                <Link to={`/movie/${movie.id}`}>
                    <AppButton className="text-xl w-full font-second font-bold bg-basic">
                        Подробнее
                    </AppButton>
                </Link>
            </div>
        </div>
    );
};

export default MovieItem;