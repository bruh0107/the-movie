import type { Movie } from "@/entities/movie";
import type { TVShow } from "@/entities/tv";
import type { TopRatedType } from "@/features/top-rated/ui/TopRatedTabs.tsx";
import type { FC } from "react";
import { ContentItem } from "@/shared/ui";

interface Props {
    items: (Movie | TVShow)[] | undefined
    type: TopRatedType
    page: number
    isLoading: boolean
}

const TopRatedList: FC<Props> = ({ items, type, isLoading }) => {
    if (isLoading) {
        return <div className="loader mx-auto my-12" />;
    }

    if (!items || items.length === 0) {
        return <div className="py-12 text-center text-gray-500">Список пуст</div>;
    }

    return (
        <div className="grid grid-cols-4 gap-6">
            {items.map((item) => {
                return (
                    <div key={item.id} className="relative group">
                        <ContentItem
                            content={item}
                            path={type}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TopRatedList