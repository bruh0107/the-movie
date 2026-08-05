import type { FC } from "react";
import { type TVShowDetail, useTVAccountStates } from "@/entities/tv";
import { type DetailMovie, useAddToFavorite, useAddToWatchlist, useMovieAccountStates } from "@/entities/movie";
import { ContentDetailButtons, ContentInfo, ContentPoster } from "@/shared/ui";
import { contentDateRelease, contentOriginalTitle, contentTitle } from "@/shared/lib";
import { useParams } from "react-router-dom";
import { useIsAuth } from "@/entities/account";

interface Props {
    content: TVShowDetail | DetailMovie
    isTV: boolean
}

const DetailedContent: FC<Props> = ({ content, isTV }) => {
    const { id } = useParams<{ id: string }>()
    const contentId = id ? Number(id) : 0
    const isAuth = useIsAuth()

    const { data: movieStates } = useMovieAccountStates(isTV ? 0 : contentId)
    const { data: tvStates} = useTVAccountStates(isTV ? contentId : 0)

    const accountStates = isTV ? tvStates : movieStates

    const isFavorite = accountStates?.favorite ?? false;
    const isWatchlist = accountStates?.watchlist ?? false;

    const { mutate: toggleFavorite, isPending: isPendingFavorite } = useAddToFavorite(contentId)
    const { mutate: toggleWatchlist, isPending: isPendingWatchlist } = useAddToWatchlist(contentId)

    const handleToggleFavorite = () => {
        if (!contentId) return;
        toggleFavorite({
            media_type: isTV ? 'tv' : 'movie',
            media_id: contentId,
            favorite: !isFavorite,
        });
    };

    const handleToggleWatchlist = () => {
        if (!contentId) return;
        toggleWatchlist({
            media_type: isTV ? 'tv' : 'movie',
            media_id: contentId,
            watchlist: !isWatchlist,
        });
    };

    return (
        isAuth && (
            <section className="py-10">
                <div className="main-container">
                    <div className="flex gap-10">
                        <ContentPoster content={content} isTV={false} />
                        <div className="flex flex-col gap-10">
                            <article className="flex flex-col gap-4 text-xl">
                                <h2 className="text-4xl font-bold font-second">
                                    { contentTitle(content) } ({contentDateRelease(content)})
                                </h2>
                                <p>{contentOriginalTitle(content)} {content?.adult && '18+'}</p>
                                <p className="max-w-200">{content?.overview}</p>
                            </article>

                            <ContentDetailButtons
                                isFavorite={isFavorite}
                                isWatchlist={isWatchlist}
                                onToggleFavorite={handleToggleFavorite}
                                onToggleWatchlist={handleToggleWatchlist}
                                pendingFavorite={isPendingFavorite}
                                pendingWatchlist={isPendingWatchlist}
                            />

                            <ContentInfo content={content} isTV={isTV} />
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}

export default DetailedContent