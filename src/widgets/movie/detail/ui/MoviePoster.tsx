import { getStorageUrl } from "@/shared/utils";
import { AppIcon } from "@/shared/ui";
import type { FC } from "react";
import type { DetailMovie } from "@/entities/movie";
import { MovieTrailer } from "@/widgets/movie";
import { useParams } from "react-router-dom";

interface Props {
    movie: DetailMovie | undefined
}

const MoviePoster: FC<Props> = ({ movie }) => {
    const { id } = useParams<{ id: string }>()
    const movieId = id ? Number(id) : 0

    return (
        <div className="w-1/4 flex flex-col gap-2">
            <img
                className="w-full rounded-2xl"
                src={movie?.poster_path ? getStorageUrl(movie?.poster_path) : '/no-poster.png'}
                alt=""
            />
            <div className="border border-accent rounded-xl flex justify-between items-center p-3">
                <div className="flex gap-1 items-center">
                    <AppIcon name="star" className="w-7 text-[#ffb700]" />
                    <p className="font-bold">{ movie?.vote_average }</p>
                </div>
                <p>{ movie?.vote_count } голосов</p>
            </div>
            <MovieTrailer movie_id={movieId} />
        </div>
    );
};

export default MoviePoster;