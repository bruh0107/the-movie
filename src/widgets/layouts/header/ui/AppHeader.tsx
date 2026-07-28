import { AppButton, AppIcon } from "@/shared/ui";
import { HeaderNavigation } from "@/features/navigation";
import { useCurrentUser, useIsAuth, useRequestToken } from "@/entities/auth";

const AppHeader = () => {
    const { mutateAsync: login, isPending } = useRequestToken()
    const isAuth = useIsAuth()
    const user = useCurrentUser()

    return (
        <header className="bg-basic text-white py-4">
            <div className="main-container flex justify-between items-center">
                <div className="flex items-center gap-1 text-second">
                    <AppIcon name="film" className="size-14" />
                    <h1 className="font-second text-2xl">TheMovie</h1>
                </div>
                <HeaderNavigation />
                {
                    isAuth
                        ? (<h2 className="text-xl">Что будем смотреть, <span className="underline">{user?.username}</span>?</h2>)
                        : (
                            <AppButton onClick={() => login()} className="text-xl flex gap-1.5 items-center" disabled={isPending}>
                                Войти через
                                <span>
                                    <AppIcon name="tmdb" className="w-30" />
                                </span>
                            </AppButton>
                        )
                }
            </div>
        </header>
    )
}

export default AppHeader