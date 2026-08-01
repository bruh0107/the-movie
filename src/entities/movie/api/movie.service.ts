import { api } from "@/shared/api";
import type { DetailMovie, ExtendedMoviesResponse, MoviesResponse } from "@/entities/movie";

export const movieService = {
    getTrendingMovies: (time_window: string) =>
        api.get<MoviesResponse>(`/trending/movie/${time_window}`).then((res) => res.data.results),

    getNowPlayingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/now_playing').then((res) => res.data.results),

    getUpcomingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/upcoming').then((res) => res.data.results),

    getMovie: (movie_id: number) =>
        api.get<DetailMovie>(`movie/${movie_id}`).then((res) => res.data),

    getFavoriteMovies: (id: string) =>
        api.get<MoviesResponse>(`account/${id}/favorite/movies`, {
            params: {
                session_id: id,
            }
        }).then((res) => res.data.results),

    getWatchlistMovies: (id: string) =>
        api.get<MoviesResponse>(`account/${id}/watchlist/movies`, {
            params: {
                session_id: id,
            }
        }).then((res) => res.data.results)
}