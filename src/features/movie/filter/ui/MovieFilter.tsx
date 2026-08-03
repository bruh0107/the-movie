import {
    type FilterParams,
    type MovieSortBy,
    useGenres,
    useLanguage,
} from "@/entities/movie";
import { type Dispatch, type FC, type SetStateAction } from "react";
import { AppButton } from "@/shared/ui";

const SORT_OPTIONS: { label: string, value: MovieSortBy }[] = [
    { label: "Сначала популярные", value: "popularity.desc" },
    { label: "Сначала менее популярные", value: "popularity.asc" },
    { label: "Сначала с высоким рейтингом", value: "vote_average.desc" },
    { label: "Сначала с низким рейтингом", value: "vote_average.asc" },
]

interface Props {
    filters: FilterParams
    setFilters: Dispatch<SetStateAction<FilterParams>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

const MovieFilter: FC<Props> = ({ filters, setFilters, search, setSearch }) => {
    const { data: genres } = useGenres()
    const { data: languages } = useLanguage()

    const sortedLanguages = languages
        ? [...languages].sort((a, b) => a.english_name.localeCompare(b.english_name))
        : []

    const handleChange = (field: keyof FilterParams, value: unknown) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value === "" ? undefined : value,
            page: 1
        }))
    }

    const handleSearchChange = (value: string) => {
        setSearch(value)
        setFilters((prev) => ({ ...prev, page: 1 }))
    }

    const handleReset = () => {
        setSearch('')
        setFilters({
            page: 1,
            sort_by: 'popularity.desc'
        })
    }

    return (
        <div className="flex items-end justify-between gap-3 py-6">
            <div className="w-1/4">
                <input
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    type="search"
                    className="py-2 px-4 w-full border border-basic rounded-xl"
                    placeholder="Искать нужный фильм"
                />
            </div>

            <div>
                <select
                    value={filters.sort_by ?? 'popularity.desc'}
                    onChange={(e) => handleChange("sort_by", e.target.value as MovieSortBy)}
                    className="custom-select"
                >
                    {
                        SORT_OPTIONS.map((option) => (
                            <option key={option.value} value={option.value}>
                                { option.label }
                            </option>
                        ))
                    }
                </select>
            </div>

            <div>
                <select
                    value={filters.with_genres ?? ""}
                    onChange={(e) => handleChange("with_genres", e.target.value)}
                    className="custom-select"
                >
                    <option value="">Выбрать жанр</option>
                    {
                        genres?.map((genre) => (
                            <option key={genre.id} value={genre.id}>{ genre.name }</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <label>Год выпуска
                    <input
                        type="number"
                        min="1900"
                        max="2027"
                        value={filters.primary_release_year ?? ""}
                        onChange={(e) =>
                            handleChange('primary_release_year', e.target.value ? Number(e.target.value) : undefined)}
                        placeholder="Например, 2026"
                        className="py-2 px-4 w-full border border-basic rounded-xl"
                    />
                </label>
            </div>

            <div>
                <select
                    value={filters.with_original_language ?? ''}
                    onChange={(e) => handleChange('with_original_language', e.target.value)}
                    className="custom-select"
                >
                    <option value="">Выбрать язык</option>
                    {
                        sortedLanguages.map((lang) => (
                            <option key={lang.iso_639_1} value={lang.iso_639_1}>{ lang.english_name }</option>
                        ))
                    }
                </select>
            </div>

            <div>
                <AppButton onClick={handleReset}>Сбросить фильтрацию</AppButton>
            </div>
        </div>
    )
}

export default MovieFilter