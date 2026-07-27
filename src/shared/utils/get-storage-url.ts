export const getStorageUrl = (url: string) =>
    (import.meta.env.VITE_API_STORAGE_URL) + url
