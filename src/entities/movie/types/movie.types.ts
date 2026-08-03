export interface PaginatedResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number
    name: string
}

export type MoviesResponse = PaginatedResponse<Movie>

export interface Date {
    maximum: string
    minimum: string
}

export interface ExtendedMoviesResponse extends MoviesResponse {
    dates: Date
}

export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
}

export interface ProductionCompany {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}

export interface BaseMovie {
    adult: boolean
    backdrop_path: string | null
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string | null
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface Movie extends BaseMovie {
    genre_ids: number[]
    media_type?: string
}

export interface DetailMovie extends BaseMovie {
    belongs_to_collection: BelongsToCollection | null
    budget: number | null
    genres: Genre[]
    homepage: string
    imdb_id: string | null
    origin_country: string[]
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    revenue: number
    runtime: number | null
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string | null
}

export interface BaseMediaPayload {
    media_type: 'movie' | 'tv';
    media_id: number;
}

export interface FavoriteBody extends BaseMediaPayload {
    favorite: boolean;
}

export interface WatchlistBody extends BaseMediaPayload {
    watchlist: boolean;
}

export interface AccountStatesResponse {
    id: number
    rated: boolean | object
    favorite: boolean
    watchlist: boolean
}

export type MovieSortBy =
    | 'vote_average.desc'
    | 'vote_average.asc'
    | 'popularity.desc'
    | 'popularity.asc'
    | 'primary_release_date.desc'
    | 'primary_release_date.asc'

export interface FilterParams {
    page: number
    sort_by?: MovieSortBy
    include_adult?: boolean
    with_genres?: string
    primary_release_year?: number
    'primary_release_date.gte'?: string
    'primary_release_date.lte'?: string
    'with_runtime.gte'?: number
    'with_runtime.lte'?: number
    with_original_language?: string
    'vote_average.gte'?: string
    'vote_average.lte'?: string
}

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

export interface Language {
    iso_639_1: string
    english_name: string
    name: string
}