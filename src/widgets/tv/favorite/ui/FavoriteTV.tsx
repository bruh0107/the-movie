import { useState } from "react"
import { useFavoriteTV } from "@/entities/tv"
import { ListsPagination } from "@/shared/ui"
import { ListsList } from "@/shared/ui"

const FavoriteTV = () => {
    const [page, setPage] = useState(1)
    const { data: favoriteTV, isPlaceholderData, isLoading } = useFavoriteTV(page)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!favoriteTV) {
        return <div className="py-10 text-center">Сериал не найден не найден</div>;
    }

    return (
        <>
            <ListsList contents={favoriteTV} path="tv" />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={favoriteTV}
            />
        </>
    )
}

export default FavoriteTV