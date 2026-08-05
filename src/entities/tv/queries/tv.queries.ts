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