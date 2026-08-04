import { getStorageUrl } from "@/shared/utils";
import { Link } from "react-router-dom";
import { AppButton } from "@/shared/ui";
import type { TVShow } from "@/entities/tv";
import { type FC, useState } from "react";

interface Props {
    tv: TVShow
}

const TVItem: FC<Props> = ({ tv } ) => {
    const [hoveredTvId, setHoveredTvId] = useState(0)

    return (
        <div
            key={tv.id}
            className="group relative w-100 h-130 shrink-0 overflow-hidden"
            onMouseEnter={() => setHoveredTvId(tv.id)}
            onMouseLeave={() => setHoveredTvId(0)}
        >
            <img
                src={tv.poster_path ? getStorageUrl(tv.poster_path) : '/no-poster.png'}
                className={`size-full object-cover transition-all duration-300 rounded-2xl
                                ${hoveredTvId === tv.id ? 'brightness-20' : ''}`}
                alt={`slider ${tv.id}`}
            />

            <div className={`absolute inset-0 flex justify-between flex-col opacity-0 
                            transition-opacity duration-300 text-white p-4
                            ${hoveredTvId === tv.id ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-xl font-second font-bold text-center px-4 drop-shadow-lg">
                    { tv.name } ({tv.first_air_date?.slice(0, 4)})
                </h1>
                <p className='text-xl line-clamp-8'>
                    {tv.overview ? tv.overview : 'Описания у фильма нет. Посмотрите и узнайте о чем он!'}
                </p>

                <Link to={`/tv/${tv.id}`}>
                    <AppButton className="text-xl w-full font-second font-bold bg-basic">
                        Подробнее
                    </AppButton>
                </Link>
            </div>
        </div>
    )
}

export default TVItem