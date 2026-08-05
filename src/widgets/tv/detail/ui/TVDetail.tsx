import { DetailedContent } from "@/shared/ui";
import { useDetailTV } from "@/entities/tv";
import { useParams } from "react-router-dom";

const TVDetail = () => {
    const { id } = useParams<{ id: string }>()
    const seriesId = id ? Number(id) : 0
    const { data: tv, isLoading } = useDetailTV(seriesId)

    if (isLoading) {
        return <div className="loader" />;
    }

    if (!tv) {
        return <div className="py-10 text-center">Фильм не найден</div>;
    }

    return (
        <DetailedContent
            content={tv}
            isTV={true}
        />
    )
}

export default TVDetail