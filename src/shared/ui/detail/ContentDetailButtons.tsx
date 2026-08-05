import { AppButton, AppIcon } from "@/shared/ui"
import type { FC } from "react";

interface Props {
    isFavorite: boolean
    isWatchlist: boolean
    onToggleFavorite: () => void
    onToggleWatchlist: () => void
    pendingFavorite: boolean
    pendingWatchlist: boolean
}

const ContentDetailButtons: FC<Props> = (props) => {
    const {
        isFavorite,
        isWatchlist,
        onToggleFavorite,
        onToggleWatchlist,
        pendingFavorite = false,
        pendingWatchlist = false
    } = props

    return (
        <article className="flex gap-3 text-xl">
            <AppButton
                onClick={onToggleWatchlist}
                disabled={pendingWatchlist}
                className="flex items-center gap-2"
            >
                <AppIcon
                    name={isWatchlist ? 'check' : 'watchlist-eye'}
                    className={`w-8 ${isWatchlist ? 'text-[#54a15e]' : ''}`}
                />
                {isWatchlist ? 'В очереди на просмотр' : 'Буду смотреть'}
            </AppButton>

            <AppButton
                onClick={onToggleFavorite}
                disabled={pendingFavorite}
                className='flex items-center gap-2 transition-colors'
            >
                <AppIcon name="heart" className={`w-8 ${isFavorite ? 'text-[#f26363]' : ''}`} />
                {isFavorite ? 'Убрать из избранного' : 'В избранное'}
            </AppButton>
        </article>
    )
}

export default ContentDetailButtons