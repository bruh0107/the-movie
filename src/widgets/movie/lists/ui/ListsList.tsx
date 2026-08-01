import { ListsItem } from "@/widgets/movie";
import type { Movie } from "@/entities/movie";
import type { FC } from "react";

interface Props {
    movies: Movie[] | undefined
}

const ListsList: FC<Props> = (props) => {
    const {
        movies
    } = props

    return (
        <div>
            {
                movies?.map((movie) => (
                    <ListsItem
                        key={movie.id}
                        movie={movie}
                    />
                ))
            }
        </div>
    );
};

export default ListsList;