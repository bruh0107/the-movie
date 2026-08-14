import { DetailedContent } from "@/shared/ui";
import { useDetailTV, useSimilarTV, useTVCredits } from "@/entities/tv";
import { useParams } from "react-router-dom";
import { TVSeasons } from "@/widgets/tv";

const TVDetail = () => {
    const { id } = useParams<{ id: string }>()
    const seriesId = id ? Number(id) : 0
    const { data: tv, isLoading } = useDetailTV(seriesId)
    const { data: similarTV } = useSimilarTV(seriesId)
    const { data: tvCredits } = useTVCredits(seriesId)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!tv) {
        return <div className="py-10 text-center">Фильм не найден</div>;
    }

    return (
        <div>
            <DetailedContent
                content={tv}
                similar={similarTV}
                isTV={true}
                path="tv"
                credits={tvCredits}
            />
            <TVSeasons
                seasons={tv.seasons}
            />
        </div>
    )
}

export default TVDetail