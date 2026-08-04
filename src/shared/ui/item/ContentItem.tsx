import type { Movie } from "@/entities/movie";
import type { TVShow } from "@/entities/tv";
import { type FC, useState } from "react";
import { getStorageUrl } from "@/shared/utils";
import { Link } from "react-router-dom";
import { AppButton } from "@/shared/ui";
import { contentDateRelease, contentTitle } from "@/shared/lib";

interface Props {
    content: Movie | TVShow
    path: string
}

const ContentItem: FC<Props> = ({content, path}) => {
    const [hoveredContentId, setHoveredContentId] = useState(0)

    return (
        <div
            key={content.id}
            className="group relative w-100 h-130 shrink-0 overflow-hidden"
            onMouseEnter={() => setHoveredContentId(content.id)}
            onMouseLeave={() => setHoveredContentId(0)}
        >
            <img
                src={content.poster_path ? getStorageUrl(content.poster_path) : '/no-poster.png'}
                className={`size-full object-cover transition-all duration-300 rounded-2xl 
                    ${hoveredContentId === content.id ? 'brightness-20' : ''}`}
                alt={`item ${content.id}`}
            />

            <div className={`absolute inset-0 flex justify-between flex-col opacity-0 
                    transition-opacity duration-300 text-white p-4
                    ${hoveredContentId === content.id ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-xl font-second font-bold text-center px-4 drop-shadow-lg">
                    { contentTitle(content) } ({ contentDateRelease(content) })
                </h1>
                <p className='text-xl line-clamp-8'>
                    { content.overview ? content.overview : 'Описания нет' }
                </p>

                <Link to={`/${path}/${content.id}`}>
                    <AppButton className="text-xl w-full font-second font-bold bg-basic">
                        Подробнее
                    </AppButton>
                </Link>
            </div>
        </div>
    )
}

export default ContentItem