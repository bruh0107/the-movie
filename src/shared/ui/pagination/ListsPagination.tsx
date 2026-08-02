import { AppButton, AppIcon } from "@/shared/ui";
import { type Dispatch, type FC, type SetStateAction } from "react";
import type { Movie } from "@/entities/movie";

interface Props {
    placeholderData: boolean
    movies: Movie[] | undefined
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

const ListsPagination: FC<Props> = (props) => {
    const {
        placeholderData,
        movies,
        page,
        setPage
    } = props

    return (
        <div className="flex justify-center items-center gap-3 mt-5">
            <AppButton
                onClick={() => setPage((old) => Math.max(old-1, 1))}
                disabled={page === 1}
            >
                <AppIcon name="arrow" className="w-8 text-basic" />
            </AppButton>
            <p>Страница {page}</p>
            <AppButton
                onClick={() => {
                    if (!placeholderData && movies && movies.length === 20) {
                        setPage((old) => old + 1)
                    }
                }}
                disabled={placeholderData && (movies && movies.length === 20)}
            >
                <AppIcon name="arrow" className="w-8 rotate-180 text-basic" />
            </AppButton>
        </div>
    );
};

export default ListsPagination;