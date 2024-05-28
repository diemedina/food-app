import { create } from 'zustand'
import { Ingredient } from '../utils/types'

type State = {
  items: Ingredient[]
}

type Action = {
  setItems: (items: Ingredient[]) => void,
  add: (model: Ingredient) => void,
  remove: (id: string) => void
}

export const useCartStore = create<State & Action>((set) => ({
  items: [
    {id: Math.random().toString(16).slice(2), description: 'Leche', category: 'Lácteos', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Huevos', category: 'Huevos', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Harina', category: 'Harinas', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Azúcar', category: 'Endulzantes', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Aceite', category: 'Aceites', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Sal', category: 'Condimentos', has: true, buy: false}
  ],
  setItems: (items: Ingredient[]) => set(() => ({ items })),
  add: (model: Ingredient) => set((state): State => ({ items: [...state.items, model] })),
  remove: (id: string) => set((state): State => ({ items: state.items.filter(i => i.id != id) }))
}));