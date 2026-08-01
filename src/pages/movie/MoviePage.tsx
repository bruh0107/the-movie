import { MovieDetail } from "@/widgets/movie";
import { MovieTabs } from "@/features/movie";

const MoviePage = () => {
    return (
        <div>
            <MovieDetail />
            <MovieTabs />
        </div>
    );
};

export default MoviePage;