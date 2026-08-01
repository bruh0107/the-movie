import type { Movie } from "@/entities/movie";
import type { FC } from "react";

interface Props {
    movie: Movie
}

const ListsItem: FC<Props> = (props) => {
    const {
        movie
    } = props

    return (
        <div>
            <h1>{ movie.title }</h1>
        </div>
    );
};

export default ListsItem;