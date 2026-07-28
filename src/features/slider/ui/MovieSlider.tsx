import { AppSlider } from "@/shared/ui";
import { useTrendingMovies } from "@/entities/movie/queries/movie.queries.ts";
import { getStorageUrl } from "@/shared/utils"; // Убедитесь, что импорт верный

const MovieSlider = () => {
    const { data: trendMovies } = useTrendingMovies("week")

    return (
        <div className="w-full mx-auto mt-[120px]">
            <div className="main-container pb-[60px] flex flex-col gap-5">
                <h1 className="text-5xl font-second p-2.5 bg-second w-fit">В тренде</h1>
                <p className="text-3xl">
                    Смотрите, то что сейчас популярно. Студии продолжают эксплуатировать вселенные-гиганты вроде «Дюны», «Аватара» и супергеройских франшиз!
                </p>
            </div>
            <AppSlider>
                {trendMovies?.map((movie) => (
                    <div
                        key={movie.id}
                        className="group relative w-100 h-120 shrink-0 overflow-hidden cursor-pointer"
                    >
                        <img
                            src={getStorageUrl(movie.poster_path)}
                            className="size-full object-cover transition-all duration-300 group-hover:brightness-[0.4] group-hover:scale-105"
                            alt={`slider ${movie.id}`}
                        />

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <h1 className="text-white text-xl font-bold text-center px-4 drop-shadow-lg">
                                { movie.title }
                            </h1>
                        </div>
                    </div>
                ))}
            </AppSlider>
        </div>
    );
};

export default MovieSlider;