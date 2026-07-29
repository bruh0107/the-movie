import { HomeBanner, NowPlayingMovies, TrendMovies, UpcomingMovies } from "@/widgets/home";

const HomePage = () => {
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