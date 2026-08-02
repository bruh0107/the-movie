import { AppButton } from "@/shared/ui";
import type { FilterParams, MovieSortBy } from "@/entities/movie";
import type { Dispatch, FC, SetStateAction } from "react";

const SORT_OPTIONS: { label: string, value: MovieSortBy }[] = [
    { label: "Сначала популярные", value: "popularity.desc" },
    { label: "Сначала менее популярные", value: "popularity.asc" },
    { label: "Сначала с высоким рейтингом", value: "vote_average.desc" },
    { label: "Сначала с низким рейтингом", value: "vote_average.asc" },
]

interface Props {
    filters: FilterParams,
    setFilters: Dispatch<SetStateAction<FilterParams>>
}

const MovieSort: FC<Props> = (props) => {
    const {
        filters,
        setFilters
    } = props

    const activeSort = filters.sort_by ?? "popularity.desc"

    const handleSortChange = (newSort: FilterParams['sort_by']) => {
        setFilters((prev) => ({ ...prev, sort_by: newSort, page: 1 }))
    }

    return (
        <div className="flex flex-wrap justify-end gap-3 py-6">
            {SORT_OPTIONS.map((option) => {
                const isActive = activeSort === option.value;

                return (
                    <AppButton
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`transition-all ${
                            isActive
                                ? "bg-accent text-white ring-2"
                                : "opacity-75 hover:opacity-100"
                        }`}
                    >
                        {option.label}
                    </AppButton>
                );
            })}
        </div>
    );
};

export default MovieSort;