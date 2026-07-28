import { MovieSlider } from "@/features/slider";
import { HomeBanner } from "@/widgets/home";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-42.5">
            <HomeBanner />
            <MovieSlider />
        </div>
    )
}

export default HomePage