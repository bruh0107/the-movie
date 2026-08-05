import { type AccountStatesResponse, api } from "@/shared/api";
import type { TVFilterParams, TVShowDetail, TVShowResponse } from "@/entities/tv";

export const tvService = {
    getDiscoverTV: (params?: TVFilterParams) =>
        api.get<TVShowResponse>('discover/tv', {
            params: {
                page: params?.page ?? 1,
                sort_by: params?.sort_by ?? 'popularity.desc',
                first_air_date_year: params?.first_air_date_year,
                "vote_average.gte": params?.["vote_average.gte"],
                "with_runtime.gte": params?.['with_runtime.gte'],
                "with_runtime.lte": params?.['with_runtime.lte'],
                with_original_language: params?.with_original_language,
                with_status: params?.with_status,
                with_type: params?.with_type
            }
        }).then(res => res.data.results),

    getTVDetail: (id: number) =>
        api.get<TVShowDetail>(`tv/${id}`, {
            params: {
                language: 'ru-RU'
            }
        }).then(res => res.data),

    getTVAccountStates: (id: number, session_id: string) =>
        api.get<AccountStatesResponse>(`tv/${id}/account_states`, {
            params: { session_id }
        }).then(res => res.data)

}