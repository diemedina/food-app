import { create } from 'zustand'
import { Category } from '../utils/types';

type State = {
  categories: Category[]
}

type Actions = {
  getCategory: (id: number) => Category,
}

export const useCategoriesStore = create<State & Actions>(() => ({
  categories: [
    {id: 1, description: 'Almacén', icon: 'bento'},
    {id: 2, description: 'Desayuno / Merienda', icon: 'bakery_dining'},
    {id: 3, description: 'Bebidas', icon: 'liquor'},
    {id: 4, description: 'Lácteos y frescos', icon: 'grocery'},
    {id: 5, description: 'Carne', icon: 'humerus'},
    {id: 6, description: 'Frutas / Verduras', icon: 'nutrition'},
    {id: 7, description: 'Panaderia', icon: 'breakfast_dining'},
    {id: 8, description: 'Congelados', icon: 'ac_unit'},
    {id: 9, description: 'Limpieza', icon: 'mop'},
    {id: 10, description: 'Perfumeria', icon: 'sanitizer'},
    {id: 11, description: 'Bazar', icon: 'shopping_bag'},
    {id: 12, description: 'Otro', icon: 'other_houses'}
  ],
  getCategory: (id: number) => {
    const category: Category = useCategoriesStore.getState().categories.find(c => c.id == id) || {id: 0, description: '', icon: ''};
    return category;
  }
}));