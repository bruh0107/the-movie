import type { TVShow } from "@/entities/tv";
import type { Movie } from "@/entities/movie";
import type { FC } from "react";
import { getStorageUrl } from "@/shared/utils";
import { Link } from "react-router-dom";

interface Props {
    contents: TVShow[] | Movie[] | undefined
    isTV: boolean
    path: string
}

const ContentSimilar: FC<Props> = ({ contents, isTV, path }) => {
    return (
        <section className="flex flex-col gap-1">
            <h2 className="text-2xl">Похожие</h2>
            <article className="flex flex-col gap-2 max-h-[800px] max-w-[500px] overflow-y-auto">
                {
                    contents?.map((content) => (
                        <Link to={`/${path}/${content.id}`}>
                            <div className="flex gap-2 bg-[#e1e6f0] p-3 rounded-xl">
                                <img
                                    className="w-40"
                                    src={content?.poster_path ? getStorageUrl(content?.poster_path) : '/no-poster.png'}
                                    alt=""/>
                                <p className="text-2xl">{ isTV
                                    ? ("name" in content ? content.name : '')
                                    : ("title" in content ? content.title : '')}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </article>
        </section>
    )
}

export default ContentSimilar