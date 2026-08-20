import type { Movie } from "@/entities/movie";
import type { TVShow } from "@/entities/tv";
import type { FC } from "react";
import { getStorageUrl } from "@/shared/utils";
import { Link } from "react-router-dom";
import { AppButton } from "@/shared/ui";
import { contentDateRelease, contentTitle } from "@/shared/lib";

interface Props {
    content: Movie | TVShow
    path: string | undefined
}

const ContentItem: FC<Props> = ({ content, path }) => {
    const cleanPath = path?.startsWith('/') ? path : `/${path}`
    const targetUrl = `${cleanPath}/${content.id}`

    return (
        <div className="group/item relative w-100 h-130 shrink-0 overflow-hidden">
            <img
                src={content.poster_path ? getStorageUrl(content.poster_path) : '/no-poster.png'}
                className="size-full object-cover transition-all duration-300 rounded-2xl group-hover/item:brightness-20"
                alt={`item ${content.id}`}
            />

            <div className="absolute inset-0 flex justify-between flex-col opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-white p-4">
                <h1 className="text-xl font-second font-bold text-center px-4 drop-shadow-lg">
                    {contentTitle(content)} ({contentDateRelease(content)})
                </h1>

                <p className="text-xl line-clamp-8">
                    {content.overview ? content.overview : 'Описания нет'}
                </p>

                <Link to={targetUrl} target="_blank" rel="noreferrer noopener">
                    <AppButton className="text-xl w-full font-second font-bold bg-basic">
                        Подробнее
                    </AppButton>
                </Link>
            </div>
        </div>
    );
};

export default ContentItem