import { useAccountDetail, useLogout } from "@/entities/account";
import { getStorageUrl } from "@/shared/utils";
import type { FC } from "react";
import { AppButton } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

interface Props {
    className?: string
}

const ProfileDetail: FC<Props> = ({ className }) => {
    const { data: user } = useAccountDetail()
    const logout = useLogout()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/', {replace: true})
    }

    return (
        <div className={`flex gap-10 ${className}`}>
            <div className="w-1/6">
                <img
                    className="w-full rounded-full border border-5 border-second"
                    src={user?.avatar.tmdb.avatar_path ? getStorageUrl(user?.avatar.tmdb.avatar_path) : '/default-avatar.jpg'}
                    alt={`${user?.username} avatar`}/>
            </div>
            <div className="text-xl flex flex-col gap-3 justify-center">
                <h1 className="">{ user?.name }</h1>
                <h1>{ user?.username }</h1>
                <p>{ user?.include_adult ? 'Взрослый контент доступен' : 'Взрослый контент недоступен' }</p>
                <AppButton onClick={handleLogout}>Выйти из аккаунта</AppButton>
            </div>
        </div>
    );
};

export default ProfileDetail;