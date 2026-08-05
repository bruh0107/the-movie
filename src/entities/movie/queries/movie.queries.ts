import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    movieService,
    type FavoriteBody,
    type FilterParams,
    type WatchlistBody
} from "@/entities/movie";
import { useAuth } from "@/entities/account";

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

export const useMovie = (movie_id: number) => {
    return useQuery({
        queryKey: ['movie', movie_id],
        queryFn: () => movieService.getMovie(movie_id),
        enabled: typeof movie_id === 'number' && !isNaN(movie_id)
    })
}

export const useFavoriteMovies = (page?: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['favorite-movie', page],
        queryFn: () => movieService.getFavoriteMovies(session_id, page),
        placeholderData: keepPreviousData,
        enabled: !!session_id
    })
}

export const useWatchlistMovies = (page?: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['watchlist', page],
        queryFn: () => movieService.getWatchlistMovies(session_id, page),
        placeholderData: keepPreviousData,
        enabled: !!session_id
    })
}

export const useMovieAccountStates = (movie_id: number) => {
    const session_id = useAuth((state) => state.session_id);

    return useQuery({
        queryKey: ['movie-account-states', movie_id],
        queryFn: () => movieService.getMovieAccountStates(movie_id, session_id),
        enabled: !!session_id && !!movie_id,
    })
}

export const useAddToFavorite = (movie_id?: number) => {
    const session_id = useAuth(state => state.session_id)
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: FavoriteBody) => {
            if (!session_id) throw new Error('Пользователь не авторизован')
            return movieService.addToFavorite(session_id, payload)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favorite-movie'] });
            if (movie_id) {
                queryClient.invalidateQueries({ queryKey: ['movie-account-states', movie_id] });
            }
        },
    })
}

export const useAddToWatchlist = (movie_id?: number) => {
    const session_id = useAuth(state => state.session_id)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (payload: WatchlistBody) => {
            if (!session_id) throw new Error('Пользователь не авторизован')
            return movieService.addToWatchlist(session_id, payload)
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['watchlist'] })
            if (movie_id) {
                queryClient.invalidateQueries({ queryKey: ['movie-account-states', movie_id] })
            }
        }
    })
}

export const useDiscoverMovie = (params?: FilterParams) => {
    return useQuery({
        queryKey: ['discover', params],
        queryFn: () => movieService.getDiscoverMovie(params),
        placeholderData: keepPreviousData
    })
}

export const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => movieService.getGenres(),
        staleTime: Infinity,
    })
}

export const useLanguage = () => {
    return useQuery ({
        queryKey: ['languages'],
        queryFn: () => movieService.getLanguages(),
        staleTime: Infinity
    })
}

export const useSearchMovie = (query: string, page: number = 1) => {
    return useQuery({
        queryKey: ['search-movie', query, page],
        queryFn: () => movieService.searchMovie(query, page),
        enabled: query.trim().length > 1,
        placeholderData: keepPreviousData
    })
}

export const useMovieVideos = (movie_id: number) => {
    return useQuery({
        queryKey: ['movie-videos', movie_id],
        queryFn: () => movieService.getMovieVideos(movie_id),
        enabled: !!movie_id
    })
}