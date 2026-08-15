import { useEffect } from "react";

const APP_NAME = 'The Movie'

export const useTitle = (title?: string) => {
    useEffect(() => {
        if (!title) return

        const prevTitle = document.title
        document.title = `${title} | ${APP_NAME}`

        return () => {
            document.title = prevTitle;
        }
    }, [title]);
}