import { type Dispatch, type SetStateAction, useState } from "react"
import { type FilterParams, MovieItem, useDiscoverMovie } from "@/entities/movie"
import { ListsPagination } from "@/shared/ui"
import { MovieSort } from "@/features/movie";

const MovieCatalog = () => {
    const [filters, setFilters] = useState<FilterParams>({
        sort_by: 'popularity.desc',
        include_adult: false,
        page: 1
    })

    const { data: movies, isLoading, isPlaceholderData } = useDiscoverMovie(filters)


    const handlePageChange: Dispatch<SetStateAction<number>> = (action) => {
        setFilters((prev) => {
            const newPage = typeof action === 'function' ? action(prev.page ?? 1) : action
            return { ...prev, page: newPage }
        })
    }

    return (
        <>
            <MovieSort
                filters={filters}
                setFilters={setFilters}
            />
            <div>
                {
                    isLoading ? (
                        <div className="loader" />
                    ) : (
                        <div className="grid grid-cols-4 gap-4">
                            {
                                movies?.map((movie) => (
                                    <MovieItem key={movie.id} movie={movie} />
                                ))
                            }
                        </div>
                    )
                }
            </div>

            <ListsPagination
                placeholderData={isPlaceholderData}
                page={filters.page ?? 1}
                setPage={handlePageChange}
                movies={movies}
            />
        </>
    );
};

export default MovieCatalog;