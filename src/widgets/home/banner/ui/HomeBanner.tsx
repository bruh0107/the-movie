const HomeBanner = () => {
    return (
        <section className="h-190 bg-linear-to-b from-basic to-white">
            <div className="main-container h-full flex flex-col justify-center">
                <section className="flex">
                    <article className="flex flex-col gap-5 justify-center">
                        <h1 className="text-5xl font-second text-second max-w-1/2 leading-15">Твой личный киноархив в <span className="underline">одном клике</span></h1>
                        <p className="text-2xl max-w-1/2 font-semibold">Всё, что ты любишь, теперь собрано в TheMovie! Находи фильмы, создавай коллекции и веди дневник просмотренного.</p>
                    </article>
                    <article>
                        <div className="relative">
                            <div className="w-87.5 h-100 bg-blue-100 absolute z-3 top-17.5 right-50 shadow-[5px_-5px_20px_5px_rgba(0,0,0,0.1)]"></div>
                            <div className="w-87.5 h-100 bg-blue-400 absolute z-2 -top-12.5 -right-2.5 shadow-[5px_-5px_20px_5px_rgba(0,0,0,0.1)]"></div>
                            <div className="w-87.5 h-100 bg-blue-700 absolute z-1 -top-40 -right-52.5"></div>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    );
};

export default HomeBanner;