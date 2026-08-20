import { useState } from "react";
import { useTitle } from "@/shared/lib";
import { useUpcomingMovies } from "@/entities/movie";
import { ContentList } from "@/widgets/content";
import { ListsPagination } from "@/shared/ui";

const UpcomingPage = () => {
    const [page, setPage] = useState(1)

    useTitle("Предстоящие")

    const { data: upcomingMovies, isLoading, isPlaceholderData } = useUpcomingMovies(page)

    return (
        <section className="main-container py-10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold font-second">Предстоящие картины</h1>
                    <p className="text-gray-500 mt-1">
                        Фильмы, которые совсем скоро появятся на больших экранах
                    </p>
                </div>
            </div>

            <ContentList
                items={upcomingMovies}
                page={page}
                type="movie"
                isLoading={isLoading}
            />

            <ListsPagination
                page={page}
                setPage={setPage}
                placeholderData={isPlaceholderData}
                contents={upcomingMovies ? upcomingMovies : []} // не нравится
            />
        </section>
    )
}

export default UpcomingPage