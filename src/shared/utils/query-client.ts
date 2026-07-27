import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // Отключаем частый авто-запрос при переключении вкладок
            staleTime: 1000 * 60 * 5,    // Данные считаются свежими 5 минут
            retry: 1,                    // В случае ошибки пробуем еще 1 раз
        },
    },
});