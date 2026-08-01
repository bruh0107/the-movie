import { useParams } from "react-router-dom";
import { useMovie } from "@/entities/movie";
import { getStorageUrl } from "@/shared/utils";
import { AppButton, AppIcon } from "@/shared/ui";

const MovieDetail = () => {
    const { id } = useParams<{ id: string }>()

    const movieId = id ? Number(id) : undefined
    const { data: movie } = useMovie(movieId)

    const formatNum = (num: number) => {
        return new Intl.NumberFormat('ru-RU').format(num)
    }

    const formatRuntime = (time: number) => {
        const hour = time / 60
        const min = time % 60
        return `${Math.round(hour)} ч ${min} мин`
    }

    return (
        <section className="py-10">
            <div className="main-container">
                <div className="flex gap-10">
                    <div className="w-1/4 flex flex-col gap-2">
                        <img className="w-full rounded-2xl" src={getStorageUrl(movie?.poster_path)} alt="" />
                        <div className="border border-accent rounded-xl flex justify-between items-center p-3">
                            <div className="flex gap-1 items-center">
                                <AppIcon name="star" className="w-7 text-[#ffb700]" />
                                <p className="font-bold">{ movie?.vote_average }</p>
                            </div>
                            <p>{ movie?.vote_count } голосов</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <article className="flex flex-col gap-4 text-xl">
                            <h2 className="text-4xl font-bold font-second">{ movie?.title } ({movie?.release_date.slice(0, 4)})</h2>
                            <p>{ movie?.original_title } { movie?.adult && '18+' }</p>
                            <p className="max-w-[800px]">{ movie?.overview }</p>
                        </article>
                        <article className="flex gap-3 text-xl">
                            <AppButton className="flex items-center gap-2">
                                <AppIcon name="watchlist-eye" className="w-8" />
                                Буду смотреть
                            </AppButton>
                            <AppButton>Просмотрено</AppButton>
                        </article>
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
                                            <p>{ genre.name }</p>
                                        ))}
                                    </div>
                                    <p>{movie?.tagline}</p>
                                    <p>${ formatNum(movie?.budget) }</p>
                                    <p>${ formatNum(movie?.revenue) }</p>
                                    <p>{ formatRuntime(movie?.runtime) }</p>
                                    <p>
                                        {movie?.production_countries.map((country) => country.name).join(', ')}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;