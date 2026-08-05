import { type Movie } from "@/entities/movie";
import type { FC } from "react";
import { ContentItem } from "@/shared/ui";
import type { TVShow } from "@/entities/tv";

interface Props {
    contents: Movie[] | TVShow[]
    path: string
}

const ListsList: FC<Props> = ({ contents, path }) => {
    return (
        <div className="grid grid-cols-4 gap-10">
            {
                contents?.map((content) => (
                    <ContentItem
                        key={content.id}
                        content={content}
                        path={path}
                    />
                ))
            }
        </div>
    );
};

export default ListsList;