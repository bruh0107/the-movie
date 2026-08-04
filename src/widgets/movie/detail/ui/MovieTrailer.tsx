import { useMovieVideos } from "@/entities/movie";
import type { FC } from "react";

interface Props {
    movie_id: number
}

const MovieTrailer: FC <Props> = ({ movie_id }) => {
    const { data: videos } = useMovieVideos(movie_id)

    const trailer = videos?.find((video) =>
        video.site === 'Youtube' && video.type === 'Trailer'
    ) || videos?.find(video => video.site === 'YouTube')

    return (
        trailer && <div className="w-full aspect-video">
            <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${trailer?.key}`}
                title={trailer?.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

export default MovieTrailer