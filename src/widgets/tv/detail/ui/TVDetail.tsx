import { DetailedContent } from "@/shared/ui";
import {
    useDetailTV,
    useSimilarTV,
    useTVCredits
} from "@/entities/tv";
import { useParams } from "react-router-dom";
import { TVSeasons } from "@/widgets/tv";
import { useTitle } from "@/shared/lib";

const TVDetail = () => {
    const { id } = useParams<{ id: string }>();
    const seriesId = id ? Number(id) : 0;

    const { data: tv, isLoading } = useDetailTV(seriesId);
    const { data: similarTV } = useSimilarTV(seriesId);
    const { data: tvCredits } = useTVCredits(seriesId);

    useTitle(tv ? `${tv.name} (${tv.first_air_date?.slice(0, 4)})` : "Загрузка сериала...");

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!tv) {
        return (
            <div className="py-10 text-center">
                Сериал не найден
            </div>
        );
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
                seriesId={seriesId}
                seasons={tv.seasons}
            />
        </div>
    );
};

export default TVDetail;