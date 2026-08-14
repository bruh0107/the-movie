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

export const formatPrice = (amount?: number) => {
    if (!amount || amount === 0) return '-';
    return `$${new Intl.NumberFormat('ru-RU').format(amount)}`;
}

export const formatRuntime = (content: ContentType) => {
    const runtime = "runtime" in content ? content.runtime : 0

    if (!runtime) return '-';
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;
    return `${hours} ч ${mins} мин`;
}

export const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU').format(date);
};