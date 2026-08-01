import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type BasicBody, type FavoriteBody, movieService } from "@/entities/movie";
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

export const useFavoriteMovies = () => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['favorite-movie'],
        queryFn: () => movieService.getFavoriteMovies(session_id),
        enabled: !!session_id
    })
}

export const useWatchlistMovies = () => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['watchlist'],
        queryFn: () => movieService.getWatchlistMovies(session_id),
        enabled: !!session_id
    })
}

export const useAddToFavorite = () => {
    const session_id = useAuth(state => state.session_id)
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: BasicBody) => {
            if (!session_id) throw new Error('Пользователь не авторизован')
            return movieService.addToFavorite(session_id, payload)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['favorite-movie'] })
        }
    })
}

export const useAddToWatchlist = () => {
    const session_id = useAuth(state => state.session_id)
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (payload: BasicBody) => {
            if (!session_id) throw new Error('Пользователь не авторизован')
            return movieService.addToWatchlist(session_id, payload)
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['watchlist'] })
        }
    })
}