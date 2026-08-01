import { type Movie, MovieItem } from "@/entities/movie";
import type { FC } from "react";

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
                    <MovieItem
                        key={movie.id}
                        movie={movie}
                    />
                ))
            }
        </div>
    );
};

export default ListsList;