import type { FC } from "react";
import type { Episode } from "@/entities/tv";
import { getStorageUrl } from "@/shared/utils";
import { formatDate } from "@/shared/lib";

interface Props {
    episodes: Episode[];
}

const TVEpisodes: FC<Props> = ({ episodes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {episodes.map((episode) => (
                <article
                    key={episode.id}
                    className="flex gap-4 p-3 bg-white/70 rounded-xl shadow-sm hover:bg-white transition-colors"
                >
                    <img
                        src={episode.still_path ? getStorageUrl(episode.still_path) : "/no-poster.png"}
                        alt={episode.name}
                        className="w-36 h-24 object-cover rounded-lg shrink-0 bg-gray-200"
                    />

                    <div className="flex flex-col justify-between overflow-hidden">
                        <div>
                            <h4 className="font-semibold text-lg truncate">
                                {episode.episode_number}. {episode.name}
                            </h4>
                            <p className="text-xs text-gray-500">{formatDate(episode.air_date)}</p>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                {episode.overview || "Нет описания для этого эпизода"}
                            </p>
                        </div>

                        {episode.runtime ? (
                            <span className="text-xs text-gray-400 font-medium">
                                {episode.runtime} мин.
                            </span>
                        ) : null}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default TVEpisodes;