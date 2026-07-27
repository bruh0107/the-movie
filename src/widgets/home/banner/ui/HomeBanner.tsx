import { MovieBannerList } from "@/features/movie";

const HomeBanner = () => {
    return (
        <section className="h-190 bg-linear-to-b from-basic to-white">
            <div className="main-container h-full flex flex-col justify-center">
                <section className="flex">
                    <article className="flex flex-col gap-5 justify-center">
                        <h1 className="text-5xl font-second text-second max-w-[60%] leading-15">
                            Твой личный киноархив в
                            <span className="underline"> одном клике</span>
                        </h1>
                        <p className="text-2xl max-w-1/2 font-semibold">
                            Всё, что ты любишь, теперь собрано в TheMovie! Находи фильмы, создавай коллекции и веди дневник просмотренного.
                        </p>
                    </article>
                    <article>
                        <MovieBannerList />
                    </article>
                </section>
            </div>
        </section>
    );
};

export default HomeBanner;