import type { TVShow, TVShowDetail } from "@/entities/tv";
import type { DetailMovie, Movie } from "@/entities/movie";

type ContentType = TVShowDetail | DetailMovie | Movie | TVShow

export const contentTitle = (content: ContentType) => {
    return (("name" in content && content.name) || ("title" in content && content.title)) ?? ''
}

export const contentDateRelease = (content: ContentType) => {
    const date = (
        (("first_air_date" in content ? content.first_air_date : '')
            || ("release_date" in content ? content.release_date : '')) ?? ''
    )
    return date.slice(0, 4)
}

export const contentOriginalTitle = (content: ContentType) => {
    return (("original_title" in content && content.original_title) || ("original_name" in content && content.original_name)) ?? ''
}