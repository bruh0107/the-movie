import type { FC } from "react";
import type { DetailMovie } from "@/entities/movie";

interface Props {
    movie: DetailMovie | undefined
}

const MovieInfo: FC<Props> = ({movie}) => {
    const formatNum = (num: number | null | undefined) => {
        return !num ? '-' : new Intl.NumberFormat('ru-RU').format(num)
    }

    const formatRuntime = (time: number | null | undefined) => {
        if (!time) return '-';
        const hours = Math.floor(time / 60);
        const mins = time % 60;
        return `${hours} ч ${mins} мин`;
    }

    return (
        <article className="flex flex-col gap-8">
            <p className="text-4xl font-bold">О фильме</p>
            <div className="flex gap-5">
                <div className="text-xl flex flex-col gap-3">
                    <p>Год производства</p>
                    <p>Жанр</p>
                    <p>Слоган</p>
                    <p>Бюджет</p>
                    <p>Сборы</p>
                    <p>Время</p>
                    <p>Страна</p>
                </div>
                <div className="text-xl flex flex-col gap-3">
                    <p>{movie?.release_date.slice(0, 4)}</p>
                    <div className="flex gap-2">
                        {movie?.genres.map((genre) => (
                            <p key={genre.id}>{ genre.name }</p>
                        ))}
                    </div>
                    <p>{movie?.tagline ? movie?.tagline : '-'}</p>
                    <p>${ formatNum(movie?.budget) }</p>
                    <p>${ formatNum(movie?.revenue) }</p>
                    <p>{ formatRuntime(movie?.runtime) }</p>
                    <p>
                        {movie?.production_countries.map((country) => country.name).join(', ')}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default MovieInfo;