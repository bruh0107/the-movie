import { HomeBanner, NowPlayingMovies } from "@/widgets/home";
import { useTitle } from "@/shared/lib";

const HomePage = () => {
    useTitle('Главная')

    return (
        <div className="flex flex-col gap-30">
            <HomeBanner />
            <NowPlayingMovies />
        </div>
    )
}

export default HomePage