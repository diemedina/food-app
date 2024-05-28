import { create } from 'zustand'
import { Ingredient } from '../utils/types'

type State = {
  items: Ingredient[]
}

type Action = {
  edit: (model: Ingredient) => void,
  setItems: (items: Ingredient[]) => void,
  add: (model: Ingredient) => void,
  remove: (id: string) => void
}

export const useKitchenStore = create<State & Action>((set, get) => ({
  items: [
    {id: Math.random().toString(16).slice(2), description: 'Rapiditas', category: 'Alacena', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Arroz', category: 'Alacena', has: false, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Harina', category: 'Alacena', has: true, buy: false},
    {id: Math.random().toString(16).slice(2), description: 'Salsa de tomate', category: 'Alacena', has: true, buy: true},
    {id: Math.random().toString(16).slice(2), description: 'Pure Chef', category: 'Alacena', has: true, buy: false},
  ],
  edit: (model: Ingredient) => {
    const index = get().items.findIndex(item => item.id == model.id);
    let items = get().items
    items[index] = model;
    set(() => ({ items }))
  },
  setItems: (items: Ingredient[]) => set(() => ({ items })),
  add: (model: Ingredient) => set((state): State => ({ items: [...state.items, model] })),
  remove: (id: string) => set((state): State => ({ items: state.items.filter(i => i.id != id) }))
}));