import { create } from 'zustand'
import { Recipe } from '../utils/types'

type State = {
  recipes: Recipe[]
}

type Action = {
  get: (id: string) => Recipe,
  setRecipes: (recipes: Recipe[]) => void,
  edit: (model: Recipe) => void,
  add: (model: Recipe) => void,
  remove: (id: string) => void
}

export const useRecipeStore = create<State & Action>((set, get) => ({
  recipes: [
    {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [
      {id: Math.random().toString(16).slice(2), description: 'Carne', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Pan rallado', category: 1, has: false, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Huevo', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Papa', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Leche', category: 1, has: true, buy: false}
    ], fridge: false},
    {id: Math.random().toString(16).slice(2), title: 'Pizza', description: '', ingredients: [
      {id: Math.random().toString(16).slice(2), description: 'Harina', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Tomate', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Queso', category: 1, has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Jamón', category: 1, has: false, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Aceitunas', category: 1, has: false, buy: false}
    ], fridge: false},
  ],
  get: (id: string) => get().recipes.find(i => i.id == id) || {id: '', title: '', description: '', ingredients: [], fridge: false},
  setRecipes: (recipes: Recipe[]) => set(() => ({ recipes })),
  edit: (model: Recipe) => {
    const index = get().recipes.findIndex(recipe => recipe.id == model.id);
    let recipes = get().recipes
    recipes[index] = model;
    set(() => ({ recipes }))
  },
  add: (model: Recipe) => set((state): State => ({ recipes: [...state.recipes, model] })),
  remove: (id: string) => set((state): State => ({ recipes: state.recipes.filter(i => i.id != id) }))
}));