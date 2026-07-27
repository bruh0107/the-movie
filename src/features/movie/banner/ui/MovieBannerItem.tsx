import type { Movie } from "@/entities/movie";
import type { FC } from "react";
import { getStorageUrl } from "@/shared/utils";

interface Props {
    movie: Movie
    className?: string
}

const MovieBannerItem: FC<Props> = ({ movie, className = "" }) => {
    return (
        <div
            className={`w-87.5 h-100 absolute shadow-[5px_-5px_20px_5px_rgba(0,0,0,0.1)] rounded-2xl
             transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer ${className}`}
        >
            <img className="rounded-2xl" src={getStorageUrl(movie.poster_path)} alt={`${movie.title} poster`}/>
        </div>
    );
};

export default MovieBannerItem;