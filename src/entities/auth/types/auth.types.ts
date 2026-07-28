interface Avatar {
    gravatar: Gravatar;
    tmdb: TmdbAvatar;
}

interface Gravatar {
    hash: string;
}

interface TmdbAvatar {
    avatar_path: string | null;
}

export interface User {
    avatar: Avatar;
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}

export interface RequestTokenResponse {
    success: boolean
    expires_at: string
    request_token: string
}

export interface AuthTypes {
    session_id: string | null
    user: User | null
    setAuth: (session_id: string, user: any) => void
    logout: () => void
}