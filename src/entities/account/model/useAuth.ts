import { create } from "zustand/react";
import type { AccountTypes } from "@/entities/account";
import { persist } from "zustand/middleware";

export const useAuth = create<AccountTypes>()(
    persist(
        (set) => ({
            session_id: '',
            user: null,
            setAuth: (session_id, user) => set({session_id, user}),
            logout: () => set({ session_id: '', user: null }),
        }),
        {
            name: 'the-movie-auth'
        }
    )
)

export const useIsAuth = () => useAuth((state) => !!state.session_id)

export const useCurrentUser = () => useAuth((state) => state.user)

export const useLogout = () => useAuth((state) => state.logout)