import {
    type FilterParams,
    type MovieSortBy,
    useMovieGenres,
    useLanguage,
} from "@/entities/movie";
import { type Dispatch, type SetStateAction } from "react";
import { AppButton } from "@/shared/ui";
import { type TVFilterParams, useTVGenres } from "@/entities/tv";

const SORT_OPTIONS: { label: string, value: MovieSortBy }[] = [
    { label: "Сначала популярные", value: "popularity.desc" },
    { label: "Сначала менее популярные", value: "popularity.asc" },
    { label: "Сначала с высоким рейтингом", value: "vote_average.desc" },
    { label: "Сначала с низким рейтингом", value: "vote_average.asc" },
]

export const TV_STATUS_OPTIONS = [
    { label: "Возвращается (Returning)", value: "0" },
    { label: "Запланирован (Planned)", value: "1" },
    { label: "В производстве (In Production)", value: "2" },
    { label: "Завершён (Ended)", value: "3" },
    { label: "Отменён (Canceled)", value: "4" },
    { label: "Пилот (Pilot)", value: "5" },
]

export const TV_TYPE_OPTIONS = [
    { label: "Документальный", value: "0" },
    { label: "Новости", value: "1" },
    { label: "Мини-сериал", value: "2" },
    { label: "Реалити-шоу", value: "3" },
    { label: "Скриптовый (Scripted)", value: "4" },
    { label: "Ток-шоу", value: "5" },
    { label: "Видео", value: "6" },
]

interface Props <T extends FilterParams | TVFilterParams> {
    filters: T
    setFilters: Dispatch<SetStateAction<T>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    isTV: boolean
}

const ContentFilter = <T extends FilterParams | TVFilterParams>({
    filters,
    setFilters,
    search,
    setSearch,
    isTV = false,
    }: Props<T>) => {

    const { data: movieGenres } = useMovieGenres()
    const { data: tvGenres } = useTVGenres()
    const { data: languages } = useLanguage()

    const genres = isTV ? tvGenres : movieGenres;

    const sortedLanguages = languages
        ? [...languages].sort((a, b) => a.english_name.localeCompare(b.english_name))
        : []

    const handleChange = <K extends keyof T>(field: K, value: unknown) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value === "" ? undefined : value,
            page: 1,
        }));
    }

    const handleSearchChange = (value: string) => {
        setSearch(value);
        handleChange("page" as keyof T, 1)
    }

    const handleReset = () => {
        setSearch("");
        setFilters({
            page: 1,
            sort_by: "popularity.desc",
        } as T)
    }

    const yearField = (isTV ? "first_air_date_year" : "primary_release_year") as keyof T
    const yearValue = ((filters as unknown) as Record<string, unknown>)[yearField as string] ?? "";

    return (
        <section className="py-6">
            <div className="w-1/4">
                <input
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    type="search"
                    className="py-2 px-4 w-full border border-basic rounded-xl"
                    placeholder={isTV ? "Искать сериал..." : "Искать фильм..."}
                />
            </div>
            <div className="flex items-end justify-end gap-2">
                <div className="w-full">
                    <select
                        value={(filters.sort_by as string) ?? "popularity.desc"}
                        onChange={(e) => handleChange("sort_by" as keyof T, e.target.value)}
                        className="custom-select"
                    >
                        {SORT_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full">
                    <select
                        value={(filters.with_genres as string) ?? ""}
                        onChange={(e) => handleChange("with_genres" as keyof T, e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Все жанры</option>
                        {genres?.map((genre) => (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full">
                    <input
                        type="number"
                        min="1900"
                        max="2027"
                        value={yearValue as string | number}
                        onChange={(e) =>
                            handleChange(
                                yearField,
                                e.target.value ? Number(e.target.value) : undefined
                            )
                        }
                        placeholder="Год"
                        className="py-2 px-4 w-full border border-basic rounded-xl text-center"
                    />
                </div>

                <div className="w-full">
                    <select
                        value={(filters.with_original_language as string) ?? ""}
                        onChange={(e) => handleChange("with_original_language" as keyof T, e.target.value)}
                        className="custom-select"
                    >
                        <option value="">Язык оригинала</option>
                        {sortedLanguages.map((lang) => (
                            <option key={lang.iso_639_1} value={lang.iso_639_1}>
                                {lang.english_name}
                            </option>
                        ))}
                    </select>
                </div>

                {isTV && (
                    <>
                        <div className="w-full">
                            <select
                                value={((filters as TVFilterParams).with_status as string) ?? ""}
                                onChange={(e) => handleChange("with_status" as keyof T, e.target.value)}
                                className="custom-select"
                            >
                                <option value="">Статус сериала</option>
                                {TV_STATUS_OPTIONS.map((status) => (
                                    <option key={status.value} value={status.value}>
                                        {status.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full">
                            <select
                                value={((filters as TVFilterParams).with_type as string) ?? ""}
                                onChange={(e) => handleChange("with_type" as keyof T, e.target.value)}
                                className="custom-select"
                            >
                                <option value="">Тип сериала</option>
                                {TV_TYPE_OPTIONS.map((type) => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )}

                <div>
                    <AppButton className="w-[250px]" onClick={handleReset}>Сбросить фильтрацию</AppButton>
                </div>
            </div>
        </section>
    )
}

export default ContentFilter