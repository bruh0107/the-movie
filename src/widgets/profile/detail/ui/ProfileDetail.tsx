import { useAccountDetail } from "@/entities/account";
import { getStorageUrl } from "@/shared/utils";

const ProfileDetail = () => {
    const { data: user } = useAccountDetail()

    return (
        <div className="main-container">
            <div className="flex gap-10">
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
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;