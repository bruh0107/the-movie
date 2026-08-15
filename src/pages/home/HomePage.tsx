import { HomeBanner, NowPlayingMovies, TrendMovies, UpcomingMovies } from "@/widgets/home";
import { useTitle } from "@/shared/lib";

const HomePage = () => {
    useTitle('Главная')

    return (
        <div className="flex flex-col gap-30">
            <HomeBanner />
            <TrendMovies />
            <NowPlayingMovies />
            <UpcomingMovies />
        </div>
    )
}

export default HomePage