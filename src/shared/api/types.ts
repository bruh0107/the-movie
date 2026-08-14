export interface PaginatedResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
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

export interface AccountStatesResponse {
    id: number
    rated: boolean | object
    favorite: boolean
    watchlist: boolean
}

export interface Genre {
    id: number
    name: string
}

export interface Actor {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string | undefined
    character: string
    credit_id: string
    order: number
}

export interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
}

export interface Credits {
    id: number
    cast: Actor[]
    crew: Crew[]
}