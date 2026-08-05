import type { PaginatedResponse, ProductionCompany, ProductionCountry, SpokenLanguage } from "@/shared/api";

export interface Genre {
    id: number
    name: string
}

export interface CreatedBy {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string | undefined
}

export interface LastEpisodeToAir {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
}

export interface Networks {
    id: number
    logo_path: string | undefined
    name: string
    origin_country: string
}

export interface Season {
    id: number
    air_date: string
    episode_count: number
    name: string
    overview: string
    poster_path: string | undefined
    season_number: number
    vote_average: number
}

export interface BasicTVShow {
    backdrop_path: string
    first_air_date: string
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

export interface TVShow extends BasicTVShow {
    genre_ids: number[]
}

export interface TVShowDetail extends BasicTVShow {
    adult: boolean
    created_by: CreatedBy
    episode_run_time: number[]
    genres: Genre[]
    homepage: string
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir
    next_episode_to_air: string
    networks: Networks[]
    number_of_episodes: number
    number_of_seasons: number
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    seasons: Season[]
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    type: string
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