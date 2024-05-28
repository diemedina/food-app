import { create } from 'zustand'
import { Recipe } from '../utils/types'

type State = {
  recipes: Recipe[]
}

type Action = {
  setRecipes: (recipes: Recipe[]) => void,
  edit: (model: Recipe) => void,
  add: (model: Recipe) => void,
  remove: (id: string) => void
}

export const useRecipeStore = create<State & Action>((set, get) => ({
  recipes: [
    {id: Math.random().toString(16).slice(2), title: 'Milanesas con pure', description: '', ingredients: [
      {id: Math.random().toString(16).slice(2), description: 'Carne', category: '', has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Pan rallado', category: '', has: false, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Huevo', category: '', has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Papa', category: '', has: true, buy: false},
      {id: Math.random().toString(16).slice(2), description: 'Leche', category: '', has: true, buy: false}
    ], fridge: false},
  ],
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