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

export const useUpcomingMovies = (page: number = 1) => {
    return useQuery({
        queryKey: ['upcoming-movies', page],
        queryFn: () => movieService.getUpcomingMovies(page),
        placeholderData: keepPreviousData
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
        queryKey: ['favorite-movies', page],
        queryFn: () => movieService.getFavoriteMovies(session_id, page),
        placeholderData: keepPreviousData,
        enabled: !!session_id
    })
}

export const useWatchlistMovies = (page?: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['watchlist-movies', page],
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

export const useAddToFavorite = (contentId?: number) => {
    const sessionId = useAuth((state) => state.session_id);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: FavoriteBody) => {
            if (!sessionId) throw new Error("Пользователь не авторизован");
            return movieService.addToFavorite(sessionId, payload);
        },
        onSuccess: (_, payload) => {
            queryClient.invalidateQueries({ queryKey: ["favorite-movies"] });
            queryClient.invalidateQueries({ queryKey: ["favorite-tv"] });

            const targetId = contentId ?? payload.media_id;
            if (targetId) {
                const stateQueryKey = payload.media_type === "tv"
                    ? ["tv-account-states", targetId]
                    : ["movie-account-states", targetId];

                queryClient.invalidateQueries({ queryKey: stateQueryKey });
            }
        },
    });
};

export const useAddToWatchlist = (contentId?: number) => {
    const sessionId = useAuth((state) => state.session_id)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (payload: WatchlistBody) => {
            if (!sessionId) throw new Error("Пользователь не авторизован")
            return movieService.addToWatchlist(sessionId, payload)
        },
        onSuccess: (_, payload) => {
            queryClient.invalidateQueries({ queryKey: ["watchlist-movies"] })
            queryClient.invalidateQueries({ queryKey: ["watchlist-tv"] })

            const targetId = contentId ?? payload.media_id
            if (targetId) {
                const stateQueryKey = payload.media_type === "tv"
                    ? ["tv-account-states", targetId]
                    : ["movie-account-states", targetId]

                queryClient.invalidateQueries({ queryKey: stateQueryKey })
            }
        },
    })
}

export const useDiscoverMovie = (params?: FilterParams) => {
    return useQuery({
        queryKey: ['discover', params],
        queryFn: () => movieService.getDiscoverMovie(params),
        placeholderData: keepPreviousData
    })
}

export const useMovieGenres = () => {
    return useQuery({
        queryKey: ['movie-genres'],
        queryFn: () => movieService.getMovieGenres(),
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

export const useSimilarMovies = (movie_id: number) => {
    return useQuery({
        queryKey: ['similar-movie', movie_id],
        queryFn: () => movieService.getSimilarMovies(movie_id),
        enabled: typeof movie_id === 'number' && !isNaN(movie_id)
    })
}

export const useMovieCredits = (movie_id: number) => {
    return useQuery({
        queryKey: ['movie-credits', movie_id],
        queryFn: () => movieService.getMovieCredits(movie_id),
    })
}

export const useTopRatedMovie = (page: number = 1) => {
    return useQuery({
        queryKey: ['top-rated-movie', page],
        queryFn: () => movieService.getTopRatedMovie(page)
    })
}