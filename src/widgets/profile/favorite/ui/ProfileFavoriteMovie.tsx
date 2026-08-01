import { ListsList } from "@/widgets/movie";
import { useFavoriteMovies } from "@/entities/movie";
import { useState } from "react";
import { AppButton } from "@/shared/ui";

const ProfileFavoriteMovie = () => {
    const [page, setPage] = useState(1)
    const { data: favoriteMovies, isPlaceholderData } = useFavoriteMovies(page)

    return (
        <>
            <ListsList movies={favoriteMovies} />

            <div className="flex justify-center items-center gap-3 mt-5">
                <AppButton
                    onClick={() => setPage((old) => Math.max(old-1, 1))}
                    disabled={page === 1}
                >
                    Назад
                </AppButton>
                <p>Страница {page}</p>
                <AppButton
                    onClick={() => {
                        if (!isPlaceholderData && favoriteMovies && favoriteMovies.length === 20) {
                            setPage((old) => old + 1)
                        }
                    }}
                    disabled={isPlaceholderData && (favoriteMovies && favoriteMovies.length === 20)}
                >
                    Вперед
                </AppButton>
            </div>
        </>
    );
};

export default ProfileFavoriteMovie;