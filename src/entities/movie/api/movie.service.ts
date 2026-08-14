import { type AccountStatesResponse, api, type Credits, type Genre } from "@/shared/api";
import type {
    DetailMovie,
    ExtendedMoviesResponse,
    FavoriteBody,
    FilterParams, Language,
    MoviesResponse, VideosResponse,
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

    getWatchlistMovies: (id: string, page: number = 1) =>
        api.get<MoviesResponse>(`account/${id}/watchlist/movies`, {
            params: {
                session_id: id,
                page: page
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

    getMovieAccountStates: (movie_id: number, session_id: string) =>
        api.get<AccountStatesResponse>(`movie/${movie_id}/account_states`, {
            params: {
                session_id: session_id
            }
        }).then((res) => res.data),

    getMovieGenres: () =>
        api.get<{ genres: Genre[] }>('genre/movie/list', {
            params: { language: 'ru-RU'}
        }).then(res => res.data.genres),

    getDiscoverMovie: (params?: FilterParams) =>
        api.get<MoviesResponse>('discover/movie', {
            params: {
                page: params?.page ?? 1,
                sort_by: params?.sort_by ?? 'popularity.desc',
                include_adult: false,
                with_genres: params?.with_genres,
                primary_release_year: params?.primary_release_year,
                "primary_release_date.gte": params?.["primary_release_date.gte"],
                "primary_release_date.lte": params?.["primary_release_date.lte"],
                "with_runtime.gte": params?.["with_runtime.gte"],
                "with_runtime.lte": params?.["with_runtime.lte"],
                with_original_language: params?.with_original_language,
                'vote_average.gte': params?.['vote_average.gte'],
                'vote_average.lte': params?.['vote_average.lte']
            }
        }).then((res) => res.data.results),

    getLanguages: () =>
        api.get<Language[]>('configuration/languages').then(res => res.data),

    searchMovie: (query: string, page: number = 1) =>
        api.get<MoviesResponse>('search/movie', {
            params: { query, page }
        }).then(res => res.data.results),

    getMovieVideos: (movie_id: number) =>
        api.get<VideosResponse>(`movie/${movie_id}/videos`).then(res => res.data.results),

    getSimilarMovies: (movie_id: number) =>
        api.get<MoviesResponse>(`/movie/${movie_id}/similar`).then(res => res.data.results),

    getMovieCredits: (movie_id: number) =>
        api.get<Credits>(`movie/${movie_id}/credits`, {
            params: {
                language: 'ru-RU'
            }
        }).then(res => res.data)
}