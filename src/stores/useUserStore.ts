import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  name: string
  initial: string
  conjunto: string
  tower: string
  rating: number
  orderCount: number
  serviceCount: number
}

interface UserState {
  user: User | null
  isLoggedIn: boolean
  hasCompletedOnboarding: boolean
  login: (user: User) => void
  logout: () => void
  completeOnboarding: () => void
  updateProfile: (updates: Partial<User>) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      hasCompletedOnboarding: false,

      login: (user) => set({ user, isLoggedIn: true }),

      logout: () => set({ user: null, isLoggedIn: false, hasCompletedOnboarding: false }),

      completeOnboarding: () => set({ hasCompletedOnboarding: true }),

      updateProfile: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'vecino-user',
    },
  ),
)
