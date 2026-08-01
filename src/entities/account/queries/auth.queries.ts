import { useMutation, useQuery } from "@tanstack/react-query";
import { authService, useAuth } from "@/entities/account";

export const useRequestToken = () => {
    return useMutation({
        mutationFn: authService.getRequestToken,
        onSuccess: (data) => {
            if (data?.success && data?.request_token) {
                const redirectUrl = encodeURIComponent(`${window.location.origin}/approved`);
                window.location.href = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=${redirectUrl}`;
            } else {
                console.error("Не удалось получить токен", data);
            }
        },
        onError: (error) => {
            console.error('Ошибка при запросе request_token:', error);
        }
    })
}

export const useAccountDetail = () => {
    const session_id = useAuth(state => state.session_id)

    return useQuery({
        queryKey: ['user'],
        queryFn: () => authService.getAccountDetails(session_id),
        enabled: !!session_id
    })
}