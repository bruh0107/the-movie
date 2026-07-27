import { api } from "@/shared/api";
import type { TrendingMoviesResponse } from "@/entities/movie";

export const movieService = {
    getTrendingMovie: (time_window: string) =>
        api.get<TrendingMoviesResponse>(`/trending/movie/${time_window}`).then((res) => res.data.results)
}