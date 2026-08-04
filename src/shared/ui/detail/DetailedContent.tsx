import type { FC } from "react";
import type { TVShowDetail } from "@/entities/tv";
import type { DetailMovie } from "@/entities/movie";
import { ContentPoster } from "@/shared/ui";
import { contentDateRelease, contentOriginalTitle, contentTitle } from "@/shared/lib";

interface Props {
    content: TVShowDetail | DetailMovie
}

const DetailedContent: FC<Props> = ({ content }) => {

    return (
        <section className="py-10">
            <div className="main-container">
                <div className="flex gap-10">
                    <ContentPoster content={content} />
                    <div className="flex flex-col gap-10">
                        <article className="flex flex-col gap-4 text-xl">
                            <h2 className="text-4xl font-bold font-second">
                                { contentTitle(content) } ({contentDateRelease(content)})
                            </h2>
                            <p>{contentOriginalTitle(content)} {content?.adult && '18+'}</p>
                            <p className="max-w-200">{content?.overview}</p>
                        </article>

                        {/*<MovieDetailButtons />*/}

                        {/*<MovieInfo movie={movie} />*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailedContent