import type { PaginatedResponse } from "@/shared/api";

export interface TVShow {
    backdrop_path: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export type TVShowResponse = PaginatedResponse<TVShow>

export type TVSortBy =
    | 'popularity.desc'
    | 'popularity.asc'
    | 'vote_average.desc'
    | 'vote_average.asc'
    | 'first_air_date.desc'
    | 'first_air_date.asc'
    | 'vote_count.desc'

export interface TVFilterParams {
    page: number
    sort_by?: TVSortBy
    with_genres?: string
    first_air_date_year?: number
    'vote_average.gte'?: number
    'with_runtime.gte'?: number
    'with_runtime.lte'?: number
    with_original_language?: string
    with_status?: string
    with_type?: string
}