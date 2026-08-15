import type { Season } from "@/entities/tv";
import type { FC } from "react";
import { SeasonItem } from "@/widgets/tv";

interface Props {
    seriesId: number
    seasons: Season[]
}

const TVSeasons: FC<Props> = ({ seriesId, seasons }) => {
    if (!seasons || seasons.length === 0) return null;

    return (
        <section className="main-container py-10 flex flex-col gap-6">
            <h2 className="text-3xl font-bold font-second">Сезоны</h2>
            <div className="flex flex-col gap-6">
                {seasons.map((season) => (
                    <SeasonItem
                        key={season.id}
                        seriesId={seriesId}
                        season={season}
                    />
                ))}
            </div>
        </section>
    );
};

export default TVSeasons;