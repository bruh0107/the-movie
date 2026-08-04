import { getStorageUrl } from "@/shared/utils";
import { AppIcon } from "@/shared/ui";
import type { TVShowDetail } from "@/entities/tv";
import type { DetailMovie } from "@/entities/movie";
import type { FC } from "react";

interface Props {
    content: TVShowDetail | DetailMovie
}

const ContentPoster: FC<Props> = ({ content }) => {
    return (
        <div className="w-1/4 flex flex-col gap-2">
            <img
                className="w-full rounded-2xl"
                src={content?.poster_path ? getStorageUrl(content?.poster_path) : '/no-poster.png'}
                alt=""
            />
            <div className="border border-accent rounded-xl flex justify-between items-center p-3">
                <div className="flex gap-1 items-center">
                    <AppIcon name="star" className="w-7 text-[#ffb700]" />
                    <p className="font-bold">{ content?.vote_average }</p>
                </div>
                <p>{ content?.vote_count } голосов</p>
            </div>
            {/*<MovieTrailer movie_id={movieId} />*/}
        </div>
    )
}

export default ContentPoster