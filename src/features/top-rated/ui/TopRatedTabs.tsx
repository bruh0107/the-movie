import type { FC } from "react";
import { AppButton } from "@/shared/ui";

export type TopRatedType = "movie" | "tv"

interface Props {
    activeTab: TopRatedType
    onTabChange: (tab: TopRatedType) => void
}

const TopRatedTabs: FC<Props> = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex gap-4">
            <AppButton
                onClick={() => onTabChange("movie")}
                className={activeTab === "movie" ? 'bg-accent' : ''}
            >
                Фильмы
            </AppButton>
            <AppButton
                onClick={() => onTabChange("tv")}
                className={activeTab === "tv" ? 'bg-accent' : ''}
            >
                Сериалы</AppButton>
        </div>
    )
}

export default TopRatedTabs