import { type Dispatch, type SetStateAction, useState } from "react"
import { type FilterParams, useDiscoverMovie, useSearchMovie } from "@/entities/movie"
import { ContentItem, ListsPagination } from "@/shared/ui"
import { ContentFilter } from "@/features/filter"
import { useDebounce } from "@/shared/lib";

const MovieCatalog = () => {
    const [filters, setFilters] = useState<FilterParams>({
        sort_by: 'popularity.desc',
        include_adult: false,
        page: 1
    })
    const [search, setSearch] = useState("")
    const searchDebounce = useDebounce(search, 500)

    const isSearchMode = searchDebounce.trim().length > 1

    const {
        data: discoverMovies,
        isLoading: isDiscoverLoading,
        isPlaceholderData: isDiscoverPlaceholder
    } = useDiscoverMovie(filters)

    const {
        data: searchMovies,
        isLoading: isSearchLoading,
        isPlaceholderData: isSearchPlaceholder
    } = useSearchMovie(searchDebounce, filters.page)

    const movies = isSearchMode ? searchMovies : discoverMovies
    const isLoading = isSearchMode ? isSearchLoading : isDiscoverLoading
    const isPlaceholderData = isSearchMode ? isSearchPlaceholder : isDiscoverPlaceholder

    const handlePageChange: Dispatch<SetStateAction<number>> = (action) => {
        setFilters((prev) => {
            const newPage = typeof action === 'function' ? action(prev.page ?? 1) : action
            return { ...prev, page: newPage }
        })
    }

    const hasMovies = movies && movies.length > 0

    return (
        <>
            <ContentFilter
                filters={filters}
                setFilters={setFilters}
                search={search}
                setSearch={setSearch}
                isTV={false}
            />
            <div>
                {isLoading ? (
                    <div className="loader" />
                ) : hasMovies ? (
                    <div className="grid grid-cols-4 gap-4">
                        {movies.map((movie) => (
                            <ContentItem
                                key={movie.id}
                                content={movie}
                                path="movie"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center text-basic">
                        <h1 className="text-2xl font-semibold">Ничего не найдено</h1>
                        <p className="text-sm mt-1">Попробуйте изменить параметры поиска или фильтрации</p>
                    </div>
                )}
            </div>

            {hasMovies && (
                <ListsPagination
                    placeholderData={isPlaceholderData}
                    page={filters.page ?? 1}
                    setPage={handlePageChange}
                    contents={movies}
                />
            )}
        </>
    );
};

export default MovieCatalog;