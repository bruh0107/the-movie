export interface Genre {
    id: number
    name: string
}

export interface Movie {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string | null
    original_title: string | null
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Genre["id"][]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface TrendingMoviesResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}