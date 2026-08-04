import { useDiscoverTV } from "@/entities/tv";
import { ContentItem } from "@/shared/ui";

const TVCatalog = () => {
    const { data: tvShows } = useDiscoverTV()

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                tvShows?.map(show => (
                    <ContentItem
                        key={show.id}
                        content={show}
                        path="tv"
                    />
                ))
            }
        </div>
    )
}

export default TVCatalog;