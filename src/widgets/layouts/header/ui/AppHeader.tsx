import { AppIcon } from "@/shared/ui";
import { HeaderNavigation } from "@/features/navigation";

const AppHeader = () => {
    return (
        <header className="bg-basic text-white py-4">
            <div className="main-container flex justify-between items-center">
                <div className="flex items-center gap-1 text-second">
                    <AppIcon name="film" className="size-14" />
                    <h1 className="font-second text-2xl">TheMovie</h1>
                </div>
                <HeaderNavigation />
                <button className="text-xl">Войти</button>
            </div>
        </header>
    )
}

export default AppHeader