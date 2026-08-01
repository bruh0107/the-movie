import { AppButton, AppSlider } from "@/shared/ui";
import { getStorageUrl } from "@/shared/utils";
import { type Movie } from "@/entities/movie";
import { type FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    movies: Movie[] | undefined
    title: string
    description: string
    isRight: boolean
}

const MovieCarousel: FC<Props> = (props) => {
    const {
        movies,
        title,
        description,
        isRight
    } = props

    const [hoveredMovieId, setHoveredMovieId] = useState(0)

    return (
        <div className="w-full mx-auto mt-[120px]">
            <div className={`main-container pb-[60px] flex flex-col gap-5 ${isRight ? 'items-end' : 'items-start'}`}>
                <h1 className="text-5xl font-second p-2.5 bg-second w-fit">{ title }</h1>
                <p className="text-3xl">
                    { description }
                </p>
            </div>
            <AppSlider>
                {movies?.map((movie) => (
                    <div
                        key={movie.id}
                        className="group relative w-100 h-130 shrink-0 overflow-hidden"
                        onMouseEnter={() => setHoveredMovieId(movie.id)}
                        onMouseLeave={() => setHoveredMovieId(0)}
                    >
                        <img
                            src={getStorageUrl(movie.poster_path)}
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

                            <Link to={`movie/${movie.id}`}>
                                <AppButton className="text-xl w-full font-second font-bold bg-basic">
                                    Подробнее
                                </AppButton>
                            </Link>
                        </div>
                    </div>
                ))}
            </AppSlider>
        </div>
    );
};

export default MovieCarousel;