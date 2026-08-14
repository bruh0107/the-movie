import { type AccountStatesResponse, api, type Credits, type Genre } from "@/shared/api";
import type { TVFilterParams, TVShowDetail, TVShowResponse } from "@/entities/tv";

export const tvService = {
    getDiscoverTV: (params?: TVFilterParams) =>
        api.get<TVShowResponse>('discover/tv', {
            params: {
                language: 'ru-RU',
                page: params?.page ?? 1,
                sort_by: params?.sort_by ?? 'popularity.desc',
                first_air_date_year: params?.first_air_date_year,
                "vote_average.gte": params?.["vote_average.gte"],
                "with_runtime.gte": params?.['with_runtime.gte'],
                "with_runtime.lte": params?.['with_runtime.lte'],
                with_original_language: params?.with_original_language,
                with_status: params?.with_status,
                with_type: params?.with_type,
                with_genres: params?.with_genres
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
        }).then(res => res.data),

    getFavoriteTV: (id: string, page: number = 1) =>
        api.get<TVShowResponse>(`account/${id}/favorite/tv`, {
            params: {
                session_id: id,
                page
            }
        }).then(res => res.data.results),

    getWatchlistTV: (id: string, page: number = 1) =>
        api.get<TVShowResponse>(`account/${id}/watchlist/tv`, {
            params: {
                session_id: id,
                page
            }
        }).then(res => res.data.results),

    getSimilarTV: (id: number) =>
        api.get<TVShowResponse>(`tv/${id}/similar`, {
            params: {
                language: 'ru-RU'
            }
        }).then(res => res.data.results),

    getTVGenres: () =>
        api.get<{ genres: Genre[] }>('genre/tv/list', {
            params: {
                language: 'ru-RU'
            }
        }).then(res => res.data.genres),

    searchTV: (query: string, page: number = 1) =>
        api.get<TVShowResponse>('search/tv', {
            params: { query, page }
        }).then(res => res.data.results),

    getTVCredits: (id: number) =>
        api.get<Credits>(`tv/${id}/credits`, {
            params: {
                language: 'ru-RU'
            }
        }).then(res => res.data)
}