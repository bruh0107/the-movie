import type { Season } from "@/entities/tv";
import type { FC } from "react";
import { getStorageUrl } from "@/shared/utils";
import { AppIcon } from "@/shared/ui";
import { formatDate } from "@/shared/lib";

interface Props {
    seasons: Season[]
}

const TVSeasons: FC<Props> = ({seasons}) => {
    return (
        <div className="main-container flex flex-col gap-10">
            {
                seasons.map((season) => (
                    <div className="bg-[#e1e6f0] p-4 flex items-center gap-5">
                        <div className="flex flex-col items-center">
                            <img
                                src={season.poster_path ? getStorageUrl(season.poster_path) : '/no-poster.png'}
                                className="max-w-30"
                                alt=""
                            />
                            <div className="flex">
                                <p className="text-xl">{season.vote_average}</p>
                                <AppIcon name="star" className="w-7 text-[#ffb700]" />
                            </div>
                        </div>
                        <div>
                            <h2>{season.name}</h2>
                            <p>Выход в эфир: { formatDate(season.air_date) }</p>
                            <p>Количество эпизодов: {season.episode_count}</p>
                            <p>Описание сезона: {season.overview}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TVSeasons