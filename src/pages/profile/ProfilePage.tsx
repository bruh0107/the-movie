import { ProfileDetail } from "@/widgets/profile";
import { Outlet } from "react-router-dom";
import { MovieTabs } from "@/features/tabs";
import { useTitle } from "@/shared/lib";

const ProfilePage = () => {
    useTitle('Мой профиль')

    return (
        <div className="py-30">
            <div className="main-container">
                <ProfileDetail className="mb-10" />
                <MovieTabs />
                <Outlet />
            </div>
        </div>
    );
};

export default ProfilePage;