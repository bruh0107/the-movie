import { type FC, useState } from "react";
import { type Episode, type Season, useSeasonDetail } from "@/entities/tv";
import { getStorageUrl } from "@/shared/utils";
import { AppButton, AppIcon } from "@/shared/ui";
import { formatDate } from "@/shared/lib";
import { TVEpisodes } from "@/widgets/tv";

interface Props {
    seriesId: number;
    season: Season;
}

const SeasonItem: FC<Props> = ({ seriesId, season }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { data: episodes = [], isLoading } = useSeasonDetail(
        seriesId,
        season.season_number,
        isOpen
    );

    return (
        <div className="bg- p-6 rounded-2xl flex flex-col gap-5">
            <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-2 shrink-0">
                    <img
                        src={season.poster_path ? getStorageUrl(season.poster_path) : "/no-poster.png"}
                        className="w-32 rounded-xl object-cover"
                        alt={season.name}
                    />

                    {season.vote_average > 0 && (
                        <div className="flex items-center gap-1">
                            <span className="text-xl font-bold">{season.vote_average.toFixed(1)}</span>
                            <AppIcon name="star" className="w-5 text-[#ffb700]" />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2 flex-grow">
                    <h2 className="text-2xl font-bold font-second">{season.name}</h2>
                    <p className="text-gray-700">Выход в эфир: {formatDate(season.air_date)}</p>
                    <p className="text-gray-700">Количество эпизодов: {season.episode_count}</p>
                    {season.overview && (
                        <p className="text-gray-600 mt-1">{season.overview}</p>
                    )}

                    <div className="mt-4">
                        <AppButton onClick={() => setIsOpen((prev) => !prev)}>
                            {isOpen ? "Скрыть сезон" : "Раскрыть сезон"}
                        </AppButton>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="mt-4 border-t border-gray-300 pt-4">
                    {isLoading ? (
                        <div className="loader mx-auto my-4" />
                    ) : episodes.length > 0 ? (
                        <TVEpisodes episodes={episodes as Episode[]} />
                    ) : (
                        <p className="text-center text-gray-500 py-4">Список эпизодов пуст или отсутствует</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default SeasonItem