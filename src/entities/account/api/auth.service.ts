import { api } from "@/shared/api";
import type { RequestTokenResponse, User } from "@/entities/account";

export const authService = {
    getRequestToken: async () => {
        const response = await api.get<RequestTokenResponse>('authentication/token/new')
        return response.data
    },

    createSession: async (request_token: string) => {
        const response = await api.post<{ session_id: string, success: boolean }>('authentication/session/new', {
            request_token: request_token
        })

        return response.data
    },

    getAccountDetails: async (session_id: string) => {
        const response = await api.get<User>(`account`, {
            params: { session_id: session_id }
        })

        return response.data
    }
}