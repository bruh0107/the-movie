import type { DetailMovie } from "@/entities/movie";
import type { TVShowDetail } from "@/entities/tv";
import type { FC } from "react";
import { contentDateRelease, formatBudget, formatRuntime } from "@/shared/lib";

interface Props {
    content: DetailMovie | TVShowDetail;
    isTV: boolean;
}

const ContentInfo: FC<Props> = ({ content, isTV }) => {
    const airDate = () => {
        const first_air_date = "first_air_date" in content ? content.first_air_date : '';
        const last_air_date = "last_air_date" in content ? content.last_air_date : '';

        if (!first_air_date) return '-';
        const start = first_air_date.slice(0, 4);
        const end = last_air_date ? last_air_date.slice(0, 4) : 'наст. время';

        return `С ${start} по ${end}`;
    };

    const renderNetworks = () => {
        if (("networks" in content && content.networks) && content.networks.length > 0) {
            return content.networks.map((network) => network.name).join(', ');
        }
        return '-';
    };

    return (
        <article className="flex flex-col gap-8">
            <p className="text-4xl font-bold">{isTV ? 'О сериале' : 'О фильме'}</p>
            <div className="flex gap-5">
                <div className="text-xl flex flex-col gap-3 font-medium text-gray-400">
                    <p>{isTV ? 'Даты выхода' : 'Год производства'}</p>
                    <p>Жанр</p>
                    <p>Слоган</p>
                    {isTV ? <p>Статус производства</p> : <p>Бюджет</p>}
                    {isTV ? <p>Тип сериала</p> : <p>Сборы</p>}
                    {isTV ? <p>Издатель</p> : <p>Время</p>}
                    <p>Страна</p>
                </div>

                <div className="text-xl flex flex-col gap-3">
                    <p>{isTV ? airDate() : contentDateRelease(content)}</p>

                    <p>
                        {content?.genres && content.genres.length > 0
                            ? content.genres.map((genre) => genre.name).join(', ')
                            : '-'
                        }
                    </p>

                    <p>{content?.tagline ? content.tagline : '-'}</p>

                    <p>{isTV ? ("status" in content ? content.status : '-') : `$${formatBudget(content)}`}</p>

                    <p>{isTV ? ("type" in content ? content.type : '-') : `$${formatBudget(content)}`}</p>

                    <p>{isTV ? renderNetworks() : formatRuntime(content)}</p>

                    <p>
                        {content?.production_countries && content.production_countries.length > 0
                            ? content.production_countries.map((country) => country.name).join(', ')
                            : '-'
                        }
                    </p>
                </div>
            </div>
        </article>
    );
};

export default ContentInfo;