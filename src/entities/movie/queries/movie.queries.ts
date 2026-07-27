import { useQuery } from "@tanstack/react-query";
import { movieService } from "@/entities/movie";

export const useTrendingMovies = (time_window: string) => {
    return useQuery({
        queryKey: ['movies', time_window],
        queryFn: () => movieService.getTrendingMovie(time_window)
    })
}