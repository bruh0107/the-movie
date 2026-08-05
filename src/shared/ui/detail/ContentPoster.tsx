import type { DetailMovie } from "@/entities/movie";
import type { TVShowDetail } from "@/entities/tv";
import { getStorageUrl } from "@/shared/utils";
import { AppIcon } from "@/shared/ui";
import type { FC } from "react";
import { MovieTrailer } from "@/widgets/movie";

interface Props {
    content: TVShowDetail | DetailMovie
    isTV: boolean
}

const ContentPoster: FC<Props> = ({ content, isTV }) => {
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
            {!isTV && content?.id && (
                <MovieTrailer movie_id={content.id} />
            )}
        </div>
    )
}

export default ContentPoster