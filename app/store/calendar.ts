import { create } from 'zustand'
import { Recipe } from '../utils/types'

type Item = {
  id: number
  day: number,
  foods: Recipe[]
}

type State = {
  items: Item[]
}

type Action = {
  setItems: (items: Item[]) => void,
  getToday: () => Item
}

export const useCalendarStore = create<State & Action>((set, get) => ({
  items: [
    {id: 1, day: 1, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 2, day: 2, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 3, day: 3, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 4, day: 4, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 5, day: 5, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 6, day: 6, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
    {id: 7, day: 7, foods: [
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
      {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [], fridge: false},
    ]},
  ],
  setItems: (items: Item[]) => set(() => ({ items })),
  getToday: () => {
    const today: Number = new Date().getDay()
    const item: Item = get().items.find(i => i.day == today) || {id: 0, day: 0, foods: []}
    return item
  }
}));