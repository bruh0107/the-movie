import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { authService, useAuth } from "@/entities/auth";

const ApprovedPage = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const setAuth = useAuth((state) => state.setAuth)

    useEffect(() => {
        const requestToken = searchParams.get('request_token')
        const isApproved = searchParams.get('approved') === 'true'

        if (requestToken && isApproved) {
            authService.createSession(requestToken)
                .then(async (sessionData) => {
                    if(sessionData.success && sessionData.session_id) {
                        const userData = await authService.getAccountDetails(sessionData.session_id)

                        setAuth(sessionData.session_id, userData)

                        navigate('/', { replace: true })
                    }
                })
                .catch((error) => {
                    console.error('Ошибка создания сессии', error)
                    navigate('/', { replace: true })
                })
        } else {
            navigate('/', { replace: true })
        }
    }, [searchParams, setAuth, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="loader"></div>
        </div>
    );
};

export default ApprovedPage;