import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { type TVFilterParams, tvService } from "@/entities/tv";

export const useDiscoverTV = (params?: TVFilterParams) => {
    return useQuery({
        queryKey: ['discover-tv', params],
        queryFn: () => tvService.getDiscoverTV(params),
        placeholderData: keepPreviousData
    })
}