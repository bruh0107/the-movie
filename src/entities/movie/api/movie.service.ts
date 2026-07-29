import { api } from "@/shared/api";
import type { ExtendedMoviesResponse, MoviesResponse } from "@/entities/movie";

export const movieService = {
    getTrendingMovies: (time_window: string) =>
        api.get<MoviesResponse>(`/trending/movie/${time_window}`).then((res) => res.data.results),

    getNowPlayingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/now_playing').then((res) => res.data.results),

    getUpcomingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/upcoming').then((res) => res.data.results)
}