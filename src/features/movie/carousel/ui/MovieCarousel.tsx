import { AppSlider, ContentItem } from "@/shared/ui";
import { type Movie } from "@/entities/movie";
import { type FC } from "react";

interface Props {
    movies: Movie[] | undefined
    title: string
    description: string
    isRight: boolean
}

const MovieCarousel: FC<Props> = (props) => {
    const {
        movies,
        title,
        description,
        isRight
    } = props

    return (
        <div className="w-full mx-auto mt-30">
            <div className={`main-container pb-15 flex flex-col gap-5 ${isRight ? 'items-end' : 'items-start'}`}>
                <h1 className="text-5xl font-second p-2.5 bg-second w-fit">{ title }</h1>
                <p className="text-3xl">
                    { description }
                </p>
            </div>
            <AppSlider>
                {movies?.map((movie) => (
                    <ContentItem
                        key={movie.id}
                        content={movie}
                        path='movie'
                    />
                ))}
            </AppSlider>
        </div>
    );
};

export default MovieCarousel;