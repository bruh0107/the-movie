import { useQuery } from "@tanstack/react-query";
import { movieService } from "@/entities/movie";

export const useTrendingMovies = (time_window: string) => {
    return useQuery({
        queryKey: ['trend-movies', time_window],
        queryFn: () => movieService.getTrendingMovies(time_window)
    })
}

export const useNowPlayingMovies = () => {
    return useQuery({
        queryKey: ['playing-movies'],
        queryFn: () => movieService.getNowPlayingMovies()
    })
}

export const useUpcomingMovies = () => {
    return useQuery({
        queryKey: ['upcoming-movies'],
        queryFn: () => movieService.getUpcomingMovies()
    })
}