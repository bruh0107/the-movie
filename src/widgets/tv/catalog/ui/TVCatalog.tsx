import { TVItem, useDiscoverTV } from "@/entities/tv";

const TVCatalog = () => {
    const { data: tvShows } = useDiscoverTV()

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                tvShows?.map(show => (
                    <TVItem
                        key={show.id}
                        tv={show}
                    />
                ))
            }
        </div>
    )
}

export default TVCatalog;