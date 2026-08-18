import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { type TVFilterParams, tvService } from "@/entities/tv";
import { useAuth } from "@/entities/account";

export const useDiscoverTV = (params?: TVFilterParams) => {
    return useQuery({
        queryKey: ['discover-tv', params],
        queryFn: () => tvService.getDiscoverTV(params),
        placeholderData: keepPreviousData
    })
}

export const useTVAccountStates = (series_id: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['tv-account-states', series_id],
        queryFn: () => tvService.getTVAccountStates(series_id, session_id),
        enabled: !!session_id && !!series_id
    })
}

export const useDetailTV = (series_id: number) => {
    return useQuery({
        queryKey: ['tv-show', series_id],
        queryFn: () => tvService.getTVDetail(series_id),
        enabled: typeof series_id === 'number' && !isNaN(series_id)
    })
}

export const useFavoriteTV = (page?: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['favorite-tv', page],
        queryFn: () => tvService.getFavoriteTV(session_id, page),
        placeholderData: keepPreviousData,
        enabled: !!session_id
    })
}

export const useWatchlistTV = (page?: number) => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['watchlist-tv', page],
        queryFn: () => tvService.getWatchlistTV(session_id, page),
        placeholderData: keepPreviousData,
        enabled: !!session_id
    })
}

export const useSimilarTV = (series_id: number) => {
    return useQuery({
        queryKey: ['similar-tv', series_id],
        queryFn: () => tvService.getSimilarTV(series_id),
        enabled: typeof series_id === 'number' && !isNaN(series_id)
    })
}

export const useTVGenres = () => {
    return useQuery({
        queryKey: ['tv-genres'],
        queryFn: () => tvService.getTVGenres(),
        staleTime: Infinity,
    })
}

export const useSearchTV = (query: string, page: number = 1) => {
    return useQuery({
        queryKey: ['search-tv', query, page],
        queryFn: () => tvService.searchTV(query, page),
        enabled: query.trim().length > 1,
        placeholderData: keepPreviousData
    })
}

export const useTVCredits = (series_id: number) => {
    return useQuery({
        queryKey: ['tv-credits', series_id],
        queryFn: () => tvService.getTVCredits(series_id),
    })
}

export const useSeasonDetail = (series_id: number, season_number: number, isEnabled: boolean = true) => {
    return useQuery({
        queryKey: ['tv-season-detail', series_id, season_number],
        queryFn: () => tvService.getSeasonDetail(series_id, season_number),
        enabled: isEnabled && Boolean(series_id) && typeof season_number === 'number',
    })
}

export const useTopRatedTV = (page: number = 1) => {
    return useQuery({
        queryKey: ['top-rated-tv', page],
        queryFn: () => tvService.getTopRatedTV(page),
    })
}