import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { ApiStatus } from "@/shared/api/consts.ts";

export const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        Accept: 'application/json',
    },
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.params = {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: 'ru-RU',
        ...config.params
    }

    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === ApiStatus.UNAUTHORIZED){
            localStorage.removeItem('token')
        }

        return Promise.reject(error)
    }
)