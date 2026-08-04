import { type Movie } from "@/entities/movie";
import type { FC } from "react";
import { ContentItem } from "@/shared/ui";

interface Props {
    movies: Movie[] | undefined
}

const ListsList: FC<Props> = (props) => {
    const {
        movies
    } = props

    return (
        <div className="grid grid-cols-4 gap-10">
            {
                movies?.map((movie) => (
                    <ContentItem
                        key={movie.id}
                        content={movie}
                        path='movie'
                    />
                ))
            }
        </div>
    );
};

export default ListsList;