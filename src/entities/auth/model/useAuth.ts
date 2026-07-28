import { create } from "zustand/react";
import type { AuthTypes } from "@/entities/auth";
import { persist } from "zustand/middleware";

export const useAuth = create<AuthTypes>()(
    persist(
        (set) => ({
            session_id: null,
            user: null,
            setAuth: (session_id, user) => set({session_id, user}),
            logout: () => set({ session_id: null, user: null }),
        }),
        {
            name: 'the-movie-auth'
        }
    )
)

export const useIsAuth = () => useAuth((state) => !!state.session_id)

export const useCurrentUser = () => useAuth((state) => state.user)