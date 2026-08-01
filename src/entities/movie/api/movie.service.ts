import { api } from "@/shared/api";
import type {
    AccountStatesResponse,
    DetailMovie,
    ExtendedMoviesResponse,
    FavoriteBody,
    MoviesResponse,
    WatchlistBody
} from "@/entities/movie";

export const movieService = {
    getTrendingMovies: (time_window: string) =>
        api.get<MoviesResponse>(`/trending/movie/${time_window}`).then((res) => res.data.results),

    getNowPlayingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/now_playing').then((res) => res.data.results),

    getUpcomingMovies: () =>
        api.get<ExtendedMoviesResponse>('movie/upcoming').then((res) => res.data.results),

    getMovie: (movie_id: number) =>
        api.get<DetailMovie>(`movie/${movie_id}`).then((res) => res.data),

    getFavoriteMovies: (id: string, page: number = 1) =>
        api.get<MoviesResponse>(`account/${id}/favorite/movies`, {
            params: {
                session_id: id,
                page: page
            }
        }).then((res) => res.data.results),

    getWatchlistMovies: (id: string) =>
        api.get<MoviesResponse>(`account/${id}/watchlist/movies`, {
            params: {
                session_id: id,
            }
        }).then((res) => res.data.results),

    addToFavorite: (id: string, payload: FavoriteBody) =>
        api.post<{ status_code: number, status_message: string }>(`account/${id}/favorite`, payload, {
            params: {
                session_id: id
            }
        }).then(res => res.data),

    addToWatchlist: (id: string, payload: WatchlistBody) =>
        api.post<{ status_code: number, status_message: string }>(`account/${id}/watchlist`, payload, {
            params: {
                session_id: id
            }
        }).then(res => res.data),

    getAccountStates: (movie_id: number, session_id: string) =>
        api.get<AccountStatesResponse>(`movie/${movie_id}/account_states`, {
            params: {
                session_id: session_id
            }
        }).then((res) => res.data)
}