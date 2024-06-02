export type Ingredient = {
  id: string,
  description: string,
  category: number,
  has: boolean,
  buy: boolean
}

export type Recipe = {
  id: string,
  title: string,
  description: string,
  ingredients: Ingredient[],
  fridge: boolean
}

export type Category = {
  id: number,
  description: string,
  icon: string
}

type Model = {
  [key: number]: string
}

export const days: Model = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}