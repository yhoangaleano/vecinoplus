import { create } from 'zustand'
import { services as seedServices, type Service } from '../data/mock'

interface ServiceState {
  services: Service[]
  activeCategory: string
  setActiveCategory: (category: string) => void
  addService: (service: Service) => void
}

export const useServiceStore = create<ServiceState>()((set) => ({
  services: seedServices,
  activeCategory: 'Todo',

  setActiveCategory: (category) => set({ activeCategory: category }),

  addService: (service) =>
    set((state) => ({
      services: [service, ...state.services],
    })),
}))
