import { useSearchParams } from "react-router-dom";
import type { TopRatedType } from "@/features/top-rated/ui/TopRatedTabs.tsx";
import { useTitle } from "@/shared/lib";
import { useTopRatedMovie } from "@/entities/movie";
import { useTopRatedTV } from "@/entities/tv";
import { TopRatedList } from "@/widgets/top-rated";
import { TopRatedTabs } from "@/features/top-rated";
import { ListsPagination } from "@/shared/ui";
import { useState } from "react";

const TopRatedPage = () => {
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    const activeTab = (searchParams.get('type') as TopRatedType) || "movie"
    const currentPage = Number(searchParams.get("page")) || 1

    useTitle(activeTab === "movie" ? "Топ-250 Фильмов" : "Топ-250 Сериалов")

    const { data: movies, isLoading: isLoadingMovie, isPlaceholderData: isPlaceholderDataMovie } = useTopRatedMovie(page)
    const { data: tv, isLoading: isLoadingTV, isPlaceholderData: isPlaceholderDataTV } = useTopRatedTV(page)

    const handleTabChange = (type: TopRatedType) => {
        setSearchParams({ type, page: "1" })
    }

    const isLoading = activeTab === "movie" ? isLoadingMovie : isLoadingTV
    const items = activeTab === "movie" ? movies : tv
    const isPlaceholderData = activeTab === "movie" ? isPlaceholderDataMovie : isPlaceholderDataTV

    return (
        <section className="main-container py-10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold font-second">Топ-250</h1>
                    <p className="text-gray-500 mt-1">
                        Шедевры мирового кинематографа по оценкам зрителей
                    </p>
                </div>

                <TopRatedTabs
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                />
            </div>

            <TopRatedList
                items={items}
                type={activeTab}
                page={currentPage}
                isLoading={isLoading}
            />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={items ? items : []} // не нравится
            />
        </section>
    )
}

export default TopRatedPage