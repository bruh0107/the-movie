import { type TVFilterParams, useDiscoverTV, useSearchTV } from "@/entities/tv";
import { ContentItem, ListsPagination } from "@/shared/ui";
import { ContentFilter } from "@/features/filter";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useDebounce } from "@/shared/lib";

const TVCatalog = () => {
    const [filters, setFilters] = useState<TVFilterParams>({
        sort_by: 'popularity.desc',
        page: 1
    })
    const [search, setSearch] = useState("")
    const searchDebounce = useDebounce(search, 500)

    const isSearchMode = searchDebounce.trim().length > 1

    const {
        data: tvShows,
        isLoading: isDiscoverTVLoading,
        isPlaceholderData: isDiscoverTVPlaceholder
    } = useDiscoverTV(filters)

    const {
        data: searchTV,
        isLoading: isSearchLoading,
        isPlaceholderData: isSearchPlaceholder
    } = useSearchTV(searchDebounce, filters.page)

    const tv = isSearchMode ? searchTV : tvShows
    const isLoading = isSearchMode ? isSearchLoading : isDiscoverTVLoading
    const isPlaceholderData = isSearchMode ? isSearchPlaceholder : isDiscoverTVPlaceholder

    const handlePageChange: Dispatch<SetStateAction<number>> = (action) => {
        setFilters((prev) => {
            const newPage = typeof action === 'function' ? action(prev.page ?? 1) : action
            return { ...prev, page: newPage }
        })
    }

    const hasTV = tv && tv.length > 0

    return (
        <section>
            <ContentFilter
                filters={filters}
                setFilters={setFilters}
                search={search}
                setSearch={setSearch}
                isTV={true}
            />

            <div>
                {isLoading ? (
                    <div className="loader" />
                ) : hasTV ? (
                    <div className="grid grid-cols-4 gap-4">
                        {tv.map((tv_one) => (
                            <ContentItem
                                key={tv_one.id}
                                content={tv_one}
                                path="tv"
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

            {hasTV && (
                <ListsPagination
                    placeholderData={isPlaceholderData}
                    page={filters.page ?? 1}
                    setPage={handlePageChange}
                    contents={tv}
                />
            )}
        </section>
    )
}

export default TVCatalog;