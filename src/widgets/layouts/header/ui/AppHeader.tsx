import { AppIcon } from "@/shared/ui";

const AppHeader = () => {
    return (
        <header className="bg-basic text-white">
            <div className="main-container flex justify-between items-center">
                <div className="flex items-center gap-1 text-second">
                    <AppIcon name="film" className="size-14" />
                    <h1 className="font-second text-2xl">TheMovie</h1>
                </div>
                <nav className="flex justify-between text-xl w-1/4">
                    <a href="">Туда</a>
                    <a href="">Сюда</a>
                    <a href="">Туда</a>
                    <a href="">Сюда</a>
                </nav>
                <button className="text-xl">Войти</button>
            </div>
        </header>
    )
}

export default AppHeader